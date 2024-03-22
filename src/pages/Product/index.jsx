import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { CaretLeft, Minus, Plus, Receipt } from '@phosphor-icons/react'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

import { Tag } from '../../components/Tag'
import { Button } from '../../components/Button'

import { api } from '../../services/api'
import { useAuth } from '../../context/AuthContext'

import * as S from './styles'

export function Product() {
  const { user } = useAuth()
  const { id } = useParams()

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const isAdmin = user.role === 'admin'

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [picture, setPicture] = useState('')
  const [ingredients, setIngredients] = useState([])

  const formmatedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(price)

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${id}`)

      setName(response.data.name)
      setDescription(response.data.description)
      setPrice(response.data.price)
      setPicture(response.data.picture)
      setIngredients(response.data.ingredients)
    }

    fetchDish()
  }, [id])

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
            <img src={`${api.defaults.baseURL}/files/${picture}`} alt="" />
          </picture>

          <S.ProductDetails>
            <h2>{name}</h2>

            <p>{description}</p>

            <S.ProductTags>
              {ingredients.map((ingredient) => (
                <Tag key={ingredient} value={ingredient} />
              ))}
            </S.ProductTags>

            {isAdmin ? (
              <Link to={`/product/update/${id}`}>
                <Button title="Editar prato" />
              </Link>
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

                <Button icon={Receipt} title={`pedir ∙ ${formmatedPrice}`} />
              </S.ProductAction>
            )}
          </S.ProductDetails>
        </S.ProductSection>
      </S.Content>

      <Footer />
    </S.Container>
  )
}
