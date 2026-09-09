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
          <p className="eyebrow">9HO SMART SHOPPING</p>
          <h1>사기 전에, 9HO.<br/><span>비교하면 더 좋은 선택이 보입니다.</span></h1>
          <p className="description">여러 쇼핑몰의 가격과 핵심 조건을 한눈에 비교해, 더 잘 고를 수 있도록 정리합니다.</p>
          <form className="search" action="#recommend">
            <span aria-hidden="true">⌕</span>
            <input aria-label="상품 검색" placeholder="무엇을 비교해볼까요?" />
            <button type="submit">검색</button>
          </form>
          <div className="quick"><b>지금 많이 찾는 상품</b><a href="#recommend">노트북</a><a href="#recommend">무선이어폰</a><a href="#recommend">로봇청소기</a><a href="#recommend">모니터</a></div>
        </div>
      </section>

      <section className="section" id="categories">
        <div className="sectionHead"><div><p className="sectionLabel">CATEGORY</p><h2>지금 필요한 상품부터 비교하세요</h2></div><p>상품군을 고르면 비교해야 할 기준부터 빠르게 확인할 수 있습니다.</p></div>
        <div className="categoryGrid">{categories.map((item) => <a className="categoryCard" href="#recommend" key={item.name}><span className="categoryIcon">{item.icon}</span><strong>{item.name}</strong><small>{item.desc}</small><i>→</i></a>)}</div>
      </section>

      <section className="recommend" id="recommend">
        <div className="section recommendInner">
          <div className="sectionHead"><div><p className="sectionLabel">9HO PICK</p><h2>잘 고르는 쇼핑, 9HO가 정리합니다</h2></div><p>가격과 용도, 핵심 조건을 함께 보고 나에게 맞는 상품을 찾아보세요.</p></div>
          <div className="pickGrid">{picks.map((item, i) => <article className="pickCard" key={item.title}><div className="productVisual"><span>0{i+1}</span></div><div className="pickBody"><div className="badge">{item.badge}</div><small>{item.category}</small><h3>{item.title}</h3><p>{item.meta}</p><button>비교 보기 <span>→</span></button></div></article>)}</div>
        </div>
      </section>

      <section className="section how" id="how">
        <div><p className="sectionLabel">HOW 9HO WORKS</p><h2>비교는 간단하게, 선택은 똑똑하게</h2></div>
        <div className="steps"><div><b>01</b><strong>상품 검색</strong><p>궁금한 상품이나 카테고리를 찾아보세요.</p></div><div><b>02</b><strong>한눈에 비교</strong><p>가격과 핵심 조건, 판매처를 한 화면에서 비교합니다.</p></div><div><b>03</b><strong>더 나은 선택</strong><p>비교 결과를 확인하고 마음에 드는 판매처로 이동합니다.</p></div></div>
      </section>

      <SiteFooter />
    </main>
  );
}
