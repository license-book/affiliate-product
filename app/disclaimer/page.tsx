import type { Metadata } from "next";
import InfoPage from "../../components/InfoPage";

export const metadata: Metadata = {
  title: "정보 이용 안내 | PICKLY",
  description: "PICKLY 상품 정보와 제휴 링크 이용에 관한 안내입니다.",
};

export default function DisclaimerPage() {
  return (
    <InfoPage
      eyebrow="INFORMATION NOTICE"
      title="정보 이용 안내"
      description="상품 비교 정보는 구매 판단을 돕기 위한 참고자료입니다. 최종 구매 조건은 반드시 판매처에서 다시 확인해 주세요."
    >
      <article className="infoArticle legalArticle">
        <section><h2>상품 정보의 기준</h2><p>PICKLY에 표시되는 상품명, 가격, 이미지, 판매처, 사양 등의 정보는 제휴사 또는 외부 데이터 제공처의 정보를 바탕으로 구성될 수 있습니다. 정보 갱신 시점에 따라 실제 판매 페이지와 차이가 생길 수 있습니다.</p></section>
        <section><h2>가격·재고·배송</h2><p>가격, 할인, 쿠폰, 카드혜택, 재고, 배송비와 배송일정은 판매처 정책 및 이용자 조건에 따라 달라질 수 있습니다. PICKLY의 표시값보다 판매처 결제 단계의 최신 조건이 우선합니다.</p></section>
        <section><h2>추천 정보</h2><p>추천 또는 비교 결과는 특정 상품의 절대적인 우위를 보증하는 순위가 아닙니다. 예산, 용도, 사양, 휴대성 등 설정된 비교 기준에 따라 정리된 참고정보이며 개인의 사용환경에 따라 적합한 상품은 달라질 수 있습니다.</p></section>
        <section><h2>제휴 마케팅</h2><p>PICKLY의 일부 링크는 제휴 링크입니다. 해당 링크를 통해 구매가 발생할 경우 PICKLY가 제휴사로부터 일정 수수료를 제공받을 수 있습니다. 제휴 여부와 관계없이 사용자의 상품 비교에 필요한 정보를 명확하게 제공하는 것을 원칙으로 합니다.</p></section>
        <section><h2>외부 판매처 거래</h2><p>PICKLY는 상품 판매자가 아니며 직접 결제나 배송을 처리하지 않습니다. 구매, 결제, 취소, 교환, 환불, 배송 및 A/S와 관련한 사항은 이용자가 구매한 판매처의 정책을 확인해야 합니다.</p></section>
      </article>
    </InfoPage>
  );
}
