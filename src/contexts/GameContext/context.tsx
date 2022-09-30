import React, { createContext, useReducer, useContext } from 'react'
import { initialState, GameReducer } from './reducer'

const GameContext = createContext({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (_action: any) => {
    // dispatch: (action: TypeAction) => {
    /**/
  }
})

export const GameProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(GameReducer, initialState)

  return <GameContext.Provider value={{ state, dispatch }}>{children}</GameContext.Provider>
}

export const useGameContext = () => useContext(GameContext)
