"use client";

import Link from "next/link";
import { useState } from "react";
import { demoProducts, formatWon, type DemoProduct } from "../lib/demo-products";
import WishlistButton from "./WishlistButton";
import {trackRankEvent} from "../lib/ranking";

function ProductArt({ tone, imageUrl, name="" }: { tone: string; imageUrl?: string; name?: string }) {
  return <div className={`productArt ${tone}`}>{imageUrl?<img src={imageUrl} alt={name} loading="lazy" referrerPolicy="no-referrer"/>:<span />}</div>;
}

function QuickCompare({ product, onClose }: { product: DemoProduct; onClose: () => void }) {
  return <div className="quickModalBackdrop" role="presentation" onClick={onClose}>
    <section className="quickModal" role="dialog" aria-modal="true" aria-label={`${product.name} 빠른 가격비교`} onClick={(e) => e.stopPropagation()}>
      <button className="quickModalClose" type="button" aria-label="닫기" onClick={onClose}>×</button>
      <div className="quickModalArt"><ProductArt tone={product.tone} imageUrl={product.imageUrl} name={product.name}/></div>
      <div className="quickModalBody">
        <span className="productCategory">{product.category}</span>
        <h2>{product.name}</h2>
        <p className="productModel">{product.model}</p>
        <div className="quickPrice"><span>현재 비교 최저가</span><strong>{formatWon(product.price)}부터</strong></div>
        <div className="sellerList compact">
          {product.sellers.map((seller, index) => <div className="sellerRow" key={seller.name}><div><b>{index + 1}</b><span>{seller.name}</span></div><strong>{formatWon(seller.price)}</strong><button type="button">구매하기</button></div>)}
        </div>
        <Link className="detailLink" href={`/product/${product.slug}`}>상세 가격비교 보기 →</Link>
        <p className="demoNote">디자인 검토용 샘플 데이터입니다. API 연결 후 실제 판매처와 가격으로 교체됩니다.</p>
      </div>
    </section>
  </div>;
}

