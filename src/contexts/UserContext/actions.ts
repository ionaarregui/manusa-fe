// const ENDPOINT = 'https://secret-hamlet-03431.herokuapp.com';
const ENDPOINT = 'https://manusa-api.herokuapp.com'

export async function loginUser(dispatch: any, loginPayload: any) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginPayload)
  }

  try {
    dispatch({ type: 'REQUEST_LOGIN' })
    let response = await fetch(`${ENDPOINT}/login`, requestOptions)
    let data = await response.json()

    if (data.status === 'Ok') {
      dispatch({ type: 'LOGIN_SUCCESS', payload: data.data })
      sessionStorage.setItem('currentUser', JSON.stringify(data.data))
      //   localStorage.setItem('currentUser', JSON.stringify(data.data))
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
  //   localStorage.removeItem('currentUser')
  return true
}

export async function refreshUser(dispatch: any, user: any) {
  //   dispatch({ type: 'REQUEST_LOGIN' })
  dispatch({ type: 'LOGIN_REFRESH', payload: user })
}
