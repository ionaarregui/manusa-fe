// const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'
const ENDPOINT = 'https://manusa-api.herokuapp.com'

type LoginProps = {
  body: {
    username: string
    password: string
  }
}

export const loginService = ({ body }: LoginProps) => {
  return fetch(`${ENDPOINT}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(body)
  })
    .then((res) => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    })
    .then((res) => {
      return res
    })
}

type UserProps = {
  body: {
    username: string
    email: string
    avatar: string
  }
  idUser: string
}

export const editProfileService = ({ body, idUser }: UserProps) => {
  return fetch(`${ENDPOINT}/users/${idUser}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(body)
  })
    .then((res) => {
      if (!res.ok) throw new Error('Response is NOT ok')
      return res.json()
    })
    .then((res) => {
      return res
    })
}