export default function ProductFeed({ limit = 8, variant = "grid", products = demoProducts }: { limit?: number; variant?: "grid"|"list"|"rail"|"showcase"; products?: DemoProduct[] }) {
  const [selected, setSelected] = useState<DemoProduct | null>(null);
  const visible = products.slice(0, limit);
  if (variant === "showcase") {
    const groups: DemoProduct[][] = [];
    for (let i = 0; i < visible.length; i += 4) groups.push(visible.slice(i, i + 4));
    const discount = (p: DemoProduct) => p.discountRate != null && p.discountRate > 0 ? Math.round(p.discountRate) : p.originalPrice != null && p.originalPrice > p.price ? Math.round((1-p.price/p.originalPrice)*100) : null;
    return <>
      <div className="dealShowcaseRail" aria-label="추천 상품 모음">
        {groups.map((group, groupIndex) => <section className="dealShowcase" key={group[0]?.slug ?? groupIndex}>
          {group[0] && <article className="dealHero">
            <WishlistButton product={group[0]} />
            <Link href={`/product/${group[0].slug}`} className="dealHeroLink" onClick={()=>trackRankEvent(group[0].slug,group[0].category,"view")}>
              <ProductArt tone={group[0].tone} imageUrl={group[0].imageUrl} name={group[0].name}/>
              <div className="dealHeroBody">
                <span className="productCategory">{group[0].category}</span>
                <h3>{group[0].name}</h3>
                {group[0].originalPrice != null && group[0].originalPrice > group[0].price && <del className="productOriginalPrice">{formatWon(group[0].originalPrice)}</del>}
                <div className="productPriceRow">{discount(group[0]) != null && <span className="productDiscountRate">{discount(group[0])}%</span>}<strong className="productPrice">{formatWon(group[0].price)}부터</strong></div>
                <span className="sellerCount">{group[0].sellers.length}개 판매처 가격비교 →</span>
              </div>
            </Link>
            <button className="quickCompareButton" type="button" onClick={()=>setSelected(group[0])}>빠른 가격비교</button>
          </article>}
          <div className="dealMiniList">
            {group.slice(1).map(product => <article className="dealMini" key={product.slug}>
              <WishlistButton product={product} />
              <Link href={`/product/${product.slug}`} onClick={()=>trackRankEvent(product.slug,product.category,"view")}>
                <ProductArt tone={product.tone} imageUrl={product.imageUrl} name={product.name}/>
                <div className="dealMiniBody"><h3>{product.name}</h3>
                  {product.originalPrice != null && product.originalPrice > product.price && <del className="productOriginalPrice">{formatWon(product.originalPrice)}</del>}
                  <div className="productPriceRow">{discount(product) != null && <span className="productDiscountRate">{discount(product)}%</span>}<strong className="productPrice">{formatWon(product.price)}</strong></div>
                  <span className="sellerCount">{product.sellers.length}개 판매처</span>
                </div>
              </Link>
            </article>)}
          </div>
        </section>)}
      </div>
      <style jsx>{`
        .dealShowcaseRail{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-padding:4px;padding:0 4px 10px;-webkit-overflow-scrolling:touch;scrollbar-width:none}
        .dealShowcaseRail::-webkit-scrollbar{display:none}.dealShowcase{position:relative;flex:0 0 calc(100% - 24px);scroll-snap-align:start;border:1px solid #e9e9e9;border-radius:18px;padding:14px;background:#fff;box-sizing:border-box}
        .dealHero{position:relative;padding-bottom:14px;border-bottom:1px solid #eee}.dealHeroLink{display:grid;grid-template-columns:42% minmax(0,1fr);gap:13px;align-items:start}.dealHero :global(.productArt){width:100%!important;height:auto!important;aspect-ratio:1/1!important;border-radius:14px!important}.dealHeroBody{min-width:0;padding-top:5px}.dealHeroBody h3{margin:4px 0 2px;font-size:16px;line-height:1.35;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.dealHero :global(.wishlistButton){position:absolute!important;right:2px!important;top:2px!important;z-index:3}.dealHero :global(.quickCompareButton){margin:10px 0 0 calc(42% + 13px)!important;width:auto!important;background:#3f4145!important;color:#fff!important;border-radius:8px!important;padding:8px 12px!important}
        .dealMiniList{padding-top:5px}.dealMini{position:relative}.dealMini>a{display:grid;grid-template-columns:76px minmax(0,1fr);gap:11px;align-items:center;padding:8px 34px 8px 0}.dealMini :global(.productArt){width:76px!important;height:76px!important;aspect-ratio:1/1!important;border-radius:9px!important}.dealMiniBody{min-width:0}.dealMiniBody h3{margin:0 0 2px;font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.dealMini :global(.wishlistButton){position:absolute!important;right:0!important;top:27px!important;z-index:3}.dealMini :global(.productOriginalPrice){font-size:11px!important;font-weight:400!important}.dealMini :global(.productPrice){font-size:14px!important;font-weight:900!important}.dealMini :global(.productDiscountRate),.dealHero :global(.productDiscountRate){color:#e53935!important;font-weight:900!important}.dealMini :global(.sellerCount){display:block!important;margin-top:3px;font-size:9px!important;color:#999!important}.dealHero :global(.sellerCount){display:block!important;margin-top:6px;font-size:10px!important;color:#888!important}
        @media(max-width:390px){.dealShowcase{flex-basis:calc(100% - 18px);padding:12px}.dealHeroLink{grid-template-columns:40% minmax(0,1fr);gap:11px}.dealHero :global(.quickCompareButton){margin-left:calc(40% + 11px)!important}.dealMini>a{grid-template-columns:70px minmax(0,1fr)}.dealMini :global(.productArt){width:70px!important;height:70px!important}}
      `}</style>
      {selected && <QuickCompare product={selected} onClose={() => setSelected(null)}/>}
    </>;
  }
  return <>
    <div className={`productGrid productGrid--${variant}`}>
      {products.slice(0, limit).map((product) => <article className="productCard" key={product.slug}>
        <WishlistButton product={product} />
        <Link href={`/product/${product.slug}`} className="productCardMain" onClick={()=>trackRankEvent(product.slug,product.category,"view")}>
          <ProductArt tone={product.tone}/>
          <div className="productCardBody">
            <span className="productCategory">{product.category}</span>
            <h3>{product.name}</h3>
            <p className="productModel">{product.model}</p>
            {product.originalPrice != null && product.originalPrice > product.price && <del className="productOriginalPrice">{formatWon(product.originalPrice)}</del>}
            <div className="productPriceRow">
              {(product.discountRate != null && product.discountRate > 0) || (product.originalPrice != null && product.originalPrice > product.price) ? <span className="productDiscountRate">{product.discountRate != null && product.discountRate > 0 ? Math.round(product.discountRate) : Math.round((1-product.price/(product.originalPrice as number))*100)}%</span> : null}
              <strong className="productPrice">{formatWon(product.price)}부터</strong>
            </div>
            {product.badges && <div className="productBadges">
              {product.badges.lowestPrice && <span className="badgeLowest">최저가</span>}
              {product.badges.priceDrop != null && product.badges.priceDrop > 0 && <span className="badgeDrop">가격하락 {formatWon(product.badges.priceDrop)}</span>}
              {product.badges.couponPrice != null && <span className="badgeCoupon">쿠폰가 {formatWon(product.badges.couponPrice)}</span>}
              {product.badges.freeShipping && <span className="badgeShipping">무료배송</span>}
            </div>}
            <span className="sellerCount">{product.sellers.length}개 판매처 가격비교 →</span>
          </div>
        </Link>
        <button className="quickCompareButton" type="button" onClick={() => {trackRankEvent(product.slug,product.category,"compare");setSelected(product)}}>빠른 가격비교</button>
      </article>)}
    </div>
    {selected && <QuickCompare product={selected} onClose={() => setSelected(null)}/>} 
  </>;
}
