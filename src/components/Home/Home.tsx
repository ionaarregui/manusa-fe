import React from 'react'
import styled from 'styled-components'
import { Button, Text } from '@nextui-org/react'

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
        CREAR NUEVA PARTIDA
      </Text>
      <StyledButtons>
        <Button auto bordered color="gradient">
          MOGUL
        </Button>
        <Button auto bordered color="gradient">
          INVITADOS
        </Button>
      </StyledButtons>
      <StyledButtons style={{ paddingTop: '130px' }}>
        <Text
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%'
          }}
        >
          UNIRSE A PARTIDA EXISTENTE
        </Text>
        <Button auto bordered size={'xs'} color="gradient">
          CON CÓDIGO
        </Button>
      </StyledButtons>
    </StyledPage>
  )
}
