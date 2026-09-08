import type { ReactNode } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

type InfoPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function InfoPage({ eyebrow, title, description, children }: InfoPageProps) {
  return (
    <main className="infoPage">
      <SiteHeader />
      <section className="infoHero">
        <div className="infoHeroInner">
          <p className="sectionLabel">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </section>
      <section className="infoContent">
        <div className="infoContentInner">{children}</div>
      </section>
      <SiteFooter />
    </main>
  );
}
