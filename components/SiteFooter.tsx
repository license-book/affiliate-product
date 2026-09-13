import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <div className="siteFooterGrid">
          <div>
            <Link href="/" className="siteFooterBrand">
              <span className="siteFooterBrandKo">9HO</span>
              <span className="siteFooterBrandEn">호구 되기 전에, 9HO.</span>
            </Link>
            <p className="siteFooterIntro">상품을 찾고 여러 판매처의 가격을 한곳에서 확인하는 상품 가격비교 서비스입니다.</p>
            <p className="siteFooterNotice">일부 링크를 통해 구매가 이루어질 경우 제휴 수수료를 제공받을 수 있습니다.</p>
          </div>

          <div>
            <h3>가격비교</h3>
            <nav className="siteFooterNav" aria-label="가격비교 서비스">
              <Link href="/#best">베스트 상품</Link>
              <Link href="/#categories">카테고리</Link>
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
              <Link href="/contact">문의</Link>
            </nav>
          </div>
        </div>

        <div className="siteFooterBottom">
          <p>상품 가격, 재고, 배송조건과 판매 정보는 판매처 사정에 따라 변경될 수 있습니다. 구매 전 해당 판매처의 최신 정보와 거래 조건을 확인해 주세요.</p>
          <div><span>© 2026 9HO. All rights reserved.</span><span>상품 가격비교 서비스 · 대한민국</span></div>
        </div>
      </div>
    </footer>
  );
}
