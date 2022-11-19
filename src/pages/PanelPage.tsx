import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Row, Grid, Button, Card, Text, User } from '@nextui-org/react'
import { useParams } from 'react-router'
import CardCode from '../components/CardCode/CardCode'
import { StyledPage } from './Styles'
import Carta from '../components/Carta'
import { useMazo } from '../hooks/useMazo'
import useUser from '../hooks/useUser'
import CardOtherGamer from '../components/CardOtherGamer/CardOtherGamer'

const CARTAS = [
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
  'B7',
  'B10',
  'B11',
  'B12',
  'C1',
  'C2',
  'C3',
  'C4',
  'C5',
  'C6',
  'C7',
  'C10',
  'C11',
  'C12',
  'E1',
  'E2',
  'E3',
  'E4',
  'E5',
  'E6',
  'E7',
  'E10',
  'E11',
  'E12',
  'O1',
  'O2',
  'O3',
  'O4',
  'O5',
  'O6',
  'O7',
  'O10',
  'O11',
  'O12'
]

const MisCartas = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  justify-content: center;
  align-items: center;
  transform: scale(0.7);
`
const ReverseCarta = styled.div<{ move: number }>`
  background-image: url(https://cdn2.cloudymedia.com/img/sprites/cartas-nuevas.jpg?v=101);
  background-position: -3416px 0;
  width: 64px;
  min-width: 64px;
  height: 96px;
  min-height: 96px;
  border-radius: 3px;
  position: absolute;
  left: ${({ move }) => `${move * 1.5}rem`};
`
const WrapperMesa = styled.div`
  /* box-sizing: border-box; */
  /* width: 932px; */
  /* height: 500px; */
  position: absolute;
  width: 80vw;
  height: 71vh;
  background: radial-gradient(50% 50% at 50% 50%, #1f9032 0%, #1c812d 33.85%, #144e1e 100%);
  border-radius: 1358.5px;
`

const desordenar = (c) => {
  return c.sort(() => Math.random() - 0.5)
}

const mazo = desordenar(CARTAS)
const getCartas = (cant) => {
  // return CARTAS.pop(cant)
  return mazo.splice(0, cant)
}

// console.log(getCartas(40))
// console.log(mazo)

// const handlerSelectCard = (carta) => setSelectedCard(carta)

const PanelPage = () => {
  const {
    state: { user }
  } = useUser()
  const { getCartas } = useMazo()
  const [selectedCard, setSelectedCard] = useState('')
  const [misCartas, setMisCartas] = useState([])

  const handlerSelectCard = (carta: string) => setSelectedCard(carta !== selectedCard ? carta : '')

  const handlerPrueba = () => {
    console.log({ selectedCard })
  }

  useEffect(() => {
    setMisCartas(getCartas(6))
  }, [])

  const { id }: any = useParams()

  return (
    <StyledPage>
      <WrapperMesa className="mesa" />
      <Grid.Container gap={2} justify="center" css={{ h: '100vh' }}>
        {/* <Row justify="center" css={{ height: 'max-content' }}>
          <Grid xs={3}>
            <CardOtherGamer cant={6} user={user} bet={0} />
          </Grid>
          <Grid xs={3}>
            <CardOtherGamer cant={6} user={user} bet={5} />
          </Grid>
          <Grid xs={3}>
            <CardOtherGamer cant={6} user={user} bet={3} />
          </Grid>
          <Grid xs={3}>
            <CardOtherGamer cant={6} user={user} bet={2} />
          </Grid>
          <Grid xs={3}>
            <CardOtherGamer cant={6} user={user} bet={1} />
          </Grid>
        </Row> */}
        {/* <Row justify="center" css={{ height: 'max-content' }}>
          <Grid xs={3}>
            <CardCode idGame={id} />
          </Grid>
        </Row> */}
        <Grid xs={10} justify="center" className="mesa">
          <Grid.Container justify="center" gap={0}>
            <Grid xs={12} alignItems="center">
              <Grid xs={3}>
                <CardOtherGamer cant={4} user={user} bet={3} />
              </Grid>
              <Grid xs={3}>
                <CardOtherGamer cant={4} user={user} bet={1} />
              </Grid>
              <Grid xs={3}>
                <CardOtherGamer cant={4} user={user} bet={5} />
              </Grid>
              <Grid xs={3}>
                <CardOtherGamer cant={4} user={user} bet={1} />
              </Grid>
              <Grid xs={3}>
                <CardOtherGamer cant={4} user={user} bet={1} />
              </Grid>
            </Grid>
            <Grid xs={5} alignItems="flex-end">
              <Card variant="bordered" css={{ height: 'max-content' }}>
                {/* <Card variant="bordered" css={{ bgBlur: '#00000026', height: 'max-content' }}> */}

                <Card.Body css={{ bgBlur: '#00000026', padding: 0 }}>
                  <MisCartas>
                    {misCartas.map((c, index) => {
                      return (
                        <Carta key={index} valueCard={c} onClick={handlerSelectCard} isActive={c === selectedCard} />
                      )
                    })}
                  </MisCartas>

                  {/* 
                  <Row css={{ transform: 'scale(0.7)', width: 'auto' }}>
                    {misCartas.map((c, index) => {
                      return (
                        <Carta key={index} valueCard={c} onClick={handlerSelectCard} isActive={c === selectedCard} />
                      )
                    })}
                  </Row> */}
                </Card.Body>
                <Card.Footer>
                  <Row align="center" justify="space-around">
                    <User src={user.avatar} name={user.username} description={user.name} squared />
                    <Button
                      aria-label="send"
                      size="sm"
                      color="secondary"
                      disabled={!selectedCard}
                      onPress={handlerPrueba}
                    >
                      Tirar
                    </Button>
                    <Text b>Apostaste: 3</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
            {/* </Row> */}
            {/* <Row>
              {getCartas(4).map((c, index) => {
                return <Carta key={index} valueCard={c} />
              })}
            </Row>
            <Row>
              {getCartas(4).map((c, index) => {
                return <Carta key={index} valueCard={c} />
              })}
            </Row>
            <Row>
              {getCartas(4).map((c, index) => {
                return <Carta key={index} valueCard={c} />
              })}
            </Row> */}
            {/* 
            {desordenar(CARTAS).map((c, index) => {
              return <Carta key={index} valueCard={c} />
            })} */}
          </Grid.Container>
        </Grid>
      </Grid.Container>
    </StyledPage>
  )
}

export default PanelPage
