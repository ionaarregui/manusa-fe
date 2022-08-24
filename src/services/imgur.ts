import { image } from './imagePrueba'

export function getToken(file) {
  var formdata = new FormData()
  formdata.append('refresh_token', '89f2ce0e027e09261d5d65be0fc9d9b9807b3f3c')
  formdata.append('client_id', '46364885880e796')
  formdata.append('client_secret', '0a8fcffafef984c4693f1c922157b49bff249511')
  formdata.append('grant_type', 'refresh_token')

  var requestOptions = {
    method: 'POST',
    body: formdata

    //   body: JSON.stringify(formdata),
  }

  fetch('https://api.imgur.com/oauth2/token', requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
}

export const sendImage = (file) => {
  //   // axios.post("https://api.imgur.com/3/upload", config);
  //   const data = new FormData()
  //   //   data.append('image', image)
  //   data.append('image', file)
  //   //   data.append('album', 'GNgmXoC')
  //   const config = {
  //     method: 'POST',
  //     headers: {
  //       //   Authorization: 'Bearer 7abe308ef7bf6cc89a3beb5454be25578f30461b'
  //       Authorization: 'Client-ID caa97b0c1d47ff0'
  //     },
  //     body: data
  //   }
  //   console.log('paso por service')

  //   fetch('https://api.imgur.com/3/upload', config)
  //     .then((response) => response.json())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log('error', error))
  var myHeaders = new Headers()
  myHeaders.append('Authorization', 'Client-ID 0afb7e3dcf88a75')
  myHeaders.append('Content-Type', 'multipart/form-data; boundary=Wp4TJWrhcOFdZEw7')
  myHeaders.append('Content-Length', '')
  myHeaders.append('Host', '')

  var formdata = new FormData()
  formdata.append('image', 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata
  }

  fetch('https://api.imgur.com/3/image', requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
}
