import { Plus, X } from '@phosphor-icons/react'

import * as S from './styles'

export function IngredientItem({ isNew, value, size, onClick, validation, ...rest }) {
  return (
    <S.Container $isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} size={size && size} {...rest} />

      <button type="button" onClick={onClick}>
        {isNew ? <Plus /> : <X />}
      </button>
    </S.Container>
  )
}
