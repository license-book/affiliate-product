import type { Metadata } from "next";
import FloatingQuickActions from "../components/FloatingQuickActions";
import MobileBottomNav from "../components/MobileBottomNav";
import "./globals.css";
import "./info-pages.css";
import "./service-ui.css";
import "./search-cleanup.css";
import "./product-detail-fix.css";
import "./mobile-app.css";

export const metadata: Metadata = {
  title: "딜겟 | 상품 발견·가격비교",
  description: "오늘의 좋은 상품을 발견하는 딜겟. 상품명과 모델명을 검색하고 여러 판매처의 가격을 한곳에서 비교하는 상품 가격비교 서비스",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <FloatingQuickActions />
        <MobileBottomNav />
      </body>
    </html>
  );
}
