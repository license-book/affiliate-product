import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import WishlistButton from "../../components/WishlistButton";
import { demoProducts, formatWon } from "../../lib/demo-products";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q = "LG그램17" } = await searchParams;
  const query = q.trim();
  return <main>
    <SiteHeader />
    <section className="searchResultsWrap searchResultsWrapNoHero">
      <aside className="searchFilters"><strong>카테고리</strong><button className="active">전체</button><button>노트북·PC</button><button>스마트폰</button><button>TV·가전</button><button>생활가전</button><p>필터는 실제 API 필드 확인 후 확장합니다.</p></aside>
      <div className="searchResults">
        <div className="resultQueryTitle"><b>‘{query || "상품"}’</b> 검색 결과</div>
        <div className="resultTop"><div><span>검색결과</span><strong>{demoProducts.length}개 상품</strong></div><select aria-label="정렬"><option>낮은 가격순</option><option>인기순</option></select></div>
        <div className="resultList">{demoProducts.map((product) => <div key={product.slug} style={{position:"relative"}}><WishlistButton product={product}/><Link href={`/product/${product.slug}`} className="resultItem"><div className={`resultArt productArt ${product.tone}`}><span/></div><div className="resultInfo"><span className="productCategory">{product.category}</span><h2>{product.name}</h2><p>{product.model}</p><strong>{formatWon(product.price)}부터</strong><span>{product.sellers.length}개 판매처 가격비교 →</span></div></Link></div>)}</div>
        <p className="demoNote pageNote">현재 검색 결과는 디자인 검토용 샘플 데이터입니다. AdPick API 연결 후 실제 검색 결과로 교체됩니다.</p>
      </div>
    </section>
    <SiteFooter />
  </main>;
}
