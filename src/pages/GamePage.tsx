import { useEffect, useState } from 'react'
import { Button, Card, Container, Grid, Loading, Row } from '@nextui-org/react'
import { useGame } from '../hooks/useGame'
import ChatMessages from '../components/ChatMessages/ChatMessages'
import ListConnected from '../components/ListConnected/ListConnected'
import { StyledPage } from './Styles'
import CardCode from '../components/CardCode/CardCode'
import { config } from '../services/config'
import { useSocket } from '../contexts/SockContext/useSock'
import useUser from '../hooks/useUser'

const ENDPOINT = config.api

export const GamePage = () => {
  const socket = useSocket()
  console.log(socket)

  const [iniciar, setIniciar] = useState(false)

  const [jugadores, setJugadores] = useState([])

  // const stompClient = useStompClient()
  const {
    state: { user }
  } = useUser()
  const { state, isCurrentGame, cancelGame, startGame } = useGame()

  const [mensajes, setMensajes] = useState([])

  useEffect(() => {
    isCurrentGame()
    if (socket?.connected) {
      if (state.currentGameCreator) {
        socket.subscribe('/match/start', () => {
          setIniciar(true)
        })
        socket.send('/start', {}, JSON.stringify({ code: state.currentGame }))
      }
      socket.subscribe('/match/connect', (j) => {
        setJugadores([...jugadores, j])
      })
      socket.send('/connect', {}, JSON.stringify({ ...user }))
    }
  }, [socket])

  const handlerStartGame = () => {
    console.log({ state })
    // startGame(state.currentGame)
    // console.log('MESSAGE SEND')
    // console.log(stompClient)
    // stompClient.publish({
    //   destination: '/hello',
    //   body: 'admin'
    // })
  }

  const handlerConnect = () => {
    // /match/connect
    // /connect
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
