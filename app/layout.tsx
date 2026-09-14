import type { Metadata } from "next";
import FloatingQuickActions from "../components/FloatingQuickActions";
import "./globals.css";
import "./info-pages.css";
import "./service-ui.css";
import "./search-cleanup.css";

export const metadata: Metadata = {
  title: "9HO | 상품 가격비교",
  description: "호구 되기 전에, 9HO. 상품명과 모델명을 검색하고 여러 판매처의 가격을 한곳에서 비교하는 상품 가격비교 서비스",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        {children}
        <FloatingQuickActions />
      </body>
    </html>
  );
}
