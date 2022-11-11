import React, { useRef } from 'react'
import { Button, Card, Input, Row, Text } from '@nextui-org/react'
import styled from 'styled-components'

const messages = [
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  },
  {
    user: 'juan',
    message: 'Hola como andan?'
  }
]

const ChatMessages = () => {
  const msg = useRef(null)

  const handlerSend = () => {
    console.log({ msg: msg?.current?.value })
  }
  return (
    <Card>
      <Card.Header>Chat</Card.Header>
      <Card.Body css={{ pt: 0, mh: '15rem' }}>
        {messages.map((m, index) => {
          return (
            <div key={index}>
              <Text size={14} b>
                {m.user}
              </Text>
              <Text size={14} color={'#b2babf'}>
                {m.message}
              </Text>
            </div>
          )
        })}
      </Card.Body>
      <Card.Divider />
      <Card.Footer>
        <Row align="center">
          <Input aria-label="change" ref={msg} clearable placeholder="Escribir un mensaje..." css={{ w: '100%' }} />
          <Button aria-label="send" size="xs" color="secondary" disabled={false} onPress={handlerSend}>
            Enviar
          </Button>
        </Row>
      </Card.Footer>
    </Card>
  )
}

export default ChatMessages
