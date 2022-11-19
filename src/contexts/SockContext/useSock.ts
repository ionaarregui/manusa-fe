import { SocketContext } from './context'
import { useContext } from 'react'

export const useSocket = () => {
  const { ws: socket, status, cambiarStatus } = useContext(SocketContext)

  const conectar = () => {
    console.log('ESTA CONECTANDO', socket)
    socket.connect(
      {},
      (frame) => {
        console.log('Conectado: ' + frame)
        cambiarStatus(true)
        // stompClient.subscribe('/match/start', function (greeting) { showGreeting(JSON.parse(greeting.body).content)
        // })
      },
      (err) => {
        console.error(err)
        cambiarStatus(false)
      }
      /// esto es desconeccion
    )
  }

  return { socket, status, conectar }
}
