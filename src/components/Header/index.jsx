import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Receipt, List, SignOut, MagnifyingGlass } from '@phosphor-icons/react'

import logoSvg from '../../assets/logo.svg'

import { Input } from '../Input'
import { Button } from '../Button'

import { SideMenu } from '../SideMenu'

import * as S from './styles'

export function Header({ onOpenMenu, onCloseMenu, menuIsOpen }) {
  const [search, setSearch] = useState('')

  const isAdmin = true

  return (
    <S.Container>
      <S.Menu>
        <div id="desktop">
          {isAdmin ? (
            <Link to="/">
              <img src={logoSvg} alt="" />
              <p>admin</p>
            </Link>
          ) : (
            <Link to="/">
              <img src={logoSvg} alt="" />
            </Link>
          )}

          <Input
            icon={MagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
            onChange={(e) => setSearch(e.target.value)}
          />

          {isAdmin ? (
            <div className="actions">
              <Button title="Novo prato" />

              <SignOut />
            </div>
          ) : (
            <div className="actions">
              <Button icon={Receipt} title="Pedidos (0)" />

              <SignOut />
            </div>
          )}
        </div>

        <div id="mobile">
          {isAdmin ? (
            <>
              <S.MenuButton>
                <List onClick={onOpenMenu} />
              </S.MenuButton>

              <Link to="/">
                <img src={logoSvg} alt="" />
                <p>admin</p>
              </Link>

              <div></div>
            </>
          ) : (
            <>
              <S.MenuButton>
                <List onClick={onOpenMenu} />
              </S.MenuButton>

              <img src={logoSvg} alt="" />

              <S.MenuReceipt>
                <Receipt />
                <span>0</span>
              </S.MenuReceipt>
            </>
          )}
          <SideMenu menuIsOpen={menuIsOpen} onCloseMenu={onCloseMenu} setSearch={setSearch} />
        </div>
      </S.Menu>
    </S.Container>
  )
}
