import * as S from './styles'

export function Textarea({ value, ...rest }) {
  return <S.Container {...rest}>{value}</S.Container>
}
