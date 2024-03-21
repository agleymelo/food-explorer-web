import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CaretLeft, Minus, Plus, Receipt } from '@phosphor-icons/react'

import productMask2 from '../../assets/products/mask-group-2.png'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

import * as S from './styles'

export function Product() {
  const { id } = useParams()

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const isAdmin = true

  return (
    <S.Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      <S.Content>
        <Link to="/">
          <CaretLeft />
          Voltar
        </Link>

        <S.ProductSection>
          <picture>
            <img src={productMask2} alt="" />
          </picture>

          <S.ProductDetails>
            <h2>Salada Ravanello</h2>

            <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>

            <S.ProductTags>
              <Tag value="alface" />
              <Tag value="cebola" />
              <Tag value="pão naan" />
              <Tag value="pepino" />
              <Tag value="rabanete" />
              <Tag value="tomate" />
            </S.ProductTags>

            {isAdmin ? (
              <Button title="Editar prato" />
            ) : (
              <S.ProductAction>
                <div>
                  <button>
                    <Minus />
                  </button>
                  <span>01</span>
                  <button>
                    <Plus />
                  </button>
                </div>

                <Button icon={Receipt} title="pedir ∙ R$ 25,00" />
              </S.ProductAction>
            )}
          </S.ProductDetails>
        </S.ProductSection>
      </S.Content>

      <Footer />
    </S.Container>
  )
}
