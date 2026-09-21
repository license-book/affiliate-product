"use client";

import Link from "next/link";
import { useState } from "react";
import { demoProducts, formatWon, type DemoProduct } from "../lib/demo-products";
import WishlistButton from "./WishlistButton";

function ProductArt({ tone }: { tone: string }) {
  return <div className={`productArt ${tone}`} aria-hidden="true"><span /></div>;
}

function QuickCompare({ product, onClose }: { product: DemoProduct; onClose: () => void }) {
  return <div className="quickModalBackdrop" role="presentation" onClick={onClose}>
    <section className="quickModal" role="dialog" aria-modal="true" aria-label={`${product.name} 빠른 가격비교`} onClick={(e) => e.stopPropagation()}>
      <button className="quickModalClose" type="button" aria-label="닫기" onClick={onClose}>×</button>
      <div className="quickModalArt"><ProductArt tone={product.tone}/></div>
      <div className="quickModalBody">
        <span className="productCategory">{product.category}</span>
        <h2>{product.name}</h2>
        <p className="productModel">{product.model}</p>
        <div className="quickPrice"><span>현재 비교 최저가</span><strong>{formatWon(product.price)}부터</strong></div>
        <div className="sellerList compact">
          {product.sellers.map((seller, index) => <div className="sellerRow" key={seller.name}><div><b>{index + 1}</b><span>{seller.name}</span></div><strong>{formatWon(seller.price)}</strong><button type="button">구매하기</button></div>)}
        </div>
        <Link className="detailLink" href={`/product/${product.slug}`}>상세 가격비교 보기 →</Link>
        <p className="demoNote">디자인 검토용 샘플 데이터입니다. API 연결 후 실제 판매처와 가격으로 교체됩니다.</p>
      </div>
    </section>
  </div>;
}

export default function ProductFeed({ limit = 8, variant = "grid" }: { limit?: number; variant?: "grid"|"list"|"rail" }) {
  const [selected, setSelected] = useState<DemoProduct | null>(null);
  return <>
    <div className={`productGrid productGrid--${variant}`}>
      {demoProducts.slice(0, limit).map((product) => <article className="productCard" key={product.slug}>
        <WishlistButton product={product} />
        <Link href={`/product/${product.slug}`} className="productCardMain">
          <ProductArt tone={product.tone}/>
          <div className="productCardBody">
            <span className="productCategory">{product.category}</span>
            <h3>{product.name}</h3>
            <p className="productModel">{product.model}</p>
            <strong className="productPrice">{formatWon(product.price)}부터</strong>
            <span className="sellerCount">{product.sellers.length}개 판매처 가격비교 →</span>
          </div>
        </Link>
        <button className="quickCompareButton" type="button" onClick={() => setSelected(product)}>빠른 가격비교</button>
      </article>)}
    </div>
    {selected && <QuickCompare product={selected} onClose={() => setSelected(null)}/>} 
  </>;
}
