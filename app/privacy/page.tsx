import type { Metadata } from "next";
import InfoPage from "../../components/InfoPage";

export const metadata: Metadata = {
  title: "개인정보처리방침 | PICKLY",
  description: "PICKLY 개인정보처리방침입니다.",
};

export default function PrivacyPage() {
  return (
    <InfoPage
      eyebrow="PRIVACY POLICY"
      title="개인정보처리방침"
      description="PICKLY는 서비스 이용 과정에서 필요한 정보만 최소한으로 처리하며, 관련 법령에 따라 이용자의 개인정보를 보호하기 위해 노력합니다."
    >
      <article className="infoArticle legalArticle">
        <section><h2>1. 개인정보의 처리 목적</h2><p>현재 PICKLY는 회원가입 기능을 운영하지 않으며, 서비스 이용을 위해 이름·주소·전화번호 등 개인 식별정보를 직접 요구하지 않습니다. 향후 문의 기능 등 개인정보 처리가 필요한 기능이 추가될 경우 해당 목적과 항목을 별도로 안내합니다.</p></section>
        <section><h2>2. 자동으로 수집될 수 있는 정보</h2><p>서비스 안정성 확인, 이용 통계 및 광고 운영을 위해 접속기록, 브라우저·기기 정보, 쿠키와 유사한 기술을 통한 이용 정보가 자동으로 처리될 수 있습니다. 이러한 정보는 서비스 개선과 통계 분석에 활용될 수 있습니다.</p></section>
        <section><h2>3. 쿠키 및 광고</h2><p>PICKLY는 Google Analytics, Google AdSense 등 외부 서비스를 사용할 수 있습니다. 해당 서비스 제공자는 쿠키 등을 이용해 이용 패턴을 분석하거나 광고를 제공할 수 있으며, 구체적인 처리 방식은 각 서비스 제공자의 정책에 따릅니다.</p></section>
        <section><h2>4. 제3자 제공 및 처리위탁</h2><p>PICKLY는 법령상 근거가 있거나 이용자의 동의가 있는 경우를 제외하고 개인정보를 임의로 제3자에게 판매하거나 제공하지 않습니다. 외부 서비스 이용으로 개인정보 처리가 수반되는 경우 관련 법령과 해당 사업자의 정책을 따릅니다.</p></section>
        <section><h2>5. 보유 및 이용기간</h2><p>직접 수집한 개인정보가 없는 경우 별도의 개인정보 보유기간도 존재하지 않습니다. 향후 문의 또는 기타 기능으로 개인정보를 수집하게 되는 경우 목적 달성 후 지체 없이 파기하되, 관계 법령에서 보존을 요구하는 경우에는 해당 기간 동안 보관할 수 있습니다.</p></section>
        <section><h2>6. 이용자의 권리</h2><p>이용자는 관련 법령에 따라 자신의 개인정보에 대한 열람, 정정, 삭제, 처리정지 등을 요청할 수 있습니다. 실제 개인정보 수집 기능이 추가되는 경우 요청 방법을 본 방침에 명확히 안내합니다.</p></section>
        <section><h2>7. 방침의 변경</h2><p>서비스 기능 또는 관련 법령의 변경에 따라 본 방침은 수정될 수 있습니다. 중요한 변경사항은 서비스 내 안내를 통해 고지합니다.</p><p className="infoMeta">시행일: 2026년 9월 9일</p></section>
      </article>
    </InfoPage>
  );
}
