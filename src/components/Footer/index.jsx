import logoBlack from '../../assets/logo-black.png'

import * as S from './styles'

export function Footer() {
  return (
    <S.Container>
      <img src={logoBlack} alt="Logo do Food Explorer na cor cinza" />

      <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
    </S.Container>
  )
}
