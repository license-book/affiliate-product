import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProductFeed from "../components/ProductFeed";

const categories = ["전체", "노트북·PC", "스마트폰", "TV·가전", "디지털", "생활가전", "생활용품", "주방", "선물"];
const keywords = ["갤럭시북4 프로", "LG그램17", "로봇청소기", "아이폰16", "75인치 TV", "100만원대 노트북"];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="serviceHero compactHero">
        <div className="serviceHeroInner">
          <div className="heroCopy">
            <p className="eyebrow">호구 되기 전에, 9HO.</p>
            <h1>상품 찾고,<br/><span>가격 바로 비교.</span></h1>
          </div>
          <form className="serviceSearch" action="/search">
            <input name="q" aria-label="상품 검색" placeholder="상품명·모델명을 검색하세요" />
            <button type="submit">검색</button>
          </form>
          <div className="keywordRow"><b>인기 검색</b>{keywords.slice(0,5).map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`}>{item}</Link>)}</div>
        </div>
      </section>

      <nav className="categoryStrip" id="categories" aria-label="상품 카테고리">
        <div className="categoryStripInner compactCategories">
          <div>{categories.map((item, index) => <Link className={index === 0 ? "activeCategory" : ""} key={item} href={index === 0 ? "/#best" : `/search?q=${encodeURIComponent(item)}`}>{item}</Link>)}</div>
        </div>
      </nav>

      <section className="serviceSection firstFeed" id="best">
        <div className="serviceSectionHead"><div><span>BEST</span><h2>지금 인기 있는 상품</h2></div><p>화면 검토용 샘플입니다. AdPick 연결 후 실제 인기상품으로 자동 교체됩니다.</p></div>
        <ProductFeed limit={8}/>
      </section>

      <section className="keywordModule">
        <div className="keywordModuleInner">
          <div><span>POPULAR SEARCH</span><h2>많이 찾는 검색</h2></div>
          <div className="keywordChips">{keywords.map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`}>{item}<span>→</span></Link>)}</div>
        </div>
      </section>

      <section className="serviceSection moreFeed">
        <div className="serviceSectionHead"><div><span>DISCOVER</span><h2>더 둘러보기</h2></div><p>상품을 선택하면 판매처별 가격을 확인할 수 있습니다.</p></div>
        <ProductFeed limit={8}/>
      </section>

      <SiteFooter />
    </main>
  );
}
