import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Text } from '@nextui-org/react'
import styled, { keyframes } from 'styled-components'
import useUser from '../hooks/useUser'

const zoomInFont = keyframes`
100% {
    font-size: 85px; opacity: 0;
}
`
const WrapperPage = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  margin: auto;
  p {
    opacity: 1;
    font-size: 50px;
    animation: ${zoomInFont} 3.5s infinite;
  }
`

export const Welcome = () => {
  const history = useHistory()

  const { state, isLogged } = useUser()

  const redirect = !!(state.user || isLogged()) ? '/home' : '/login'

  useEffect(() => {
    setTimeout(
      () =>
        history.push({
          pathname: redirect
        }),
      3000
    )
  }, [])

  return (
    <WrapperPage>
      <Text id="modal-title">
        Welcome to
        <Text b>Manusa</Text>
      </Text>
    </WrapperPage>
  )
}
