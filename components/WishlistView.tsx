"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { formatWon } from "../lib/demo-products";
import { readWishlist, removeWishlist, WISHLIST_EVENT, type WishlistProduct } from "../lib/wishlist";
import styles from "./WishlistView.module.css";

export default function WishlistView() {
  const [items, setItems] = useState<WishlistProduct[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const sync = () => {
      setItems(readWishlist());
      setReady(true);
    };
    sync();
    window.addEventListener(WISHLIST_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(WISHLIST_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const remove = (slug: string) => {
    removeWishlist(slug);
    setItems(readWishlist());
  };

  if (!ready) return <section className={styles.wrap} aria-live="polite" />;

  if (items.length === 0) {
    return (
      <section className={styles.wrap}>
        <div className={styles.empty}>
          <strong>아직 찜한 상품이 없습니다.</strong>
          <p>관심 있는 상품의 하트 버튼을 누르면 이곳에 저장됩니다.</p>
          <Link href="/#best">상품 둘러보기</Link>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.wrap}>
      <div className={styles.grid}>
        {items.map((item) => (
          <article className={styles.card} key={item.slug}>
            <button className={styles.remove} type="button" aria-label={`${item.name} 찜 해제`} onClick={() => remove(item.slug)}>♥</button>
            <Link className={styles.main} href={`/product/${item.slug}`}>
              <div className={`${styles.art} productArt ${item.tone}`} aria-hidden="true"><span /></div>
              <div className={styles.body}>
                <span className={styles.category}>{item.category}</span>
                <h2>{item.name}</h2>
                <p className={styles.model}>{item.model}</p>
                <strong className={styles.price}>{formatWon(item.price)}부터</strong>
                <span className={styles.seller}>{item.sellerCount}개 판매처 가격비교 →</span>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
