import React from 'react'
import styled from 'styled-components'
import { Container } from '@nextui-org/react'
import Login from '../components/Login'

const StyleVersion = styled.div`
  position: absolute;
  bottom: 20px;
  color: #ffff;
  text-align: center;
  width: 100%;
`

export const LoginPage = () => {
  return (
    <>
      {/* <h2>Login</h2> */}
      <Container>
        <Login />
      </Container>
      <StyleVersion>
        <p>version 0.0.2</p>
      </StyleVersion>
    </>
  )
}
