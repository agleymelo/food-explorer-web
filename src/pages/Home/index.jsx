import { useEffect, useState } from "react";

import { Header } from "../../components/Header";
import { SectionCard } from "../../components/SectionCard";
import { Footer } from "../../components/Footer";

import banner1 from "../../assets/banners/banner-1.svg";
import banner2 from "../../assets/banners/banner-2.svg";

import { api } from "../../services/api";
import { Card } from "../../components/Card";

import * as S from "./styles";

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [search, setSearch] = useState("");

  const [dishes, setDishes] = useState({
    meals: [],
    desserts: [],
    beverages: [],
  });

  useEffect(() => {
    async function fetchDishes() {
      const response = await api.get(`/dishes?search=${search}`);

      const meals = response.data.filter((dish) => dish.category === "meal");

      const desserts = response.data.filter(
        (dish) => dish.category === "dessert",
      );

      const beverages = response.data.filter(
        (dish) => dish.category === "beverage",
      );

      setDishes({
        meals,
        desserts,
        beverages,
      });
    }

    fetchDishes();
  }, [search]);

  return (
    <S.Container>
      <Header
        onOpenMenu={() => setMenuIsOpen(true)}
        menuIsOpen={menuIsOpen}
        onCloseMenu={() => setMenuIsOpen(false)}
        setSearch={setSearch}
      />

      <S.Content>
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
          <SectionCard title="Refeições">
            {dishes.meals.map((dish) => (
              <Card
                key={dish.id}
                id={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                picture={dish.picture}
                className="keen-slider__slide"
              />
            ))}
          </SectionCard>
          <SectionCard title="Sobremesas">
            {dishes.desserts.map((dish) => (
              <Card
                key={dish.id}
                id={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                picture={dish.picture}
                className="keen-slider__slide"
              />
            ))}
          </SectionCard>

          <SectionCard title="Bebidas">
            {dishes.beverages.map((dish) => (
              <Card
                key={dish.id}
                id={dish.id}
                name={dish.name}
                description={dish.description}
                price={dish.price}
                picture={dish.picture}
                className="keen-slider__slide"
              />
            ))}
          </SectionCard>
        </main>
      </S.Content>

      <Footer />
    </S.Container>
  );
}
