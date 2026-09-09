import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const categories = [
  { icon: "💻", name: "노트북", desc: "업무·학업·휴대성" },
  { icon: "📱", name: "스마트폰", desc: "성능·카메라·가격" },
  { icon: "📺", name: "TV·가전", desc: "생활가전 한눈에" },
  { icon: "🎧", name: "디지털", desc: "이어폰·주변기기" },
  { icon: "🏠", name: "생활용품", desc: "실속형 인기상품" },
  { icon: "🎁", name: "선물추천", desc: "예산과 대상별 추천" },
];

const picks = [
  { category: "노트북", title: "가볍게 들고 다니는 업무용 노트북", meta: "휴대성 · 배터리 · 화면", badge: "비교 준비중" },
  { category: "생활가전", title: "가격과 핵심 기능을 함께 보는 인기 가전", meta: "가격 · 기능 · 판매처", badge: "비교 준비중" },
  { category: "디지털", title: "예산에 맞춰 고르는 실속형 디지털 기기", meta: "예산 · 용도 · 후기", badge: "비교 준비중" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero">
        <div className="heroInner">
          <p className="eyebrow">9HO 구호 · SMART SHOPPING</p>
          <h1>호구 되기 전에, 9HO.<br/><span>사기 전에 비교하세요.</span></h1>
          <p className="description">같은 상품도 가격과 조건은 다릅니다. 9HO 구호가 여러 쇼핑몰의 가격과 핵심 조건을 한곳에 모아 더 좋은 선택을 돕습니다.</p>
          <form className="search" action="#recommend">
            <span aria-hidden="true">⌕</span>
            <input aria-label="상품 검색" placeholder="사기 전에, 먼저 비교해보세요" />
            <button type="submit">비교하기</button>
          </form>
          <div className="quick"><b>지금 많이 비교하는 상품</b><a href="#recommend">노트북</a><a href="#recommend">무선이어폰</a><a href="#recommend">로봇청소기</a><a href="#recommend">모니터</a></div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="sectionHead"><div><p className="sectionLabel">9HO CATEGORY</p><h2>뭘 살지 정했다면, 이제 제대로 비교하세요</h2></div><p>상품군별로 가격과 꼭 확인해야 할 조건을 빠르게 살펴보세요.</p></div>
        <div className="categoryGrid">{categories.map((item) => <a className="categoryCard" href="#recommend" key={item.name}><span className="categoryIcon">{item.icon}</span><strong>{item.name}</strong><small>{item.desc}</small><i>→</i></a>)}</div>
      </section>

      <section className="recommend" id="recommend">
        <div className="section recommendInner">
          <div className="sectionHead"><div><p className="sectionLabel">9HO PICK · 구호 추천</p><h2>가격만 싼 상품보다, 잘 산 상품을 찾습니다</h2></div><p>가격·용도·핵심 조건·판매처를 함께 비교해 나에게 맞는 선택을 찾아보세요.</p></div>
          <div className="pickGrid">{picks.map((item, i) => <article className="pickCard" key={item.title}><div className="productVisual"><span>0{i+1}</span></div><div className="pickBody"><div className="badge">{item.badge}</div><small>{item.category}</small><h3>{item.title}</h3><p>{item.meta}</p><button>비교 보기 <span>→</span></button></div></article>)}</div>
        </div>
      </section>

      <section className="section how" id="how">
        <div><p className="sectionLabel">WHY 9HO?</p><h2>호구 되지 않는 쇼핑, 비교에서 시작합니다</h2></div>
        <div className="steps"><div><b>01</b><strong>찾고</strong><p>사고 싶은 상품이나 카테고리를 검색합니다.</p></div><div><b>02</b><strong>비교하고</strong><p>가격과 핵심 조건, 판매처를 한눈에 비교합니다.</p></div><div><b>03</b><strong>잘 고르고</strong><p>나에게 맞는 조건을 확인한 뒤 원하는 판매처로 이동합니다.</p></div></div>
      </section>

      <SiteFooter />
    </main>
  );
}
