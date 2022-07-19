let user = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser') || '').user : ''

export const initialState = {
  user: '' || user,
  loading: false,
  errorMessage: null
}

export const AuthReducer = (initialState: any, action: any) => {
  // console.log('Entra acá', { action })
  switch (action.type) {
    case 'REQUEST_LOGIN':
      return {
        ...initialState,
        loading: true
      }
    case 'LOGIN_SUCCESS':
      return {
        ...initialState,
        user: action.payload,
        loading: false
      }
    case 'LOGIN_REFRESH':
      return {
        ...initialState,
        user: action.payload,
        loading: false
      }
    case 'LOGOUT':
      return {
        ...initialState,
        user: ''
      }

    case 'LOGIN_ERROR':
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      }

    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}
