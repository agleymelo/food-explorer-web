import { useState } from 'react'

import { Header } from '../../components/Header'

import * as S from './styles'

export function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <>
      <Header onOpenMenu={() => setMenuIsOpen(true)} menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
    </>
  )
}
