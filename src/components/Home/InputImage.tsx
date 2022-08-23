import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Avatar, Loading } from '@nextui-org/react'
import { Button } from '@mui/material'
import styled from 'styled-components'

const WrapperInput = styled.div`
  > * {
    width: 100%;
  }

  label {
    color: var(--nextui-colors-secondary);
    border-color: var(--nextui-colors-secondary);
  }
`

// type TypeBase = string | ArrayBuffer
// type TypeAvatar = {
//   file: any
//   base64URL: any
// }
// const initialstate: TypeAvatar = {
//   file: null,
//   base64URL: ''
// }
export const InputImage = ({ value, onChange }) => {
  const [selectedFile, setSelectedFile] = useState(null)
  const [preview, setPreview] = useState(null)

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined)
      return
    }

    const objectUrl = URL.createObjectURL(selectedFile)
    setPreview(objectUrl)

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length !== 0) {
      setSelectedFile(e.target.files[0])
      onChange(e.target.files[0])
    }
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)
      fileReader.onload = () => {
        resolve(fileReader.result)
      }
      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  // const base64 = await convertToBase64(file)

  return (
    <WrapperInput>
      {/* <Avatar squared src="https://i.pravatar.cc/150?u=a042581f4e29026024d" size="lg" /> */}
      <Button
        variant="text"
        color="secondary"
        component="label"
        // startIcon={<Avatar squared src={value} size="lg" />}
        startIcon={
          <Avatar
            squared
            // src={imgValue?.current?.value ? URL.createObjectURL(imgValue?.current?.value) : value}
            src={selectedFile ? preview : value}
            size="lg"
          />
        }
      >
        {/* {selectedFile &&  <img src={preview} /> } */}
        Cambiar avatar mogul
        {/* {loading ? <Loading color="currentColor" size="sm" /> : 'Cambiar avatar mogul'} */}
        <input onChange={onSelectFile} hidden accept="image/*" multiple type="file" />
      </Button>
    </WrapperInput>
  )
}

//   const convert =  (e) => {
//     // check max. file size is not exceeded
//     // size is in bytes
//     if (e.target.files[0].size > 2000000) {
//       console.log('File too large')
//       return null
//     }
//     const reader = new FileReader()
//     reader.readAsDataURL(e.target.files[0])

//     reader.onload = () => {
//       console.log('Result', reader.result) //base64encoded string
//       return reader.result
//     }
//     reader.onerror = (error) => {
//       console.log('Error: ', error)
//     }
//   }

//   const handlerChange = async (e) => {
//     const res = await convert(e)
//     console.log('FIIIIN', res)

//     onChange(res)
//   }

//   const getBase64 = (file) => {
//     return new Promise((resolve) => {
//       let fileInfo
//       let baseURL: TypeBase = ''
//       // Make new FileReader
//       const reader = new FileReader()

//       // Convert the file to base64 text
//       reader.readAsDataURL(file)

//       // on reader load somthing...
//       reader.onload = () => {
//         // Make a fileInfo Object
//         console.log('Called', reader)
//         baseURL = reader.result
//         console.log({ baseURL })
//         resolve(baseURL)
//         console.log('FIN')
//       }
//       console.log({ fileInfo })
//     })
//   }

//   const handlerChange = async (e) => {
//     console.log('este', e.target.files[0])
//     let { file } = avatar

//     file = e.target.files[0]

//     const queTrae = await getBase64(file)
//       .then((result) => {
//         file['base64'] = result
//         console.log('File Is', file)
//         setAvatar({
//           base64URL: result,
//           file
//         })
//       })
//       .catch((err) => {
//         console.log(err)
//       })

//     console.log({ queTrae })

//     setAvatar({
//       ...avatar,
//       file: e.target.files[0]
//     })

//     onChange(avatar)
//   }
