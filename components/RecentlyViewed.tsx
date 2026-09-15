"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { demoProducts, formatWon } from "../lib/demo-products";
import { clearRecentProducts, readRecentProducts, RECENT_PRODUCTS_EVENT, type RecentProduct } from "../lib/recent-products";

export default function RecentlyViewed() {
  const [items, setItems] = useState<RecentProduct[]>([]);

  useEffect(() => {
    const sync = () => setItems(readRecentProducts());
    sync();
    window.addEventListener(RECENT_PRODUCTS_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(RECENT_PRODUCTS_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  if (!items.length) return null;

  return (
    <section className="serviceSection recentlyViewed" aria-label="최근 본 상품">
      <div className="serviceSectionHead">
        <div><span>RECENT</span><h2>최근 본 상품</h2></div>
        <button type="button" className="recentClearButton" onClick={clearRecentProducts}>기록 지우기</button>
      </div>
      <div className="productGrid">
        {items.slice(0, 8).map((saved) => {
          const live = demoProducts.find((product) => product.slug === saved.slug);
          const product = live ?? saved;
          const sellerCount = live ? live.sellers.length : saved.sellerCount;
          return <article className="productCard" key={saved.slug}>
            <Link href={`/product/${saved.slug}`} className="productCardMain">
              <div className={`productArt ${product.tone}`} aria-hidden="true"><span /></div>
              <div className="productCardBody">
                <span className="productCategory">{product.category}</span>
                <h3>{product.name}</h3>
                <p className="productModel">{product.model}</p>
                <strong className="productPrice">{formatWon(product.price)}부터</strong>
                <span className="sellerCount">{sellerCount}개 판매처 가격비교 →</span>
              </div>
            </Link>
          </article>;
        })}
      </div>
    </section>
  );
}
