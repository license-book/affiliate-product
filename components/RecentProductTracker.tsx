"use client";

import { useEffect } from "react";
import type { DemoProduct } from "../lib/demo-products";
import { addRecentProduct } from "../lib/recent-products";

export default function RecentProductTracker({ product }: { product: DemoProduct }) {
  useEffect(() => {
    addRecentProduct({
      slug: product.slug,
      category: product.category,
      name: product.name,
      model: product.model,
      price: product.price,
      tone: product.tone,
      sellerCount: product.sellers.length,
    });
  }, [product]);

  return null;
}
