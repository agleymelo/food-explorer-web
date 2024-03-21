import { useEffect, useState } from 'react'
import { UploadSimple, CaretLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import CreatableSelect from 'react-select/creatable'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { IngredientItem } from '../../components/IngredientItem'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import theme from '../../styles/theme'

import * as S from './styles'
import { api } from '../../services/api'

export function CreateNewProduct() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function fetchCategories() {
      const response = await api.get('/categories')

      setCategories(response.data)
    }

    fetchCategories()
  }, [])

  const a = 'Pão Naan'

  const options = categories.map((category) => ({ value: category.id, label: category.name }))

  const colourStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: theme.COLORS.DARK_900,
      color: theme.COLORS.LIGHT_400,
      height: '3rem',
      border: 'none',
      borderRadius: '8px',
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? 'red'
          : isSelected
          ? theme.COLORS.LIGHT_500
          : isFocused
          ? theme.COLORS.DARK_800
          : theme.COLORS.DARK_500,
        color: isDisabled ? 'red' : isSelected ? theme.COLORS.LIGHT_100 : null,
        cursor: isDisabled ? 'not-allowed' : 'default',
      }
    },
    input: (styles) => ({ ...styles }),
    placeholder: (styles) => ({ ...styles, color: theme.COLORS.LIGHT_400 }),
    singleValue: (styles) => ({ ...styles, color: theme.COLORS.LIGHT_400 }),
  }

  return (
    <S.Container>
      <Header onOpenMenu={() => setMenuIsOpen(true)} menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />

      <S.Content>
        <S.Form>
          <Link to="/">
            <CaretLeft /> Voltar
          </Link>

          <h2>Novo Prato</h2>

          <S.InputsWrapper>
            <S.InputFile>
              <span>Imagem do prato</span>
              <label htmlFor="photo">
                <UploadSimple />
                Selecionar Imagem
              </label>

              <input id="photo" type="file" name="image" accept="image/*" />
            </S.InputFile>

            <S.WrapperInputWithLabel>
              <label htmlFor="name">Nome</label>
              <Input id="name" placeholder="Ex.: Salada Ceasar" />
            </S.WrapperInputWithLabel>

            <S.WrapperSelect>
              <label htmlFor="category">Categoria</label>
              {/* <CreatableSelect options={options} styles={colourStyles} /> */}
              <select name="" id="">
                <option value="">Selecionar</option>
                <option value="meal">Refeição</option>
                <option value="dessert">Sobremesa</option>
                <option value="beverage">Bebida</option>
              </select>
            </S.WrapperSelect>
          </S.InputsWrapper>

          <S.InputsWrapper>
            <S.WrapperInputWithLabel>
              <label htmlFor="">Ingredientes</label>
              <div className="ingredients">
                <IngredientItem value="Pão Naan" size={a.length} />
                <IngredientItem value="Pão Naan" size={a.length} />
                <IngredientItem isNew size="9" placeholder="Adicionar" />
              </div>
            </S.WrapperInputWithLabel>

            <S.WrapperInputWithLabel>
              <label htmlFor="price">Preço</label>
              <Input id="price" placeholder="R$ 00,00" />
            </S.WrapperInputWithLabel>
          </S.InputsWrapper>

          <S.DescriptionAndButtons>
            <label htmlFor="description">Descrição</label>
            <Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />

            <Button title="Salvar alterações" disabled />
          </S.DescriptionAndButtons>
        </S.Form>
      </S.Content>

      <Footer />
    </S.Container>
  )
}
