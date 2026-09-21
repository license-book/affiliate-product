import type {MetadataRoute} from "next";
import {longtailKeywords} from "../lib/longtail-keywords";
const SITE=(process.env.NEXT_PUBLIC_SITE_URL||"https://affiliate-product.licensebook.workers.dev").replace(/\/$/,"");
export default function sitemap():MetadataRoute.Sitemap{return[{url:SITE,changeFrequency:"daily",priority:1},{url:`${SITE}/category`,changeFrequency:"weekly",priority:.8},...longtailKeywords.map(x=>({url:`${SITE}/pick/${x.slug}`,changeFrequency:"weekly" as const,priority:.7}))]}
