"use client";

import { useEffect, useState } from "react";
import type { DemoProduct } from "../lib/demo-products";
import { isWishlisted, toggleWishlist, WISHLIST_EVENT } from "../lib/wishlist";
import styles from "./WishlistButton.module.css";

function HeartIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.6 5.8c-2.1-2.1-5.5-2.1-7.6 0L12 6.8l-1-1c-2.1-2.1-5.5-2.1-7.6 0s-2.1 5.5 0 7.6L12 22l8.6-8.6c2.1-2.1 2.1-5.5 0-7.6Z"/></svg>;
}

export default function WishlistButton({ product, variant = "card" }: { product: DemoProduct; variant?: "card" | "detail" }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const sync = () => setActive(isWishlisted(product.slug));
    sync();
    window.addEventListener(WISHLIST_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(WISHLIST_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, [product.slug]);

  const onToggle = () => {
    const next = toggleWishlist({
      slug: product.slug,
      category: product.category,
      name: product.name,
      model: product.model,
      price: product.price,
      tone: product.tone,
      sellerCount: product.sellers.length,
    });
    setActive(next);
  };

  const className = `${styles.button} ${variant === "card" ? styles.card : styles.detail} ${active ? styles.active : ""}`;

  return (
    <button
      type="button"
      className={className}
      aria-label={active ? `${product.name} 찜 해제` : `${product.name} 찜하기`}
      aria-pressed={active}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onToggle();
      }}
    >
      <HeartIcon />
      {variant === "detail" && <span>{active ? "찜 해제" : "찜하기"}</span>}
    </button>
  );
}
