import React from 'react'
import { useHistory } from 'react-router'
import { loginUser, logoutUser, refreshUser, useAuthContext } from '../contexts/UserContext'
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

  const editProfile = async ({ user, mail, avatar }) => {
    const urlAvatar = avatar !== state.user.avatar ? await sendImage(avatar) : avatar

    const send = {
      user: user.trim(),
      mail: mail.trim(),
      avatar: urlAvatar
    }
    console.log({ send })
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  return { state, login, logout, isLogged, editProfile }
}

export default useUser
