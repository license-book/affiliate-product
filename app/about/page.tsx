import type { Metadata } from "next";
import InfoPage from "../../components/InfoPage";

export const metadata: Metadata = {
  title: "사이트 소개 | 9HO 구호",
  description: "좋은 상품과 좋은 가격, 더 나은 선택을 구하는 9HO 구호의 브랜드 이야기와 상품 비교 원칙을 안내합니다.",
};

export default function AboutPage() {
  return (
    <InfoPage
      eyebrow="ABOUT 9HO · 구호"
      title="좋은 것을 구(求)하다, 9HO"
      description="9HO 구호는 좋은 상품을 구하고, 좋은 가격을 구하고, 더 나은 선택을 구하는 상품 비교·추천 서비스입니다."
    >
      <article className="infoArticle">
        <section>
          <h2>9HO, 왜 구호인가요?</h2>
          <p>9HO의 한글 이름은 ‘구호’입니다. 여기에는 좋은 것을 구(求)한다는 의미를 담았습니다. 수많은 상품과 판매처 가운데 더 좋은 상품, 더 좋은 가격, 나에게 더 잘 맞는 선택을 찾아보자는 뜻입니다.</p>
          <p>동시에 구호(口號)는 함께 외치는 한마디라는 뜻도 있습니다. 그래서 9HO의 쇼핑 구호는 분명합니다. <strong>“호구 되기 전에, 9HO.”</strong> 비교 없이 서둘러 사기보다 한 번 더 가격과 조건을 확인하고 잘 고르자는 의미입니다.</p>
        </section>
        <section>
          <h2>좋은 선택을 구하는 방법</h2>
          <div className="infoFeatureGrid">
            <div><strong>좋은 상품을 구하다</strong><span>원하는 상품과 카테고리에서 살펴볼 만한 선택지를 찾습니다.</span></div>
            <div><strong>좋은 가격을 구하다</strong><span>여러 판매처의 가격과 구매 조건을 한눈에 비교합니다.</span></div>
            <div><strong>맞는 조건을 구하다</strong><span>가격뿐 아니라 사양과 용도, 핵심 조건을 함께 살펴봅니다.</span></div>
            <div><strong>더 나은 선택을 구하다</strong><span>비교한 정보를 바탕으로 나에게 맞는 판매처와 상품을 선택합니다.</span></div>
          </div>
        </section>
        <section>
          <h2>9HO의 비교 원칙</h2>
          <p>9HO는 단순히 가장 싼 상품만 보여주는 것을 목표로 하지 않습니다. 가격과 주요 사양, 용도와 판매 조건을 함께 살펴 사용자가 실제 구매 판단에 활용할 수 있도록 정보를 정리합니다. 상품 가격과 재고, 배송 조건은 수시로 달라질 수 있으므로 최종 구매 전에는 해당 판매처에서 최신 정보를 다시 확인해야 합니다.</p>
        </section>
        <section>
          <h2>제휴 수익 안내</h2>
          <p>일부 상품 링크에는 제휴 마케팅 링크가 포함될 수 있으며, 사용자가 해당 링크를 통해 상품을 구매하면 9HO가 판매처로부터 일정 수수료를 받을 수 있습니다. 이 수수료로 인해 사용자의 구매가격이 추가로 올라가지는 않습니다.</p>
        </section>
      </article>
    </InfoPage>
  );
}
