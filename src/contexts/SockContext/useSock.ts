import { SocketContext } from './context'
import { useContext } from 'react'

export const useSocket = () => {
  const socket = useContext(SocketContext)

  return socket
}
