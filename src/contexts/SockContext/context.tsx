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
  const [ws, setWs] = useState(null)

  useEffect(() => {
    setWs(Stomp.over(webSocket))
  }, [])

  useEffect(() => {
    if (ws)
      ws.connect(
        {},
        (frame) => {
          console.log('Conectado: ' + frame)
          // stompClient.subscribe('/match/start', function (greeting) {
          //   showGreeting(JSON.parse(greeting.body).content)
          // })
        },
        (err) => {
          console.error(err)
        }
        /// esto es desconeccion
      )
  }, [ws])

  return <SocketContext.Provider value={ws}>{props.children}</SocketContext.Provider>
}
