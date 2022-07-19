import React from 'react'
import { Avatar, Dropdown, Text } from '@nextui-org/react'
import styled from 'styled-components'
import useUser from '../../hooks/useUser'

const StyledNavBar = styled.div`
  background-color: #181818;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 65px;
  align-items: center;
  padding: 15px;
`

export const NavBar = () => {
  const { logout, state } = useUser()

  const handlerSelect = (e) => {
    if (e === 'logout') logout()
  }

  return (
    <StyledNavBar>
      <Text b>MANUSSA</Text>
      <Dropdown placement="bottom-left">
        <Dropdown.Trigger>
          <Avatar
            bordered
            zoomed
            size="lg"
            as="button"
            color="secondary"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
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
                {state.user.name}
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
    </StyledNavBar>
  )
}
