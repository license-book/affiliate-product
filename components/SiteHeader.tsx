"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./SiteHeader.module.css";

const nav = [
  { label: "베스트", href: "/#best", description: "지금 인기 있는 상품" },
  { label: "카테고리", href: "/#categories", description: "상품군별로 빠르게 찾기" },
  { label: "조건별 찾기", href: "/#discover", description: "가격대·용도·인기 검색으로 찾기" },
] as const;

function BrandIcon() {
  return <span className={styles.logoIcon} aria-hidden="true"><svg viewBox="0 0 32 32"><path d="M8 10h16M8 16h11M8 22h7"/><circle cx="23" cy="19" r="4"/><path d="m26 22 3 3"/></svg></span>;
}

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4.2 4.2"/></svg>;
}

export default function SiteHeader() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overlay = !scrolled && !menuOpen && !hovered;
  const submitSearch = (e: FormEvent) => {
    e.preventDefault();
    const value = query.trim();
    if (!value) return;
    setMenuOpen(false);
    router.push(`/search?q=${encodeURIComponent(value)}`);
  };

  const go = () => setMenuOpen(false);

  return <header className={`${styles.header} ${overlay ? styles.overlay : styles.solid} ${scrolled ? styles.scrolled : styles.topState}`} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
    <div className={styles.shell}>
      <div className={styles.utilityRow}>
        <span>비교해서 더 쉽게 고르는 쇼핑</span>
        <div className={styles.utilityLinks}><Link href="/about">사이트 소개</Link><Link href="/contact">문의</Link></div>
      </div>
      <div className={styles.inner}>
        <Link className={styles.brand} href="/" onClick={go}><BrandIcon/><span className={styles.brandName}><span className={styles.brandNine}>9</span><span className={styles.brandHo}>HO</span><span className={styles.brandKo}>구호</span></span></Link>
        <nav className={styles.desktopNav} aria-label="주요 메뉴">
          {nav.map((item) => <Link className={styles.navLink} key={item.label} href={item.href}>{item.label}</Link>)}
        </nav>
        <form className={styles.headerSearch} onSubmit={submitSearch}>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="상품명·모델명 검색" aria-label="상품 검색"/>
          <button type="submit" aria-label="검색"><SearchIcon/></button>
        </form>
        <button className={`${styles.menuButton}${menuOpen ? ` ${styles.open}` : ""}`} type="button" aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"} aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}><span/><span/><span/></button>
      </div>
      <form className={styles.mobileHeaderSearch} onSubmit={submitSearch}>
        <SearchIcon/>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="찾고 싶은 상품을 검색해 보세요" aria-label="상품 검색"/>
        <button type="submit">검색</button>
      </form>
    </div>
    <nav className={`${styles.mobileNav}${menuOpen ? ` ${styles.open}` : ""}`} aria-label="모바일 메뉴">
      <div className={styles.mobileInner}>
        {nav.map((item) => <Link key={item.label} href={item.href} onClick={go}><strong>{item.label}</strong><span>{item.description}</span></Link>)}
        <Link href="/about" onClick={go}><strong>사이트 소개</strong><span>9HO 구호 소개</span></Link>
        <Link href="/contact" onClick={go}><strong>문의</strong><span>서비스 문의</span></Link>
      </div>
    </nav>
  </header>;
}
