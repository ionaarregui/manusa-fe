import React, { useRef, useState } from 'react'
import { Modal, Input, Row, Checkbox, Button, Text, Loading, Spacer } from '@nextui-org/react'
import useUser from '../../hooks/useUser'

export default function ModalLogin() {
  const nameRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>

  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [, navigate] = useLocation()
  // const {isLoginLoading, hasLoginError, login, isLogged} = useUser()
  // const { isLoginLoading, hasLoginError, login } = useUser()
  const { login, isLoginLoading, hasLoginError } = useUser()

  // useEffect(() => {
  //   if (isLogged) {
  //     navigate('/')
  //     onLogin && onLogin()
  //   }
  // }, [isLogged, navigate, onLogin])

  const handleSubmit = async () => {
    const username: string = nameRef.current.value
    const password: string = passwordRef.current.value
    const resp = await login({ username, password })
    console.log(resp)
  }

  const [visible, setVisible] = useState(false)
  const handlerShow = () => setVisible(true)
  const closeHandler = () => {
    setVisible(false)
  }

  const handleRecordar = () => {}

  return (
    <div>
      <Button auto color="gradient" onPress={handlerShow}>
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
            status={hasLoginError ? 'error' : 'secondary'}
            color="secondary"
            size="lg"
            placeholder="Usuario MOGUL"
            ref={nameRef}
          />
          <Input
            clearable
            bordered
            fullWidth
            aria-label="pass"
            status={hasLoginError ? 'error' : 'secondary'}
            size="lg"
            placeholder="Password"
            type="password"
            ref={passwordRef}
          />
          {hasLoginError && (
            <>
              <Text small color="error" css={{ textAlign: 'center' }}>
                Email y/o contraseña inválidos
              </Text>
              <Spacer y={1} />
            </>
          )}
          <Row justify="space-between">
            <Checkbox onChange={handleRecordar}>
              <Text size={14}>Recordarme!</Text>
            </Checkbox>
            <Text size={14}>Olvidaste tú contraseña?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button auto light color="secondary" onPress={closeHandler}>
            Cerrar
          </Button>
          <Button auto color="secondary" onPress={handleSubmit}>
            {isLoginLoading ? <Loading type="points" color="currentColor" size="sm" /> : 'Ingresar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
