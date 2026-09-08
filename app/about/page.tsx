import type { Metadata } from "next";
import InfoPage from "../../components/InfoPage";

export const metadata: Metadata = {
  title: "서비스 소개 | PICKLY",
  description: "PICKLY 제휴상품 비교추천 서비스의 운영 목적과 상품 비교 원칙을 안내합니다.",
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="ABOUT PICKLY"
      title="복잡한 상품 선택을 더 단순하게"
      description="PICKLY는 여러 판매처의 상품을 한곳에서 비교하고, 가격뿐 아니라 용도와 핵심 조건까지 함께 살펴볼 수 있도록 정리하는 상품 비교추천 서비스입니다."
    >
      <article className="infoArticle">
        <section>
          <h2>서비스가 하는 일</h2>
          <p>사용자가 상품을 찾을 때 여러 쇼핑몰을 반복해서 오가지 않아도 되도록 상품명, 가격, 판매처, 핵심 특징과 비교 기준을 한 화면에서 확인할 수 있는 구조를 지향합니다.</p>
          <div className="infoFeatureGrid">
            <div><strong>상품 검색</strong><span>원하는 상품과 카테고리를 빠르게 찾습니다.</span></div>
            <div><strong>조건 비교</strong><span>가격과 주요 사양, 용도별 조건을 함께 봅니다.</span></div>
            <div><strong>추천 정리</strong><span>가성비, 휴대성, 성능 등 선택 기준별로 정리합니다.</span></div>
            <div><strong>판매처 연결</strong><span>비교 후 선택한 판매처의 최신 상품 페이지로 이동합니다.</span></div>
          </div>
        </section>
        <section>
          <h2>비교 원칙</h2>
          <p>PICKLY는 특정 판매처의 상품을 무조건 우선하지 않고, 사용자가 실제 구매 판단에 활용할 수 있는 비교 기준을 중심으로 정보를 구성합니다. 상품 가격과 재고, 배송조건은 수시로 달라질 수 있으므로 최종 구매 전 판매처에서 최신 정보를 다시 확인해야 합니다.</p>
        </section>
        <section>
          <h2>제휴 수익 안내</h2>
          <p>일부 상품 링크에는 제휴 마케팅 링크가 포함될 수 있으며, 사용자가 해당 링크를 통해 상품을 구매하면 PICKLY가 판매처로부터 일정 수수료를 받을 수 있습니다. 이 수수료로 인해 사용자의 구매가격이 추가로 올라가지는 않습니다.</p>
        </section>
      </article>
    </InfoPage>
  );
}
