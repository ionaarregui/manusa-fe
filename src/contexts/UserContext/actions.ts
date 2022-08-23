import loginService from '../../services/login'

export async function loginUser(dispatch: any, loginPayload: any) {
  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    const data = await loginService({ body: loginPayload })

    if (data.status === 'Ok') {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.data })
      sessionStorage.setItem('currentUser', JSON.stringify(data.data))
      return true
    }
    dispatch({ type: 'LOGIN_ERROR', error: data.data })
    return false
  } catch (error) {
    dispatch({ type: 'LOGIN_ERROR', error: error })
    console.log(error)
  }
}

export async function logoutUser(dispatch: any) {
  dispatch({ type: 'LOGOUT' })
  sessionStorage.removeItem('currentUser')
  return true
}

export async function refreshUser(dispatch: any, user: any) {
  dispatch({ type: 'LOGIN_REFRESH', payload: user })
}
