import { useHistory } from 'react-router'
import { createGame, recoverGame, closeGame, useGameContext } from '../contexts/GameContext'

// TODO:  conexiones socket
export const useGame = () => {
  const { state, dispatch } = useGameContext()
  const history = useHistory()

  const createGameAndConecct = async ({ cantPlayers, withGuests }) => {
    const res = await createGame(dispatch, { cantPlayers, withGuests })

    if (res) history.push('/game/' + res)

    return res
  }

  const isCurrentGame = () => {
    const game = sessionStorage.getItem('currentGame')
    if (game) {
      recoverGame(dispatch, JSON.parse(game))
      return true
    }
    history.push('/home')
    return false
  }

  const cancelGame = () => {
    sessionStorage.removeItem('currentGame')
    closeGame(dispatch)
    history.push('/home')
  }

  // accion mookeada
  const joinGame = (codeGame: string) => {
    sessionStorage.setItem('currentGame', JSON.stringify(codeGame))
    recoverGame(dispatch, codeGame)
    history.push('/game/' + codeGame)
  }

  const startGame = (codeGame: string) => {
    console.log('Iniciar Partida: ', codeGame)
    history.push('/start/' + codeGame)
  }

  return { state, createGameAndConecct, isCurrentGame, cancelGame, joinGame, startGame }
}
