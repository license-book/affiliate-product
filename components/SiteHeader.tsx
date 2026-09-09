"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SiteHeader.module.css";

const nav = [
  { label: "카테고리", href: "/#categories", description: "상품군별 비교", items: [["노트북", "/#categories"], ["스마트폰", "/#categories"], ["TV·가전", "/#categories"], ["디지털", "/#categories"]] },
  { label: "추천", href: "/#recommend", description: "조건별 추천", items: [["업무용 추천", "/#recommend"], ["가성비 추천", "/#recommend"], ["인기상품", "/#recommend"], ["선물추천", "/#recommend"]] },
  { label: "비교가이드", href: "/#how", description: "비교 기준과 이용방법", items: [["상품 검색", "/#how"], ["조건 비교", "/#how"], ["판매처 확인", "/#how"], ["제휴 안내", "/#how"]] },
] as const;

function BrandIcon() {
  return <span className={styles.logoIcon} aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M8 10h16M8 16h11M8 22h7"/><circle cx="23" cy="19" r="4"/><path d="m26 22 3 3"/></svg></span>;
}

export default function SiteHeader() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlay = !scrolled && !menuOpen && !hovered;
  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setMenuOpen(false);
    router.push(`/#recommend?q=${encodeURIComponent(query.trim())}`);
  };

  const go = () => setMenuOpen(false);

  return <header className={`${styles.header} ${overlay ? styles.overlay : styles.solid}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <div className={styles.inner}>
      <Link className={styles.brand} href="/" onClick={go}><BrandIcon/><span className={styles.brandName}><span className={styles.brandNine}>9</span><span className={styles.brandHo}>HO</span><span className={styles.brandKo}>구호</span></span></Link>
      <nav className={styles.desktopNav} aria-label="주요 메뉴">
        {nav.map((item) => <div className={styles.navItem} key={item.label}>
          <Link className={styles.navLink} href={item.href}>{item.label}<span className={styles.chevron}/></Link>
          <div className={styles.submenu}>
            <div className={styles.submenuHead}><strong>{item.label}</strong><span>{item.description}</span></div>
            <div className={styles.submenuGrid}>{item.items.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}</div>
            <Link className={styles.viewAll} href={item.href}>{item.label} 전체 보기 →</Link>
          </div>
        </div>)}
      </nav>
      <form className={styles.headerSearch} onSubmit={submitSearch}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="상품 검색" aria-label="상품 검색"/>
        <button type="submit" aria-label="검색">⌕</button>
      </form>
      <button className={`${styles.menuButton}${menuOpen ? ` ${styles.open}` : ""}`} type="button" aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span/><span/><span/></button>
    </div>
    <nav className={`${styles.mobileNav}${menuOpen ? ` ${styles.open}` : ""}`} aria-label="모바일 메뉴">
      <div className={styles.mobileInner}>
        <form className={styles.mobileSearch} onSubmit={submitSearch}><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="상품을 검색하세요"/><button type="submit">검색</button></form>
        {nav.map((item) => <Link key={item.label} href={item.href} onClick={go}><strong>{item.label}</strong><span>{item.description}</span></Link>)}
      </div>
    </nav>
  </header>;
}
