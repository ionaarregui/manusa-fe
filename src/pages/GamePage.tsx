import { useEffect, useState } from 'react'
import { Button, Card, Container, Grid, Loading, Row } from '@nextui-org/react'
import { useGame } from '../hooks/useGame'
import ChatMessages from '../components/ChatMessages/ChatMessages'
import ListConnected from '../components/ListConnected/ListConnected'
import { StyledPage } from './Styles'
import CardCode from '../components/CardCode/CardCode'
import { StompSessionProvider, useSubscription, useStompClient } from 'react-stomp-hooks'
import { config } from '../services/config'
import { useSocket } from '../contexts/SockContext/useSock'

const ENDPOINT = config.api

export const GamePage = () => {
  const socket = useSocket()
  console.log(socket)

  // const stompClient = useStompClient()
  const { state, isCurrentGame, cancelGame, startGame } = useGame()

  const [mensajes, setMensajes] = useState([])

  useEffect(() => {
    isCurrentGame()
  }, [])

  // useSubscription('/match/start', (message) => {
  //   console.log(message)
  //   setLastMessage(message.body)
  // })

  const handlerStartGame = () => {
    socket.send('/hello', {}, JSON.stringify({ name: 'admin' }))
    // startGame(state.currentGame)
    // console.log('MESSAGE SEND')
    // console.log(stompClient)
    // stompClient.publish({
    //   destination: '/hello',
    //   body: 'admin'
    // })
  }

  const handlerConnect = () => {
    socket.subscribe('/match/start', function (greeting) {
      showGreeting(JSON.parse(greeting.body).content)
    })
  }

  function showGreeting(message) {
    console.log({ message })

    setMensajes([...mensajes, message])

    // console.log('showGreeting', { mensajes })
  }

  // useEffect(() => {
  //   if (stompClient.connected) {
  //     stompClient.publish({
  //       destination: `/hello`,
  //       body: 'some-string'
  //     })
  //   }
  // }, [stompClient.connected])

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
                  {/* <Button auto light color="secondary" onClick={cancelGame}> */}
                  <Button auto light color="secondary" onClick={handlerConnect}>
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
