import type { Metadata } from "next";
import InfoPage from "../../components/InfoPage";

export const metadata: Metadata = {
  title: "이용약관 | PICKLY",
  description: "PICKLY 서비스 이용약관입니다.",
};

export default function TermsPage() {
  return (
    <InfoPage
      eyebrow="TERMS OF USE"
      title="이용약관"
      description="PICKLY 서비스를 이용하기 전에 아래 내용을 확인해 주세요."
    >
      <article className="infoArticle legalArticle">
        <section><h2>1. 목적</h2><p>본 약관은 PICKLY가 제공하는 상품 비교·추천 및 관련 정보 서비스의 이용 조건과 운영 원칙을 정하는 것을 목적으로 합니다.</p></section>
        <section><h2>2. 서비스의 성격</h2><p>PICKLY는 상품 정보와 비교 기준을 정리해 제공하는 정보 서비스입니다. 실제 상품의 판매, 결제, 배송, 교환, 환불 및 A/S는 각 판매처의 정책과 책임에 따라 이루어집니다.</p></section>
        <section><h2>3. 정보의 정확성</h2><p>상품 가격, 재고, 배송조건, 사양과 판매처 정보는 실시간으로 변경될 수 있습니다. PICKLY는 가능한 정확한 정보를 제공하기 위해 노력하지만 모든 정보의 최신성이나 완전성을 보증하지 않으며, 구매 전 판매처의 최종 정보를 확인해야 합니다.</p></section>
        <section><h2>4. 이용자의 책임</h2><p>이용자는 서비스를 정상적인 비교·탐색 목적으로 사용해야 하며, 서비스 운영을 방해하거나 자동화된 비정상 접근, 무단 복제, 데이터 수집 등 서비스에 피해를 줄 수 있는 행위를 해서는 안 됩니다.</p></section>
        <section><h2>5. 제휴 링크</h2><p>일부 상품 링크는 제휴 마케팅 링크일 수 있습니다. 해당 링크를 통한 구매가 발생하면 PICKLY가 일정 수수료를 받을 수 있으며, 이는 비교 서비스의 운영비로 활용될 수 있습니다.</p></section>
        <section><h2>6. 서비스 변경 및 중단</h2><p>운영상 또는 기술상 필요한 경우 서비스의 일부 기능이 추가·변경·중단될 수 있습니다. 중요한 변경사항은 가능한 범위에서 서비스 내에 안내합니다.</p></section>
        <section><h2>7. 면책</h2><p>외부 판매처에서 발생한 결제, 배송, 상품 품질, 계약 분쟁 등은 해당 거래 당사자 간의 문제이며 PICKLY는 판매자가 아닙니다. 다만 서비스 자체의 오류나 잘못된 정보가 확인되면 수정하기 위해 노력합니다.</p></section>
        <section><h2>8. 약관의 변경</h2><p>관련 법령이나 서비스 운영 방식이 변경되는 경우 본 약관도 수정될 수 있습니다. 변경된 약관은 서비스에 게시한 시점부터 적용됩니다.</p><p className="infoMeta">시행일: 2026년 9월 9일</p></section>
      </article>
    </InfoPage>
  );
}
