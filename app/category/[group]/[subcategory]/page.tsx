import Link from "next/link";
import SiteHeader from "../../../../components/SiteHeader";
import ProductFeed from "../../../../components/ProductFeed";
import {searchAdpick} from "../../../../lib/adpick-api";
import {getCategoryKeywords} from "../../../../lib/category-tree";

const groups={
"디지털":["노트북·PC","스마트폰","태블릿","모니터","이어폰·헤드폰","스마트워치","키보드·마우스","저장장치"],
"가전":["TV","냉장고","세탁기·건조기","청소기","에어컨","주방가전","생활가전","계절가전"],
"생활":["청소·정리","욕실용품","수납용품","침구","조명","생활잡화","반려용품","건강용품"],
"주방":["냄비·팬","식기","조리도구","보관용기","텀블러","커피용품","베이킹","주방잡화"],
"패션":["상의","하의","아우터","신발","가방","모자","언더웨어","패션잡화"],
"뷰티":["스킨케어","메이크업","헤어","바디","향수","뷰티기기","남성뷰티","선케어"],
"캠핑·레저":["캠핑","차박","등산","자전거","골프","낚시","여행용품","스포츠"],
"육아":["출산용품","유아동패션","완구","수유·이유식","유아가구","외출용품","학습용품","위생용품"]
} as const;
type Group=keyof typeof groups;

export default async function SubcategoryPage({params}:{params:Promise<{group:string;subcategory:string}>}){
 const p=await params;const group=decodeURIComponent(p.group);const subcategory=decodeURIComponent(p.subcategory);
 const keywords=getCategoryKeywords(group,subcategory);const batches=await Promise.all((keywords.length?keywords:[subcategory]).map(q=>searchAdpick(q,10)));
 const seen=new Set<string>();const products=batches.flat().filter(p=>{const key=`${p.name}|${p.model}|${p.price}`;if(seen.has(key))return false;seen.add(key);return true}).slice(0,40);
 const validGroup=Object.prototype.hasOwnProperty.call(groups,group)?group as Group:null;
 return <main className="subcategoryPage"><SiteHeader/>
  {validGroup&&<section className="subcategoryNavShell">
   <nav className="categoryFirstTabs subcategoryFirstTabs">{(Object.keys(groups) as Group[]).map(x=><Link key={x} className={x===validGroup?"active":""} href={`/category?group=${encodeURIComponent(x)}`}>{x}</Link>)}</nav>
   <nav className="subcategoryTextNav">{groups[validGroup].map(x=><Link key={x} className={x===subcategory?"active":""} href={`/category/${encodeURIComponent(validGroup)}/${encodeURIComponent(x)}`}>{x}</Link>)}</nav>
  </section>}
  <section className="rankHero"><small>{group}</small><h1>{subcategory}</h1><p>{group} &gt; {subcategory}</p></section>
  {products.length?<section className="feedSection"><ProductFeed products={products} limit={20} variant="list"/></section>:<section className="rankPending"><strong>상품을 불러오지 못했습니다.</strong><p>API 연결 상태를 확인하거나 잠시 후 다시 확인해주세요.</p></section>}
  <div style={{padding:"20px 18px 110px"}}><Link href={`/category?group=${encodeURIComponent(group)}`}>‹ {group} 카테고리로 돌아가기</Link></div>
 </main>
}