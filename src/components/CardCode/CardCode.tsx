import React from 'react'
import { Card, Row, Text } from '@nextui-org/react'
import { CopyDocumentIcon } from '../Icons/CopyDocumentIcon'

const CardCode = ({ idGame }: { idGame: string }) => {
  const handlerCopyCode = () => {
    console.log(idGame)
    navigator.clipboard.writeText(idGame)
  }
  return (
    <Card
      isPressable
      isHoverable
      variant="bordered"
      onClick={handlerCopyCode}
      css={{
        bgBlur: '#00000026'
      }}
    >
      <Card.Body>
        <Row wrap="wrap" justify="space-between" align="center">
          <Text size={12}>{'CÓDIGO DE PARTIDA'}</Text>
          <Text size={18} b>
            {idGame}
          </Text>
          <CopyDocumentIcon size={18} fill="var(--nextui-colors-secondary)" />
        </Row>
      </Card.Body>
    </Card>
  )
}

export default CardCode
