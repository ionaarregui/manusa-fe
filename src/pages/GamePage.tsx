import { useEffect } from 'react'
import { Button, Card, Container, Grid, Loading, Row } from '@nextui-org/react'
import { useGame } from '../hooks/useGame'
import ChatMessages from '../components/ChatMessages/ChatMessages'
import ListConnected from '../components/ListConnected/ListConnected'
import { StyledPage } from './Styles'
import CardCode from '../components/CardCode/CardCode'

export const GamePage = () => {
  const { state, isCurrentGame, cancelGame, startGame } = useGame()

  useEffect(() => {
    isCurrentGame()
  }, [])

  const handlerStartGame = () => {
    startGame(state.currentGame)
  }

  const users = [
    { avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', name: 'admin', username: 'admin' },
    { avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', name: 'admin', username: 'admin' },
    { avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', name: 'admin', username: 'admin' },
    { avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', name: 'admin', username: 'admin' },
    { avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', name: 'admin', username: 'admin' },
    { avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d', name: 'admin', username: 'admin' }
  ]

  return (
    <StyledPage>
      <Container sm>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12}>
            <CardCode idGame={state.currentGame} />
          </Grid>
          <Grid xs={7}>
            <ChatMessages />
          </Grid>

          <Grid xs={5}>
            <Card
              css={
                {
                  // bgBlur: '#00000026'
                }
              }
            >
              <Card.Header>Usuarios conectados</Card.Header>
              <Card.Body css={{ h: 150, p: 0 }}>
                <ListConnected users={users} />
              </Card.Body>

              <Card.Footer>
                <Row justify="flex-end">
                  <Button auto light color="secondary" onClick={cancelGame}>
                    Cancelar
                  </Button>
                  <Button auto disabled={users.length !== 6} color="secondary" onClick={handlerStartGame}>
                    {users.length !== 6 ? (
                      <Loading type="points" color="currentColor" size="sm">
                        Esperando jugadores
                      </Loading>
                    ) : (
                      'Iniciar Partida'
                    )}
                  </Button>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
    </StyledPage>
  )
}
