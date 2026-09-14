"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { readWishlist, WISHLIST_EVENT } from "../lib/wishlist";
import styles from "./MobileBottomNav.module.css";

function HomeIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m3.5 10.5 8.5-7 8.5 7"/><path d="M5.5 9.5V21h13V9.5"/><path d="M9.5 21v-6h5v6"/></svg>;
}
function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.7"/><path d="m15.8 15.8 4.7 4.7"/></svg>;
}
function GridIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="7" rx="1.5"/><rect x="3.5" y="13.5" width="7" height="7" rx="1.5"/><rect x="13.5" y="13.5" width="7" height="7" rx="1.5"/></svg>;
}
function HeartIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.6 5.8c-2.1-2.1-5.5-2.1-7.6 0L12 6.8l-1-1c-2.1-2.1-5.5-2.1-7.6 0s-2.1 5.5 0 7.6L12 22l8.6-8.6c2.1-2.1 2.1-5.5 0-7.6Z"/></svg>;
}
function MenuIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>;
}

export default function MobileBottomNav() {
  const pathname = usePathname();
  const homeActive = pathname === "/";
  const wishlistActive = pathname === "/wishlist";
  const [wishlistCount, setWishlistCount] = useState(0);

  useEffect(() => {
    const sync = () => setWishlistCount(readWishlist().length);
    sync();
    window.addEventListener(WISHLIST_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(WISHLIST_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const focusSearch = () => window.dispatchEvent(new CustomEvent("9ho:focus-search"));
  const openMenu = () => window.dispatchEvent(new CustomEvent("9ho:toggle-menu"));

  return (
    <>
      <nav className={styles.nav} aria-label="모바일 하단 메뉴">
        <Link href="/" className={homeActive ? styles.active : ""}><HomeIcon/><span>홈</span></Link>
        <button type="button" onClick={focusSearch}><SearchIcon/><span>검색</span></button>
        <Link href="/#categories"><GridIcon/><span>카테고리</span></Link>
        <Link href="/wishlist" className={`${styles.wishLink} ${wishlistActive ? styles.active : ""}`}><HeartIcon/>{wishlistCount > 0 && <b className={styles.badge}>{wishlistCount > 99 ? "99+" : wishlistCount}</b>}<span>찜</span></Link>
        <button type="button" onClick={openMenu}><MenuIcon/><span>전체메뉴</span></button>
      </nav>
      <div className={styles.spacer} aria-hidden="true" />
    </>
  );
}
