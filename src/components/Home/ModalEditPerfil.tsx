// import React from 'react'
import { PhotoCamera } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { Button, Input, Modal, Text } from '@nextui-org/react'
import { useState } from 'react'
import useUser from '../../hooks/useUser'
import { InputImage } from './InputImage'

export const ModalEditPerfil = ({ show, closeHandler }) => {
  const { state } = useUser()
  const [avatar, setAvatar] = useState(state.user?.avatar)
  const [actualAvatar, setActualAvatar] = useState('')

  const handlerAvatar = (value) => {
    console.log('QUE CARAJO LLEGA', value)
    setActualAvatar(value)
  }
  //   console.log(state)

  return (
    <Modal closeButton blur aria-labelledby="modal-title" open={show} onClose={closeHandler}>
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Edit perfil
          <Text b size={18}>
            Manussa
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <InputImage value={avatar} onChange={handlerAvatar} actualAvatar={actualAvatar} />

        {/* <Input clearable bordered fullWidth color="secondary" size="lg" placeholder="Nombre de usuario" />
        <Input clearable bordered fullWidth color="secondary" size="lg" placeholder="Código de sala" /> */}
      </Modal.Body>
      <Modal.Footer>
        <Button auto light color="secondary" onPress={closeHandler}>
          Cerrar
        </Button>
        <Button auto color="secondary" onPress={closeHandler}>
          Ingresar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
