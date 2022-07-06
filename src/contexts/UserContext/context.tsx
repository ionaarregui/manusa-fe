import React, { createContext, useReducer, useContext } from 'react'
import { initialState, AuthReducer } from './reducer'

const AuthContext = createContext({
  state: initialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  dispatch: (_action: any) => {
    // dispatch: (action: TypeAction) => {
    /**/
  }
})

export const AuthProvider = ({ children }: { children: any }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)

  return <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext)
