import type { Metadata } from "next";
import FloatingQuickActions from "../components/FloatingQuickActions";
import "./globals.css";
import "./info-pages.css";

export const metadata: Metadata = {
  title: "9HO | 상품 비교·추천",
  description: "사기 전에, 9HO. 여러 쇼핑몰의 상품과 가격, 핵심 조건을 한눈에 비교해 더 나은 선택을 돕는 상품 비교추천 서비스",
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
