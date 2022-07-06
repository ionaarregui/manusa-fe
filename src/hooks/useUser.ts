import React, { useCallback, useState } from 'react'
// import Context from 'context/UserContext'
import loginService from '../services/login'
// import addFavService from 'services/addFav'

type Props = {
  username: string
  password: string
}

export default function useUser() {
  // const { jwt,  setJWT} = useContext(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({ username, password }: Props) => {
    setState({ loading: true, error: false })
    loginService({ username, password })
      .then((res) => {
        if (res.status === 'Ok') {
          window.sessionStorage.setItem('user', res)
          setState({ loading: false, error: false })
        } else {
          setState({ loading: false, error: true })
        }
        // setJWT(jwt)
      })
      .catch((err) => {
        window.sessionStorage.removeItem('user')
        setState({ loading: false, error: true })
        console.error(err)
      })
    // }, [setJWT])
  }, [])

  const logout = useCallback(() => {
    window.sessionStorage.removeItem('user')
    // setJWT(null)
    // }, [setJWT])
  }, [])

  return {
    // isLogged: Boolean(jwt),
    isLogged: Boolean(true),
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    login,
    logout
  }
}
