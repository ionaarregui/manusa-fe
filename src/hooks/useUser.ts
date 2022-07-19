import React from 'react'
import { useHistory } from 'react-router'
import { loginUser, logoutUser, refreshUser, useAuthContext } from '../contexts/UserContext'

type Props = {
  email: string
  password: string
  remember: boolean
}

const useUser = () => {
  const history = useHistory()
  const { state, dispatch } = useAuthContext()

  const login = async ({ email, password, remember }: Props) => {
    console.log(remember)
    try {
      const response = await loginUser(dispatch, { email, password })
      if (!response) return
      history.push('/home')
    } catch (error) {
      console.log(error)
    }
  }
  const logout = async () => {
    const response = await logoutUser(dispatch)
    history.push('/login')
    return response
  }

  const isLogged = () => {
    const user = sessionStorage.getItem('currentUser')
    if (user) {
      refreshUser(dispatch, JSON.parse(user))
      return true
    }
    return false
  }

  return { state, login, logout, isLogged }
}

export default useUser
