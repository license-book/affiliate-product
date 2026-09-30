"use client";
import Link from "next/link";
import styles from "./SiteHeader.module.css";
function SearchIcon(){return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.5"/><path d="m15.7 15.7 4.8 4.8"/></svg>}
function ThingHeavenLogo(){return <span className={styles.wordmark} aria-hidden="true"><span className={styles.thing}>thing</span><span className={styles.bagH}><i></i><b>h</b></span><span className={styles.heavenRest}>eaven</span></span>}
export default function SiteHeader(){return <header className={styles.header}><div className={styles.row}><Link href="/" className={styles.brand} aria-label="thingheaven 홈"><ThingHeavenLogo/></Link><Link className={styles.searchButton} href="/search" aria-label="검색"><SearchIcon/></Link></div></header>}