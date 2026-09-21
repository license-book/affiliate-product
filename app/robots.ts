import type {MetadataRoute} from "next";
const SITE=(process.env.NEXT_PUBLIC_SITE_URL||"https://affiliate-product.licensebook.workers.dev").replace(/\/$/,"");
export default function robots():MetadataRoute.Robots{return{rules:{userAgent:"*",allow:"/"},sitemap:`${SITE}/sitemap.xml`}}
