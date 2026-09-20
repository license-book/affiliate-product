import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import ProductFeed from "../components/ProductFeed";
import RecentlyViewed from "../components/RecentlyViewed";

const categories = ["홈","전체","디지털","가전","생활","주방","선물","PC","모바일"];
const chips = ["오늘의 추천","BEST 100","5천원 이하","대학생 노트북","1인가구","신혼가전"];

export default function Home() {
  return <main className="athlerHome">
    <SiteHeader />
    <section className="mobileIntro">
      <div className="introCopy"><span>9HO PICK</span><h1>오늘은<br/>뭘 비교해볼까요?</h1><p>여러 판매처의 가격을 한 번에 비교해요.</p></div>
    </section>
    <nav className="mobileTabs" id="categories">{categories.map((x,i)=><Link className={i===0?"active":""} key={x} href={x==="홈"?"/":x==="전체"?"/#best":`/search?q=${encodeURIComponent(x)}`}>{x}</Link>)}</nav>
    <RecentlyViewed />
    <section className="quickChips"><div>{chips.map(x=><Link key={x} href={x==="BEST 100"?"/#best":`/search?q=${encodeURIComponent(x)}`}>{x}<span>›</span></Link>)}</div></section>
    <section className="feedSection" id="best"><div className="feedTitle"><div><small>NOW</small><h2>지금 많이 보는 상품</h2></div><Link href="/search?q=인기상품">전체보기</Link></div><ProductFeed limit={8}/></section>
    <section className="feedSection"><div className="feedTitle"><div><small>UNDER 5,000</small><h2>5천원 이하 발견</h2></div><Link href="/search?q=5000원이하">더보기</Link></div><p className="feedDesc">가볍게 둘러보다 발견하는 실속 상품</p><ProductFeed limit={4}/></section>
    <section className="feedSection"><div className="feedTitle"><div><small>FOR YOU</small><h2>조건으로 골라보기</h2></div></div><div className="discoveryList">{["대학생·새학기","1인가구 필수템","신혼·이사가전","홈오피스","여행 준비물","선물 추천"].map(x=><Link href={`/search?q=${encodeURIComponent(x)}`} key={x}><strong>{x}</strong><span>›</span></Link>)}</div></section>
    <div className="mobileDisclosure">9HO는 상품을 직접 판매하지 않으며, 일부 링크를 통한 구매 시 제휴 수수료를 받을 수 있습니다.</div>
  </main>;
}
