import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <div className="siteFooterGrid">
          <div>
            <Link href="/" className="siteFooterBrand">
              <span className="siteFooterBrandKo">9HO</span>
              <span className="siteFooterBrandEn">사기 전에, 9HO.</span>
            </Link>

            <p className="siteFooterIntro">
              여러 쇼핑몰의 상품과 가격, 핵심 조건을 한눈에 비교해 더 나은 선택을 돕는
              상품 비교추천 서비스입니다.
            </p>

            <p className="siteFooterNotice">
              일부 링크를 통해 구매가 이루어질 경우 제휴 수수료를 제공받을 수 있습니다.
            </p>
          </div>

          <div>
            <h3>상품 서비스</h3>
            <nav className="siteFooterNav" aria-label="상품 서비스">
              <Link href="/#categories">상품 카테고리</Link>
              <Link href="/#recommend">추천 상품</Link>
              <Link href="/#how">비교 이용방법</Link>
              <Link href="/compare">상품 비교</Link>
              <Link href="/guide">비교 가이드</Link>
              <Link href="/search">상품 검색</Link>
            </nav>
          </div>

          <div>
            <h3>사이트 안내</h3>
            <nav className="siteFooterNav" aria-label="사이트 안내">
              <Link href="/about">서비스 소개</Link>
              <Link href="/privacy">개인정보처리방침</Link>
              <Link href="/terms">이용약관</Link>
              <Link href="/disclaimer">정보 이용 안내</Link>
              <Link href="/site-map">사이트맵</Link>
              <Link href="/contact">문의</Link>
            </nav>
          </div>
        </div>

        <div className="siteFooterBottom">
          <p>
            상품 가격, 재고, 배송조건과 판매 정보는 판매처 사정에 따라 변경될 수 있습니다.
            구매 전에는 반드시 해당 판매처의 최신 상품 정보와 거래 조건을 확인해 주세요.
          </p>
          <div>
            <span>© 2026 9HO. All rights reserved.</span>
            <span>상품 비교추천 서비스 · 대한민국</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
