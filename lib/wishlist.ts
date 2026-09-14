export type WishlistProduct = {
  slug: string;
  category: string;
  name: string;
  model: string;
  price: number;
  tone: string;
  sellerCount: number;
};

const STORAGE_KEY = "9ho:wishlist:v1";
export const WISHLIST_EVENT = "9ho:wishlist-change";

export function readWishlist(): WishlistProduct[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeWishlist(items: WishlistProduct[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(WISHLIST_EVENT));
}

export function isWishlisted(slug: string) {
  return readWishlist().some((item) => item.slug === slug);
}

export function toggleWishlist(product: WishlistProduct) {
  const items = readWishlist();
  const exists = items.some((item) => item.slug === product.slug);
  const next = exists ? items.filter((item) => item.slug !== product.slug) : [product, ...items];
  writeWishlist(next);
  return !exists;
}

export function removeWishlist(slug: string) {
  writeWishlist(readWishlist().filter((item) => item.slug !== slug));
}
