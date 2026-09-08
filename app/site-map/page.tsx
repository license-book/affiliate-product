import type { Metadata } from "next";
import Link from "next/link";
import InfoPage from "../../components/InfoPage";

export const metadata: Metadata = {
  title: "사이트맵 | PICKLY",
  description: "PICKLY의 주요 메뉴와 안내 페이지를 한눈에 확인하세요.",
};

const groups = [
  {
    title: "상품 서비스",
    links: [
      ["상품 카테고리", "/#categories"],
      ["추천 상품", "/#recommend"],
      ["비교 이용방법", "/#how"],
      ["상품 비교", "/compare"],
      ["비교 가이드", "/guide"],
      ["상품 검색", "/search"],
    ],
  },
  {
    title: "사이트 안내",
    links: [
      ["서비스 소개", "/about"],
      ["개인정보처리방침", "/privacy"],
      ["이용약관", "/terms"],
      ["정보 이용 안내", "/disclaimer"],
      ["사이트맵", "/site-map"],
      ["문의", "/contact"],
    ],
  },
] as const;

export default function SiteMapPage() {
  return (
    <InfoPage
      eyebrow="SITE MAP"
      title="사이트맵"
      description="PICKLY의 주요 서비스와 운영 안내 페이지를 빠르게 찾아보세요."
    >
      <div className="siteMapGrid">
        {groups.map((group) => (
          <section className="siteMapCard" key={group.title}>
            <h2>{group.title}</h2>
            <div>
              {group.links.map(([label, href]) => (
                <Link href={href} key={href}>
                  <span>{label}</span><b>→</b>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </InfoPage>
  );
}
