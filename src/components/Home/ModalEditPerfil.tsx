import React, { useRef, useState } from 'react'
// import React from 'react'
import { Button, Input, Modal, Text, Loading } from '@nextui-org/react'
import useUser from '../../hooks/useUser'
import { InputImage } from './InputImage'

const validMail = (mail: string) => {
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  return emailRegex.test(mail)
}

export const ModalEditPerfil = ({ show, closeHandler }) => {
  const { state, editProfile } = useUser()
  const [avatar, setAvatar] = useState(state.user?.avatar)
  const [userName, setUserName] = useState({ value: state.user?.username, error: false })
  const [name, setName] = useState({ value: state.user?.name, error: false })

  // const [actualAvatar, setActualAvatar] = useState('')

  const handlerAvatar = (value) => {
    setAvatar(value)
  }

  const handlerSubmit = async () => {
    const isValidUser = userName.value.trim().length > 0
    const isValidName = name.value.trim().length > 0

    if (!isValidName || !isValidUser) {
      setUserName({ ...userName, error: !isValidUser })
      setName({ ...name, error: !isValidName })
      return
    }

    const edit = await editProfile({ user: userName.value, name: name.value, avatar, idUser: state.user?.id })
    if (edit) closeHandler()
  }

  return (
    <Modal closeButton blur aria-labelledby="modal-title" open={show} onClose={closeHandler}>
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Edit perfil
          <Text b size={18}>
            Mogul
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <InputImage value={avatar} onChange={handlerAvatar} />
        <Input
          clearable
          bordered
          fullWidth
          color="secondary"
          aria-label="username"
          status={userName.error ? 'error' : 'secondary'}
          size="lg"
          placeholder="Usuario MOGUL"
          value={userName.value}
          onChange={(e) => setUserName({ value: e.target.value, error: false })}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="secondary"
          aria-label="name"
          status={name.error ? 'error' : 'secondary'}
          size="lg"
          placeholder="Nombre"
          value={name.value}
          onChange={(e) => setName({ value: e.target.value, error: false })}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto light color="secondary" onClick={closeHandler}>
          Cancelar
        </Button>
        <Button auto color="secondary" onClick={handlerSubmit}>
          {state.loading ? <Loading type="points" color="currentColor" size="sm" /> : 'Guardar'}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
