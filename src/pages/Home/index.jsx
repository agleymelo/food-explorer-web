import { useState } from "react";

import { Header } from "../../components/Header";
import { SectionCard } from "../../components/SectionCard";
import { Footer } from "../../components/Footer";

import banner1 from "../../assets/banners/banner-1.svg";
import banner2 from "../../assets/banners/banner-2.svg";

import * as S from "./styles";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <>
      <Header
        onOpenMenu={() => setMenuIsOpen(true)}
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
      />

      <S.Container>
        <S.Banner>
          <picture>
            <source media="(max-width: 768px)" srcSet={banner1} />
            <img src={banner2} alt="" />
          </picture>

          <S.BannerText>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </S.BannerText>
        </S.Banner>

        <main>
          <SectionCard title="Refeições" data={{}} />
          <SectionCard title="Sobremesas" data={{}} />
          <SectionCard title="Bebidas" data={{}} />
        </main>
      </S.Container>

      <Footer />
    </>
  );
}
