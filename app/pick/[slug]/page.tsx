import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import ProductFeed from "../../../components/ProductFeed";
import {searchAdpick} from "../../../lib/adpick-api";
import {getLongtail,longtailKeywords} from "../../../lib/longtail-keywords";
export const dynamicParams=false;
export function generateStaticParams(){return longtailKeywords.map(x=>({slug:x.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const{slug}=await params;const x=getLongtail(slug);if(!x)return{};return{title:`${x.label} 추천·가격비교 | 9HO`,description:`${x.label} 관련 상품을 9HO에서 살펴보고 판매처 가격을 비교해보세요. 선택할 때 확인할 조건과 관련 상품을 한 페이지에서 확인할 수 있습니다.`,alternates:{canonical:`/pick/${x.slug}`}}}
export default async function PickPage({params}:{params:Promise<{slug:string}>}){const{slug}=await params;const x=getLongtail(slug);if(!x)notFound();const products=await searchAdpick(x.query,20);const related=longtailKeywords.filter(y=>y.group===x.group&&y.slug!==x.slug).slice(0,4);return <main className="pickPage"><SiteHeader/><section className="pickHero"><small>9HO CONDITION PICK</small><h1>{x.label}</h1><p>{x.intro}</p></section><section className="pickGuide"><h2>이 조건으로 상품 찾기</h2><p>상품명과 가격은 판매처에 따라 달라질 수 있습니다. 실제 구매 전 판매처의 최신 가격과 상품 조건을 확인하세요.</p></section><section className="feedSection"><div className="feedTitle"><div><h2>{x.label} 관련 상품</h2><p>현재 검색되는 상품을 비교해보세요</p></div></div>{products.length?<ProductFeed products={products} limit={20} variant="list"/>:<div className="apiEmpty"><strong>현재 불러온 상품이 없습니다.</strong><p>잠시 후 다시 확인하거나 관련 조건을 둘러보세요.</p></div>}</section>{related.length>0&&<section className="pickRelated"><h2>관련 조건도 살펴보세요</h2><div className="homeLongtailTags">{related.map(y=><Link href={`/pick/${y.slug}`} key={y.slug}><span>{y.label}</span></Link>)}</div></section>}</main>}