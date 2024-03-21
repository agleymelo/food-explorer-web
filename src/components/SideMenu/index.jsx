import { Link } from 'react-router-dom'
import { MagnifyingGlass, X } from '@phosphor-icons/react'

import { Input } from '../Input'

import * as S from './styles'
import { Footer } from '../Footer'

export function SideMenu({ onCloseMenu, menuIsOpen, setSearch }) {
  const isAdmin = true

  return (
    <S.MenuAsideMobile data-menu-is-open={menuIsOpen}>
      {menuIsOpen && (
        <>
          <S.MenuMobileHeader>
            <button onClick={onCloseMenu}>
              <X />
            </button>
            <strong>Menu</strong>
          </S.MenuMobileHeader>

          <S.MenuMobileContent>
            <Input
              icon={MagnifyingGlass}
              placeholder="Busque por pratos ou ingredientes"
              onChange={(event) => setSearch(event.target.value)}
            />

            {isAdmin ? (
              <S.MenuMobileButtonAction>
                <Link to="/product/create">
                  <button>Novo prato</button>
                </Link>
              </S.MenuMobileButtonAction>
            ) : (
              <S.MenuMobileButtonAction>
                <button>Pedidos</button>
              </S.MenuMobileButtonAction>
            )}

            <S.MenuMobileButtonAction>
              <button>Sair</button>
            </S.MenuMobileButtonAction>
          </S.MenuMobileContent>

          <Footer />
        </>
      )}
    </S.MenuAsideMobile>
  )
}
