import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ProductFeed from "../components/ProductFeed";
import RecentlyViewed from "../components/RecentlyViewed";
import styles from "./page.module.css";

const categories = ["전체", "노트북·PC", "스마트폰", "TV·가전", "디지털", "생활가전", "생활용품", "주방", "선물"];
const keywords = ["갤럭시북4 프로", "LG그램17", "로봇청소기", "아이폰16", "75인치 TV", "100만원대 노트북"];
const discoveryGroups = [
  { title: "가격대로 찾기", description: "예산에 맞춰 바로 둘러보세요", items: ["50만원 이하 노트북", "100만원대 노트북", "200만원 이하 TV", "50만원 이하 태블릿"] },
  { title: "용도로 찾기", description: "쓰임에 맞는 상품을 빠르게 찾아보세요", items: ["대학생 노트북", "업무용 노트북", "1인가구 가전", "신혼 가전"] },
  { title: "인기 검색", description: "많이 찾는 상품과 조건을 확인하세요", items: ["갤럭시북4 프로 가격비교", "LG그램17 최저가", "로보락 가격", "아이폰16 가격비교"] },
  { title: "조건별 찾기", description: "필요한 조건부터 선택해보세요", items: ["75인치 TV", "무선청소기", "휴대용 모니터", "로봇청소기"] },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className={`serviceHero compactHero ${styles.heroMobileHidden}`}>
        <div className="serviceHeroInner">
          <div className="heroCopy">
            <p className="eyebrow">호구 되기 전에, 9HO.</p>
            <h1>상품 찾고,<br/><span>가격 바로 비교.</span></h1>
          </div>
          <form className={`serviceSearch ${styles.heroSearchMobileHidden}`} action="/search">
            <input name="q" aria-label="상품 검색" placeholder="상품명·모델명을 검색하세요" />
            <button type="submit">검색</button>
          </form>
          <div className="keywordRow"><b>인기 검색</b>{keywords.slice(0,5).map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`}>{item}</Link>)}</div>
        </div>
      </section>

      <nav className={`categoryStrip ${styles.categoryMobileFirst}`} id="categories" aria-label="상품 카테고리">
        <div className="categoryStripInner compactCategories">
          <div>{categories.map((item, index) => <Link className={index === 0 ? "activeCategory" : ""} key={item} href={index === 0 ? "/#best" : `/search?q=${encodeURIComponent(item)}`}>{item}</Link>)}</div>
        </div>
      </nav>

      <RecentlyViewed />

      <section className="serviceSection firstFeed" id="best">
        <div className="serviceSectionHead"><div><span>BEST</span><h2>지금 인기 있는 상품</h2></div><p>화면 검토용 샘플입니다. AdPick 연결 후 실제 인기상품으로 자동 교체됩니다.</p></div>
        <ProductFeed limit={8}/>
      </section>

      <section className="discoveryHub" id="discover">
        <div className="discoveryHubInner">
          <div className="discoveryHubHead">
            <div><span>FIND YOUR PICK</span><h2>조건으로 찾아보세요</h2></div>
            <p>상품명을 몰라도 괜찮아요. 가격대·용도·인기 검색·조건에서 원하는 기준을 선택하면 관련 상품을 바로 볼 수 있습니다.</p>
          </div>
          <div className="discoveryGroups">
            {discoveryGroups.map((group) => (
              <section className="discoveryGroup" key={group.title}>
                <h3>{group.title}</h3><p>{group.description}</p>
                <div>{group.items.map((item) => <Link key={item} href={`/search?q=${encodeURIComponent(item)}`}><span>{item}</span><b>→</b></Link>)}</div>
              </section>
            ))}
          </div>
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
