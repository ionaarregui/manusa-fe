import { useState, useEffect } from 'react'
import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

export const useAxios = (axiosParams) => {
  const initialConfig = axiosParams
  const [data, setData] = useState(undefined)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params)
      setData(result.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData(axiosParams)
  }, []) // execute once only

  const execute = async (params) => {
    fetchData({ ...initialConfig, ...params })
  }

  return { data, error, loading, execute }
}
