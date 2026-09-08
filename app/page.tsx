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
          <p className="eyebrow">SMART PRODUCT COMPARISON</p>
          <h1>여러 쇼핑몰 상품을<br/><span>한곳에서 비교하세요.</span></h1>
          <p className="description">가격만 나열하지 않고 용도와 조건에 맞는 상품을 찾기 쉽게 정리합니다.</p>
          <form className="search" action="#recommend">
            <span aria-hidden="true">⌕</span>
            <input aria-label="상품 검색" placeholder="어떤 상품을 찾고 계세요?" />
            <button type="submit">검색</button>
          </form>
          <div className="quick"><b>인기 검색</b><a href="#recommend">노트북</a><a href="#recommend">무선이어폰</a><a href="#recommend">로봇청소기</a><a href="#recommend">모니터</a></div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="sectionHead"><div><p className="sectionLabel">CATEGORY</p><h2>무엇을 비교할까요?</h2></div><p>필요한 상품군부터 빠르게 찾아보세요.</p></div>
        <div className="categoryGrid">{categories.map((item) => <a className="categoryCard" href="#recommend" key={item.name}><span className="categoryIcon">{item.icon}</span><strong>{item.name}</strong><small>{item.desc}</small><i>→</i></a>)}</div>
      </section>

      <section className="recommend" id="recommend">
        <div className="section recommendInner">
          <div className="sectionHead"><div><p className="sectionLabel">RECOMMEND</p><h2>조건에 맞는 상품을 쉽게</h2></div><p>상품 검색 API 연결 후 실제 가격과 판매처가 자동으로 표시됩니다.</p></div>
          <div className="pickGrid">{picks.map((item, i) => <article className="pickCard" key={item.title}><div className="productVisual"><span>0{i+1}</span></div><div className="pickBody"><div className="badge">{item.badge}</div><small>{item.category}</small><h3>{item.title}</h3><p>{item.meta}</p><button>비교 보기 <span>→</span></button></div></article>)}</div>
        </div>
      </section>

      <section className="section how" id="how">
        <div><p className="sectionLabel">HOW IT WORKS</p><h2>복잡한 쇼핑을 더 단순하게</h2></div>
        <div className="steps"><div><b>01</b><strong>상품 검색</strong><p>원하는 상품이나 카테고리를 검색합니다.</p></div><div><b>02</b><strong>조건 비교</strong><p>가격과 핵심 조건을 한 화면에서 비교합니다.</p></div><div><b>03</b><strong>판매처 이동</strong><p>마음에 드는 상품의 판매처로 안전하게 이동합니다.</p></div></div>
      </section>

      <SiteFooter />
    </main>
  );
}
