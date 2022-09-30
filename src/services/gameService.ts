import { config } from './config'
// const ENDPOINT = 'https://manusa-be-production.up.railway.app'

const ENDPOINT = config.api

export const createGameService = ({ body }: { body: { cantPlayers: string; withGuests: boolean } }) => {
  return fetch(`${ENDPOINT}/partidas`, {
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
