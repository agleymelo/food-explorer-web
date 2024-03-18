import * as S from './styles'

import logo from '../../assets/logo.svg'

export function SignIn() {
  return (
    <S.Container>
      <div>
        <img src={logo} alt="Logo em formato poligonou na cor azul" />
        <h1>Food explorer</h1>
      </div>
    </S.Container>
  )
}
