import * as S from './styles'

export function Input({ icon: Icon, ...rest }) {
  return (
    <S.Container>
      {Icon && <Icon />}
      <input type="text" {...rest} />
    </S.Container>
  )
}
