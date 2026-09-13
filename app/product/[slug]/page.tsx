import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";
import { demoProducts, formatWon } from "../../../lib/demo-products";

export function generateStaticParams() {
  return demoProducts.map((product) => ({ slug: product.slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = demoProducts.find((item) => item.slug === slug);
  if (!product) notFound();

  return <main>
    <SiteHeader />
    <section className="productDetailWrap">
      <div className="productDetailTop">
        <div className={`detailArt productArt ${product.tone}`}><span/></div>
        <div className="productDetailIntro">
          <span className="productCategory">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="productModel">{product.model}</p>
          <div className="detailPriceBox"><span>현재 비교 최저가</span><strong>{formatWon(product.price)}부터</strong><p>{product.sellers.length}개 판매처 가격을 비교합니다.</p></div>
        </div>
      </div>

      <section className="sellerCompareSection">
        <div className="sellerCompareHead"><div><span>PRICE COMPARE</span><h2>판매처별 가격</h2></div><p>실제 API 연결 후 최신 가격과 구매 링크가 표시됩니다.</p></div>
        <div className="sellerList">{product.sellers.map((seller, index) => <div className="sellerRow" key={seller.name}><div><b>{index + 1}</b><span>{seller.name}</span></div><strong>{formatWon(seller.price)}</strong><button type="button">구매하기</button></div>)}</div>
        <p className="demoNote">현재는 디자인 확인용 샘플 데이터입니다. 구매 버튼은 아직 실제 제휴링크와 연결되지 않았습니다.</p>
      </section>

      <section className="verifiedInfo"><div><span>PRODUCT INFO</span><h2>확인된 상품 정보만 표시</h2></div><p>브랜드, 모델명, 카테고리처럼 검증된 정보만 노출합니다. 스펙 데이터가 없는 항목은 빈칸으로 만들지 않고 화면에서 제외합니다.</p><dl><div><dt>상품명</dt><dd>{product.name}</dd></div><div><dt>모델명</dt><dd>{product.model}</dd></div><div><dt>카테고리</dt><dd>{product.category}</dd></div></dl></section>

      <Link className="backToSearch" href={`/search?q=${encodeURIComponent(product.name)}`}>비슷한 상품 더 찾아보기 →</Link>
    </section>
    <SiteFooter />
  </main>;
}
