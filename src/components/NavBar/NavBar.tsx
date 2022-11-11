import React, { useState } from 'react'
import { Navbar, Avatar, Dropdown, Text } from '@nextui-org/react'
import styled from 'styled-components'
import useUser from '../../hooks/useUser'
import { ModalEditPerfil } from '../Home/ModalEditPerfil'

const StyledNavBar = styled.div`
  background-color: #181818;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 65px;
  align-items: center;
  padding: 15px;
`

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`

export const NavBar = ({ children }) => {
  const { logout, state } = useUser()
  const [openModal, setOpenModal] = useState(false)

  const handlerSelect = (e) => {
    if (e === 'logout') logout()
    if (e === 'settings') setOpenModal(true)
  }

  const handlerCloseModal = () => setOpenModal(false)

  return (
    <StyledPage>
      <Navbar isBordered variant="floating">
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%'
            }
          }}
        >
          <Text b color="inherit">
            MANUSSA
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            '@xs': {
              w: '12%',
              jc: 'flex-end'
            }
          }}
        >
          <Dropdown placement="bottom-left">
            <Dropdown.Trigger>
              <Avatar bordered zoomed size="lg" as="button" color="secondary" src={state.user.avatar} />
            </Dropdown.Trigger>
            <Dropdown.Menu
              color="secondary"
              aria-label="Avatar Actions"
              disabledKeys={['profile']}
              onAction={handlerSelect}
            >
              <Dropdown.Item key="profile" css={{ height: '$18' }} textValue="User">
                <Text color="inherit">
                  {'👑 Mogul '}
                  <Text b color="inherit">
                    {state.user.username}
                  </Text>
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" textValue="Editar">
                Editar perfil
              </Dropdown.Item>
              <Dropdown.Item key="logout" color="error" withDivider textValue="Salir">
                Salir
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
      </Navbar>
      {openModal && <ModalEditPerfil show={openModal} closeHandler={handlerCloseModal} />}
      {children}
    </StyledPage>
  )
}
