export type RecentProduct = {
  slug: string;
  category: string;
  name: string;
  model: string;
  price: number;
  tone: string;
  sellerCount: number;
  viewedAt: number;
};

const STORAGE_KEY = "9ho:recent-products:v1";
const MAX_ITEMS = 20;
export const RECENT_PRODUCTS_EVENT = "9ho:recent-products-change";

export function readRecentProducts(): RecentProduct[] {
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

export function addRecentProduct(product: Omit<RecentProduct, "viewedAt">) {
  if (typeof window === "undefined") return;
  const next = [
    { ...product, viewedAt: Date.now() },
    ...readRecentProducts().filter((item) => item.slug !== product.slug),
  ].slice(0, MAX_ITEMS);
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  window.dispatchEvent(new CustomEvent(RECENT_PRODUCTS_EVENT));
}

export function clearRecentProducts() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(RECENT_PRODUCTS_EVENT));
}
