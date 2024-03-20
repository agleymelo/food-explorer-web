import { Minus, Plus, Heart, Pencil } from '@phosphor-icons/react'

import { Button } from '../Button'

import maskProduct from '../../assets/products/mask-group-1.png'

import * as S from './styles'

export function Card({ ...rest }) {
  const isAdmin = false

  return (
    <S.Container {...rest}>
      <S.Content>
        <a href="">
          <img src={maskProduct} alt="" />
        </a>

        {isAdmin ? (
          <S.IconWrapper to="/">
            <Pencil className="edit" />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper to="/">
            <Heart />
          </S.IconWrapper>
        )}

        <S.CardInformation>
          <h3>Salada Ravanello &gt;</h3>
          <p>description</p>
          <span>R$ 49,97</span>
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

        {/* <a href="">
          <img src={maskProduct} alt="" />
        </a>

        {isAdmin ? (
          <S.IconWrapper to="/">
            <Pencil className="edit" />
          </S.IconWrapper>
        ) : (
          <S.IconWrapper to="/">
            <Heart />
          </S.IconWrapper>
        )}

        <S.TitleInformation to="/">
          <h2>Salada Ravanello &gt;</h2>
        </S.TitleInformation>

        <S.Description>description</S.Description>

        <S.Price>R$ 49,97</S.Price>

        {!isAdmin && (
          <S.Action>
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
          </S.Action>
        )} */}
      </S.Content>
    </S.Container>
  )
}
