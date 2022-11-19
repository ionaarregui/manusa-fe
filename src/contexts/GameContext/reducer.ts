// const gameCode = localStorage.getItem('currentGame') ? JSON.parse(localStorage.getItem('currentGame') || '') : ''

const recoverGame = () => {
  const currentGame = localStorage.getItem('currentGame')
  console.log('PARA POR ACA ', currentGame)
  return currentGame ? JSON.parse(currentGame) : ''
}

export const initialState = {
  currentGame: recoverGame(),
  loading: false,
  errorMessage: null
}

export const GameReducer = (initialState: any, action: any) => {
  switch (action.type) {
    case 'REQUEST_GAME':
      return {
        ...initialState,
        loading: true
      }
    case 'CREATE_GAME':
      return {
        ...initialState,
        currentGame: action.payload,
        currentGameCreator: true,
        loading: false
      }
    case 'RECOVER_GAME':
      return {
        ...initialState,
        currentGame: action.payload,
        loading: false
      }
    case 'CLOSE_GAME':
      return {
        ...initialState,
        currentGame: ''
      }

    case 'GAME_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
