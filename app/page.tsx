import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProductFeed from "../components/ProductFeed";

const categories = ["노트북·PC", "스마트폰", "TV·가전", "디지털", "생활가전", "생활용품", "주방", "선물"];
const keywords = ["갤럭시북4 프로", "LG그램17", "로봇청소기", "아이폰16", "75인치 TV", "100만원대 노트북"];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="serviceHero">
        <div className="serviceHeroInner">
          <div>
            <p className="eyebrow">9HO 구호 · 가격을 먼저 비교하는 쇼핑</p>
            <h1>사기 전에,<br/><span>가격부터 확인하세요.</span></h1>
            <p>상품명이나 모델명을 검색하면 여러 판매처의 가격을 한곳에서 확인할 수 있습니다.</p>
          </div>
          <form className="serviceSearch" action="/search">
            <input name="q" aria-label="상품 검색" placeholder="상품명·모델명을 검색하세요" />
            <button type="submit">검색</button>
          </form>
          <div className="keywordRow"><b>많이 찾는 검색</b>{keywords.slice(0,4).map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`}>{item}</Link>)}</div>
        </div>
      </section>

      <section className="serviceSection" id="best">
        <div className="serviceSectionHead"><div><span>BEST</span><h2>지금 인기 있는 상품</h2></div><p>현재는 화면 검토용 샘플이며, AdPick 연결 후 실제 인기상품 데이터로 교체됩니다.</p></div>
        <ProductFeed limit={4}/>
      </section>

      <section className="categoryStrip" id="categories">
        <div className="categoryStripInner">
          <strong>카테고리로 찾기</strong>
          <div>{categories.map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`}>{item}</Link>)}</div>
        </div>
      </section>

      <section className="serviceSection">
        <div className="serviceSectionHead"><div><span>DISCOVER</span><h2>상품을 둘러보고 바로 가격 비교</h2></div><p>상품을 선택하면 모바일에서는 상세 가격비교로, PC에서는 빠른 가격비교를 먼저 확인할 수 있습니다.</p></div>
        <ProductFeed limit={8}/>
      </section>

      <section className="searchIdeas">
        <div className="searchIdeasInner">
          <div><span>SEARCH IDEAS</span><h2>많이 찾는 검색</h2><p>검색 의도에 맞는 상품을 빠르게 찾을 수 있도록 연결합니다.</p></div>
          <div className="searchIdeaLinks">{keywords.map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`}>{item}<span>→</span></Link>)}</div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
