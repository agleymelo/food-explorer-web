import * as S from './styles'

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <S.Container {...rest}>
      {Icon && <Icon />}
      {title}
    </S.Container>
  )
}
