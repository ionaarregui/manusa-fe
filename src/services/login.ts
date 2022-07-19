// const ENDPOINT = 'https://deno-api-users-login.herokuapp.com'
const ENDPOINT = 'https://manusa-api.herokuapp.com'

type Props = {
  username: string
  password: string
}

/** ESTO NO SE USA */
export default function login({ username, password }: Props) {
  return fetch(`${ENDPOINT}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({ email: username, password })
  })
    .then((res) => {
      if (!res.ok) throw new Error('Response is NOT ok')
      // console.log('res primer then', res)
      return res.json()
    })
    .then((res) => {
      // const { jwt } = res
      // if(res.status === 'Ok')
      console.log('res segundo then', res)
      return res
    })
}
