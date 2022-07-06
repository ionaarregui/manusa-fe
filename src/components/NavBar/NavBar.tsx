import React from 'react'
import { Avatar, Dropdown, Text } from '@nextui-org/react'
import styled from 'styled-components'

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
        <Dropdown.Menu color="secondary" aria-label="Avatar Actions" disabledKeys={['profile']}>
          <Dropdown.Item key="profile" css={{ height: '$18' }}>
            <Text color="inherit">
              {'👑 Mogul '}
              <Text b color="inherit">
                usercito
              </Text>
            </Text>
          </Dropdown.Item>
          <Dropdown.Item key="settings">Editar perfil</Dropdown.Item>
          <Dropdown.Item key="logout" color="error" withDivider>
            Salir
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </StyledNavBar>
  )
}
