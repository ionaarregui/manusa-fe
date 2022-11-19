import { useState } from 'react'
import styled from 'styled-components'
import { Button } from '@nextui-org/react'
// import { io } from 'socket.io-client'

import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

import useUser from '../hooks/useUser'
import { config } from '../services/config'

const ENDPOINT = config.api

const StyledButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`

const StyledPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

var stompClient = null

export const Pruebas = () => {
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

  function connect() {
    var socket = new SockJS(`${ENDPOINT}/manusa-game`)
    stompClient = Stomp.over(socket)
    console.log({ stompClient })
    stompClient.connect(
      {},
      function (frame) {
        setConnected(true)
        console.log('Connected aca: ' + frame)
        stompClient.subscribe('/match/start', function (greeting) {
          showGreeting(JSON.parse(greeting.body).content)
        })
      },
      onError
    )
  }

  async function sendName() {
    // const response = await stompClient.send('/hello', {})
    // console.log({ response })
    stompClient.send('/hello', {}, JSON.stringify({ name: state.user.name }))
    console.log('sendName', { mensajes })
  }

  function showGreeting(message) {
    console.log({ message })

    setMensajes([...mensajes, message])

    // console.log('showGreeting', { mensajes })
  }

  function sendPuebaX() {
    var socket = new SockJS(`${ENDPOINT}/manusa-game`)
    stompClient = Stomp.over(socket)
    stompClient.connect(
      {},
      function (frame) {
        setConnected(true)
        console.log('Connected aca: ' + frame)
        stompClient.subscribe('/prueba', function (greeting) {
          showGreeting(JSON.parse(greeting.body).content)
        })
      },
      onError
    )
  }

  function sendPueba() {
    stompClient.send('/prueba', {}, JSON.stringify({ name: state.user.name }))
    console.log('sendPreueba', { mensajes })
  }

  const conexion = () => {
    connect()
  }

  const enviar = () => {
    sendName()
  }

  return (
    <StyledPage>
      {connected && <div>Conectad!</div>}
      <StyledButtons>
        <Button auto bordered color="gradient" onClick={conexion}>
          CONECTAR
        </Button>
        <Button auto bordered color="gradient" onClick={enviar}>
          ENVIAR MENSAJE
        </Button>
        <Button auto bordered color="gradient" onClick={sendPuebaX}>
          A /PRUEBA
        </Button>
        <Button auto bordered color="gradient" onClick={sendPueba}>
          mensaje A /PRUEBA
        </Button>
      </StyledButtons>
    </StyledPage>
  )
}

// WG691f08
