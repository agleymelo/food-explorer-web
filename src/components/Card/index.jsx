import { Minus, Plus, Heart, Pencil } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import { Button } from "../Button";

import { api } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

import * as S from "./styles";

export function Card({ id, name, description, price, picture, ...rest }) {
  const { user } = useAuth();

  const isAdmin = user.role === "admin";

  const formmatedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <S.Container {...rest}>
      <S.Content>
        <Link to={`/product/${id}`}>
          <img src={`${api.defaults.baseURL}/files/${picture}`} alt="" />
        </Link>

        {isAdmin ? (
          <S.IconWrapper to={`/product/update/${id}`}>
            <Pencil className="edit" />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper to="/">
            <Heart />
          </S.IconWrapper>
        )}

        <S.CardInformation>
          <h3>{name} &gt;</h3>
          <p>{description}</p>
          <span>{formmatedPrice}</span>
        </S.CardInformation>

        {!isAdmin && (
          <S.CardActions>
            <div className="buttons">
              <button>
                <Minus />
              </button>
              <span>01</span>
              <button>
                <Plus />
              </button>
            </div>

            <Button title="incluir" />
          </S.CardActions>
        )}
      </S.Content>
    </S.Container>
  );
}
