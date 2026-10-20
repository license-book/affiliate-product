"use client";
import Link from "next/link";
import styles from "./SiteHeader.module.css";
import ShoppingMenu from "./ShoppingMenu";
function SearchIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m15.7 15.7 4.8 4.8"/></svg>}
function DealGetLogo(){return <span className={styles.wordmark} aria-hidden="true"><span className={styles.deal}>deal</span><span className={styles.get}>get</span></span>}
export default function SiteHeader(){return <header className={styles.header}><div className={styles.row}><Link href="/" className={styles.brand} aria-label="딜겟 홈"><DealGetLogo/></Link><div style={{display:"flex",alignItems:"center",gap:4}}><ShoppingMenu/><Link className={styles.searchButton} href="/search" aria-label="검색"><SearchIcon/></Link></div></div></header>}