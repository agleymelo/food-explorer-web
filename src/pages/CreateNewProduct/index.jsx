import { useState } from 'react'
import { UploadSimple, CaretLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { IngredientItem } from '../../components/IngredientItem'
import { Textarea } from '../../components/Textarea'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'

import { api } from '../../services/api'
import * as S from './styles'

export function CreateNewProduct() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')

  const [image, setImage] = useState(null)
  const [filaName, setFileName] = useState('')

  const [ingredients, setIngredients] = useState([])
  const [newIngredient, setNewIngredient] = useState('')

  function handleImageDishChange(event) {
    event.preventDefault()

    const file = event.target.files[0]
    setImage(file)
    setFileName(file.name)
  }

  function handleAddNewIngredient() {
    setIngredients((prevState) => [newIngredient, ...prevState])
    setNewIngredient('')
  }

  function removeIngredient(deleted) {
    setIngredients((prevState) => prevState.filter((item) => item !== deleted))
  }

  async function handleCreateNewDish() {
    if (!name) {
      return toast.error('Nome do prato é obrigatório')
    }

    if (!category) {
      return toast.error('Categoria do prato é obrigatória')
    }

    if (!price) {
      return toast.error('Preço do prato é obrigatório')
    }

    if (!image) {
      return toast.error('Imagem do prato é obrigatória')
    }

    if (!ingredients.length) {
      return toast.error('Ingredientes do prato são obrigatórios')
    }

    if (newIngredient) {
      return toast.error('Adicione o ingrediente antes de salvar')
    }

    if (!description) {
      return toast.error('Descrição do prato é obrigatória')
    }

    const formData = new FormData()

    formData.append('picture', image)

    try {
      const response = await api.post('/dishes', {
        name,
        description,
        category,
        price,
        ingredients,
      })

      const { id } = response.data

      await api.patch(`/dishes/${id}/picture`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      toast.success('Prato cadastrado com sucesso')

      setName('')
      setDescription('')
      setCategory('')
      setPrice('')
      setImage(null)
      setFileName('')
      setIngredients([])
      setNewIngredient('')
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message)
      } else {
        toast.error('Erro ao cadastrar prato')
      }
    }
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
                {filaName || 'Selecionar Imagem'}
              </label>

              <input id="photo" type="file" name="image" accept="image/*" onChange={handleImageDishChange} />
            </S.InputFile>

            <S.WrapperInputWithLabel>
              <label htmlFor="name">Nome</label>
              <Input
                id="name"
                placeholder="Ex.: Salada Ceasar"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </S.WrapperInputWithLabel>

            <S.WrapperSelect>
              <label htmlFor="category">Categoria</label>
              <select id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
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
                {ingredients &&
                  ingredients.map((item, index) => (
                    <IngredientItem
                      key={String(index)}
                      value={item}
                      size={item.length}
                      onClick={() => removeIngredient(item)}
                    />
                  ))}
                <IngredientItem
                  isNew
                  size="9"
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(event) => setNewIngredient(event.target.value)}
                  onClick={handleAddNewIngredient}
                />
              </div>
            </S.WrapperInputWithLabel>

            <S.WrapperInputWithLabel>
              <label htmlFor="price">Preço</label>
              <Input
                id="price"
                placeholder="R$ 00,00"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
            </S.WrapperInputWithLabel>
          </S.InputsWrapper>

          <S.DescriptionAndButtons>
            <label htmlFor="description">Descrição</label>
            <Textarea
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              value={description}
              defaultValue=""
              onChange={(event) => setDescription(event.target.value)}
            />

            <Button type="button" title="Salvar alterações" onClick={handleCreateNewDish} />
          </S.DescriptionAndButtons>
        </S.Form>
      </S.Content>

      <Footer />
    </S.Container>
  )
}
