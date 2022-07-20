import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Container } from '@nextui-org/react'
import Login from '../components/Login'
import { useHistory } from 'react-router'
import useUser from '../hooks/useUser'

const StyleVersion = styled.div`
  position: absolute;
  bottom: 20px;
  color: #ffff;
  text-align: center;
  width: 100%;
`

export const LoginPage = () => {
  const history = useHistory()

  const { state, isLogged } = useUser()

  useEffect(() => {
    if (!!(state.user || isLogged())) history.push({ pathname: '/home' })
  }, [])

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
