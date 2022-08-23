import React, { useRef, useState } from 'react'
// import React from 'react'
import { Button, Input, Modal, Text } from '@nextui-org/react'
import useUser from '../../hooks/useUser'
import { InputImage } from './InputImage'

const validMail = (mail: string) => {
  const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
  return emailRegex.test(mail)
}

export const ModalEditPerfil = ({ show, closeHandler }) => {
  const { state, editProfile } = useUser()
  // const [errors, setErrors] = useState({ user: false, email: false, lacajeta: false })
  const [avatar, setAvatar] = useState(state.user?.avatar)
  const [userName, setUserName] = useState({ value: state.user?.name, error: false })
  const [mail, setMail] = useState({ value: state.user?.email, error: false })

  // const [actualAvatar, setActualAvatar] = useState('')

  const handlerAvatar = (value) => {
    // console.log('QUE CARAJO LLEGA', value)
    setAvatar(value)
  }

  const handlerSubmit = () => {
    const isValidUser = userName.value.trim().length > 0
    const isValidMail = validMail(mail.value)

    if (!isValidMail || !isValidUser) {
      setUserName({ ...userName, error: !isValidUser })
      setMail({ ...mail, error: !isValidMail })
      return
    }

    editProfile({ user: userName.value, mail: mail.value, avatar })
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
          aria-label="mail"
          status={mail.error ? 'error' : 'secondary'}
          size="lg"
          placeholder="Mail MOGUL"
          value={mail.value}
          onChange={(e) => setMail({ value: e.target.value, error: false })}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto light color="secondary" onPress={closeHandler}>
          Cancelar
        </Button>
        <Button auto color="secondary" onPress={handlerSubmit}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
