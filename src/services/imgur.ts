export const sendImage = async (file) => {
  const url = 'https://api.imgur.com/3/image'
  const formdata = new FormData()
  formdata.append('image', file)

  try {
    const request = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Client-ID 0afb7e3dcf88a75'
      },
      body: formdata
    })

    const response = await request.json()
    return response.data?.link
  } catch (e) {
    throw new Error(e)
  }
}
