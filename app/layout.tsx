import type { Metadata } from "next";
import FloatingQuickActions from "../components/FloatingQuickActions";
import "./globals.css";
import "./info-pages.css";

export const metadata: Metadata = {
  title: "제휴상품 비교추천",
  description: "여러 쇼핑몰의 상품을 한곳에서 비교하고 추천받는 제휴상품 비교 서비스",
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
