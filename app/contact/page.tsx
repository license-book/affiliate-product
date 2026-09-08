import type { Metadata } from "next";
import InfoPage from "../../components/InfoPage";

export const metadata: Metadata = {
  title: "문의 | PICKLY",
  description: "PICKLY 서비스 이용 및 정보 수정 문의 안내입니다.",
};

export default function ContactPage() {
  return (
    <InfoPage
      eyebrow="CONTACT"
      title="문의"
      description="서비스 이용 중 발견한 오류, 상품 정보 수정 요청, 제휴 및 운영 관련 문의를 안내합니다."
    >
      <article className="infoArticle">
        <section>
          <h2>문의 가능한 내용</h2>
          <div className="infoFeatureGrid">
            <div><strong>상품 정보 수정</strong><span>가격·상품명·판매처 등 잘못 표시된 정보를 알려주세요.</span></div>
            <div><strong>서비스 오류</strong><span>검색, 비교, 링크 이동 등 이용 중 발생한 문제를 알려주세요.</span></div>
            <div><strong>제휴 문의</strong><span>상품 데이터, 제휴 마케팅, 서비스 협업 관련 문의를 받습니다.</span></div>
            <div><strong>기타 문의</strong><span>서비스 운영과 관련한 제안이나 개선 의견을 전달할 수 있습니다.</span></div>
          </div>
        </section>
        <section>
          <h2>문의 전 확인해 주세요</h2>
          <p>상품 주문, 결제, 배송, 교환, 환불, A/S에 관한 문의는 PICKLY가 아닌 실제 구매한 판매처로 문의해야 합니다. PICKLY는 상품을 직접 판매하거나 결제를 처리하지 않습니다.</p>
        </section>
        <section className="contactNotice">
          <h2>문의 채널</h2>
          <p>현재 공식 문의 채널을 정리 중입니다. 연락처가 확정되는 즉시 이 페이지에 안내하겠습니다. 그 전까지는 서비스 내 정보 수정 및 운영 문의 기능을 준비하는 단계입니다.</p>
        </section>
      </article>
    </InfoPage>
  );
}
