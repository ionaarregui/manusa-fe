import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Text } from '@nextui-org/react'
// import { io } from 'socket.io-client'

import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

import { over } from 'stompjs'
import useUser from '../../hooks/useUser'
import { ModalConfigGame } from './ModalConfigGame'
import { config } from '../../services/config'
import { ModalJoinGame } from './ModalJoinGame'

const StyledButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

const StyledPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Home = () => {
  return (
    <StyledPage>
      <Text
        h4
        css={{
          textGradient: '45deg, $blue600 -20%, $pink600 50%'
        }}
      >
        COMENZAR A JUGAR
      </Text>
      <ModalConfigGame />
      <StyledButtons style={{ paddingTop: '130px' }}>
        <Text
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%'
          }}
        >
          UNIRSE A PARTIDA EXISTENTE
        </Text>
        <ModalJoinGame />
      </StyledButtons>
    </StyledPage>
  )
}

// WG691f08
