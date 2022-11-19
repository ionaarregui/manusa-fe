import React, { useEffect, useState, createContext } from 'react'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'

import { config } from '../../services/config'

const ENDPOINT = config.api
const webSocket = new SockJS(`${ENDPOINT}/manusa-game`)

export const SocketContext = createContext(webSocket)

interface ISocketProvider {
  children: any
}

export const SocketProvider = (props: ISocketProvider) => {
  const [status, setStatus] = useState(false)
  const ws = Stomp.over(webSocket)

  // useEffect(() => {
  //   setWs(Stomp.over(webSocket))
  // }, [])
  const cambiarStatus = (val) => setStatus(val)

  // useEffect(() => {
  //   console.log('NO TIENE QUE PASAR POR ACA CONTEXT CONEXION: ', ws)
  //   // if (ws)
  //   ws.connect(
  //     {},
  //     (frame) => {
  //       console.log('Conectado: ' + frame)
  //       setStatus(true)
  //       // stompClient.subscribe('/match/start', function (greeting) {
  //       //   showGreeting(JSON.parse(greeting.body).content)
  //       // })
  //     },
  //     (err) => {
  //       console.error(err)
  //       setStatus(false)
  //     }
  //     /// esto es desconeccion
  //   )
  // }, [])

  return <SocketContext.Provider value={{ ws, status, cambiarStatus }}>{props.children}</SocketContext.Provider>
}
