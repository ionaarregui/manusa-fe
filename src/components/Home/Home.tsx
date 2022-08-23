import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button, Text } from '@nextui-org/react'
// import { io } from 'socket.io-client'

import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

import { over } from 'stompjs'
import useUser from '../../hooks/useUser'

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

// const App = () => {
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState("");

//   useEffect(() => {
//     socket?.emit("newUser", user);
//   }, [socket, user]);
// }

var stompClient = null

export const Home = () => {
  const { state } = useUser()

  const [connected, setConnected] = useState(false)

  const [userData, setUserData] = useState({
    username: '',
    receivername: '',
    connected: false,
    message: ''
  })

  const [mensajes, setMensajes] = useState([])

  // useEffect(() => {
  //   console.log(userData)
  // }, [userData])

  // const connect = () => {
  //   let Sock = new SockJS('https://manusa-api.herokuapp.com/gs-guide-websocket')
  //   stompClient = over(Sock)
  //   stompClient.connect({}, onConnected, onError)
  // }

  const onConnected = () => {
    setUserData({ ...userData, connected: true })
  }

  const onError = (err) => {
    console.error(err)
  }

  const handlerButton = () => {
    // console.log(socket)
  }

  function connect() {
    var socket = new SockJS('https://manusa-api.herokuapp.com/gs-guide-websocket')
    stompClient = Stomp.over(socket)
    stompClient.connect(
      {},
      function (frame) {
        setConnected(true)
        console.log('Connected aca: ' + frame)
        stompClient.subscribe('/topic/greetings', function (greeting) {
          showGreeting(JSON.parse(greeting.body).content)
        })
      },
      onError
    )
  }

  function sendName() {
    stompClient.send('/app/hello', {}, JSON.stringify({ name: state.user.name }))
    console.log('sendName', { mensajes })
  }

  function showGreeting(message) {
    console.log({ message })

    setMensajes([...mensajes, message])

    // console.log('showGreeting', { mensajes })
  }

  const conexion = () => {
    connect()
  }

  const enviar = () => {
    sendName()
  }

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
        <Button auto bordered color="gradient" onClick={conexion}>
          MOGUL
        </Button>
        <Button auto bordered color="gradient" onClick={enviar}>
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
