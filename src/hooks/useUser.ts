import React from 'react'
import { useHistory } from 'react-router'
import { loginUser, logoutUser, refreshUser, useAuthContext } from '../contexts/UserContext'
import { editUser } from '../contexts/UserContext/actions'
// import getToken from '../services/imgur'
import { sendImage } from '../services/imgur'

type Props = {
  email: string
  password: string
}

const useUser = () => {
  const history = useHistory()
  const { state, dispatch } = useAuthContext()

  const login = async ({ email, password }: Props) => {
    try {
      const response = await loginUser(dispatch, { email, password })
      if (!response) return
      history.push('/juego')
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

  const editProfile = async ({ user, name, avatar, idUser }) => {
    try {
      const urlAvatar = avatar !== state.user.avatar ? await sendImage(avatar) : avatar

      const body = {
        username: user.trim(),
        name: name.trim(),
        avatar: urlAvatar
      }

      const res = await editUser(dispatch, { body, idUser })

      return !res ? false : true
    } catch (error) {
      console.log(error)
      return false
    }
  }

  return { state, login, logout, isLogged, editProfile }
}

export default useUser
