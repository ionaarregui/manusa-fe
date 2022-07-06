// const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'
const ENDPOINT = 'https://manusa-api.herokuapp.com'

type Props = {
  username: string
  password: string
}

export default function login({ username, password }: Props) {
  return fetch(`${ENDPOINT}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ username, password })
  })
    .then((res) => {
      if (!res.ok) throw new Error('Response is NOT ok')
      console.log('ACA NO')
      return res.json()
    })
    .then((res) => {
      const { jwt } = res
      console.log(res)
      return jwt
    })
}
