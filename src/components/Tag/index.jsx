import * as S from './styles'

export function Tag({ value, ...rest }) {
  return <S.Container {...rest}>{value}</S.Container>
}
