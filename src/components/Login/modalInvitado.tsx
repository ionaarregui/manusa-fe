import React from 'react'
import { Modal, Input, Button, Text } from '@nextui-org/react'

export default function ModalInvitado() {
  const [visible, setVisible] = React.useState(false)
  const handler = () => setVisible(true)
  const closeHandler = () => {
    setVisible(false)
    console.log('closed')
  }
  return (
    <>
      <Button auto bordered color="gradient" onPress={handler}>
        Entrar como invitado
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
          <Input clearable bordered fullWidth color="secondary" size="lg" placeholder="Nombre de usuario" />
          <Input clearable bordered fullWidth color="secondary" size="lg" placeholder="Código de sala" />
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
    </>
  )
}
