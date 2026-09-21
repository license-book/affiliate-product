import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import WishlistView from "../../components/WishlistView";

export default function WishlistPage() {
  return (
    <main>
      <SiteHeader />
      <section className="searchPageHero wishlistHero">
        <div className="searchPageInner">
          <p style={{marginTop:0,fontSize:12,fontWeight:900,color:"#5b5ff2",letterSpacing:".12em"}}>WISHLIST</p>
          <h1 style={{margin:"8px 0 0",fontSize:"clamp(30px,6vw,44px)",letterSpacing:"-.05em"}}>찜한 상품</h1>
          <p>관심 상품을 저장해 두고 나중에 다시 가격을 비교할 수 있습니다.</p>
        </div>
      </section>
      <WishlistView />
      <SiteFooter />
    </main>
  );
}
