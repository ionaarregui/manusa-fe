// const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'
const ENDPOINT = 'https://manusa-api.herokuapp.com'

type Props = {
  body: {
    username: string
    password: string
  }
}

export default function loginService({ body }: Props) {
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
