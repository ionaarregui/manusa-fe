import { useHistory } from 'react-router'
import { createGame, recoverGame, closeGame, useGameContext } from '../contexts/GameContext'

export const useMazo = () => {
  //   const { state, dispatch } = useGameContext()
  const CARTAS = [
    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'B6',
    'B7',
    'B10',
    'B11',
    'B12',
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C10',
    'C11',
    'C12',
    'E1',
    'E2',
    'E3',
    'E4',
    'E5',
    'E6',
    'E7',
    'E10',
    'E11',
    'E12',
    'O1',
    'O2',
    'O3',
    'O4',
    'O5',
    'O6',
    'O7',
    'O10',
    'O11',
    'O12'
  ]

  const desordenar = (c) => c.sort(() => Math.random() - 0.5)

  const mazo = desordenar(CARTAS)

  const getCartas = (cant) => {
    // return CARTAS.pop(cant)
    return mazo.splice(0, cant)
  }

  return { getCartas }
}
