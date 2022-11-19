import { createGameService } from '../../services/gameService'

export async function createGame(dispatch: any, gamePayload: { cantPlayers: string; withGuests: boolean }) {
  try {
    dispatch({ type: 'REQUEST_GAME' })
    const data = await createGameService({ body: gamePayload })
    console.log(data)
    if (data.active) {
      dispatch({ type: 'CREATE_GAME', payload: data.codigo })
      sessionStorage.setItem('currentGameCreator', JSON.stringify(data.codigo))
      return data.codigo
    }
    dispatch({ type: 'GAME_ERROR', error: data.data })
    return ''
  } catch (error) {
    dispatch({ type: 'GAME_ERROR', error: error })
    console.log(error)
  }
}

export async function recoverGame(dispatch: any, game: any) {
  dispatch({ type: 'REQUEST_GAME' })
  dispatch({ type: 'RECOVER_GAME', payload: game })
}

export async function closeGame(dispatch: any) {
  dispatch({ type: 'CLOSE_GAME' })
}

// export async function logoutUser(dispatch: any) {
//   dispatch({ type: 'LOGOUT' })
//   sessionStorage.removeItem('currentUser')
//   return true
// }

// export async function refreshUser(dispatch: any, user: any) {
//   dispatch({ type: 'LOGIN_REFRESH', payload: user })
// }

// export async function editUser(dispatch: any, data: any) {
//   try {
//     dispatch({ type: 'REQUEST_LOGIN' })
//     const response = await editProfileService({ body: data.body, idUser: data.idUser })

//     if (response.status === 'Ok') {
//       dispatch({ type: 'LOGIN_SUCCESS', payload: response.data })
//       sessionStorage.setItem('currentUser', JSON.stringify(response.data))
//       return true
//     }
//     dispatch({ type: 'LOGIN_ERROR', error: response.data })
//     return false
//   } catch (error) {
//     dispatch({ type: 'LOGIN_ERROR', error: error })
//     console.log(error)
//   }
// }
