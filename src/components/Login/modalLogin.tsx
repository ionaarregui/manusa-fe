import React, { useRef, useState } from 'react'
import { Modal, Input, Row, Checkbox, Button, Text, Loading, Spacer } from '@nextui-org/react'
// import useUser from '../../hooks/useUserX'
import useUser from '../../hooks/useUser'

export default function ModalLogin() {
  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>

  const { login, state } = useUser()

  const handleSubmit = async () => {
    const username: string = nameRef.current.value
    const password: string = passwordRef.current.value
    const resp = await login({ email: username.toLowerCase(), password })
  }

  const [visible, setVisible] = useState(false)
  const handlerShow = () => setVisible(true)
  const closeHandler = () => {
    setVisible(false)
  }

  const handleRecordar = () => {}

  return (
    <div>
      <Button auto color="gradient" onClick={handlerShow}>
        Entrar como MOGUL
      </Button>
      <Modal closeButton blur aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b size={18}>
              Manussa
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            aria-label="name"
            status={state.errorMessage ? 'error' : 'secondary'}
            color="secondary"
            size="lg"
            placeholder="Usuario MOGUL"
            ref={nameRef}
          />
          <Input.Password
            clearable
            bordered
            fullWidth
            aria-label="pass"
            status={state.errorMessage ? 'error' : 'secondary'}
            size="lg"
            placeholder="Password"
            type="password"
            ref={passwordRef}
          />
          {state.errorMessage && (
            <>
              <Text small color="error" css={{ textAlign: 'center' }}>
                {state.errorMessage}
              </Text>
              <Spacer y={1} />
            </>
          )}
          <Row justify="space-between">
            <Text size={14}>Olvidaste tú contraseña?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto light color="secondary" onClick={closeHandler}>
            Cerrar
          </Button>
          <Button auto color="secondary" onClick={handleSubmit}>
            {state.loading ? <Loading type="points" color="currentColor" size="sm" /> : 'Ingresar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
