import React from 'react'
import styled from 'styled-components'
import { Badge, Card, Grid, Text, User } from '@nextui-org/react'

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

const BadgeWin = styled(Badge)`
  position: absolute;
  right: 0;
  bottom: 0;
`
const BadgeBet = styled(Badge)`
  position: absolute;
  left: 0;
  bottom: 0;
`

type PropsType = { user: any; cant: number; bet: number }

const CardOtherGamer = ({ user, cant, bet }) => {
  const cartas = () => {
    const cartas = []
    for (let i = 0; i < cant; i++) {
      cartas.push(<ReverseCarta move={i} />)
    }
    return cartas
  }

  return (
    <>
      <Badge enableShadow disableOutline color="secondary" variant="flat" content={`apostó ${bet}`}>
        <Card
          variant="bordered"
          css={{
            bgBlur: '#00000096'
          }}
        >
          <Card.Body>
            <Grid.Container justify="center" gap={2}>
              <Grid xs={5}>
                <User src={user.avatar} name={user.name} squared size="sm" />
                {/* <User src={user.avatar} name={user.name} description={`apostó ${bet}`} squared size="sm" /> */}
              </Grid>
              <Grid xs={7} css={{ transform: 'scale(0.6)', alignItems: 'center' }}>
                {cartas()}
                {/* <ReverseCarta move={0} />
                        <ReverseCarta move={1} />
                        <ReverseCarta move={2} />
                        <ReverseCarta move={3} />
                        <ReverseCarta move={4} />
                        <ReverseCarta move={5} />
                    <ReverseCarta move={6} /> */}
              </Grid>
              {/* <Grid xs={4}> */}
              {/* </Grid> */}
            </Grid.Container>
          </Card.Body>
          <BadgeWin enableShadow disableOutline color="success">
            0
          </BadgeWin>
          {/* <BadgeBet enableShadow disableOutline color="secondary" variant="flat" content={`apostó ${bet}`}> */}

          {/* </BadgeBet> */}
        </Card>
      </Badge>
    </>
  )
}

export default CardOtherGamer
