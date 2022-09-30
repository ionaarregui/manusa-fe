import React, { useEffect } from 'react'
import { Button, Card, Container, Grid, Loading, Modal, Progress, Text, Row, Col } from '@nextui-org/react'
import { Redirect, useParams, useHistory } from 'react-router'
import { useGame } from '../hooks/useGame'
import styled from 'styled-components'
import { CopyDocumentIcon } from '../components/Icons/CopyDocumentIcon'

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const GamePage = () => {
  const { state, isCurrentGame, cancelGame } = useGame()

  const { id }: any = useParams()

  // console.log('ID PARAMS: ', id)

  const handlerCopyCode = () => {
    console.log(id)

    navigator.clipboard.writeText(id)
  }

  useEffect(() => {
    isCurrentGame()
  }, [])

  // return isCurrentGame() ? (
  return (
    <StyledPage>
      <Modal blur aria-labelledby="modal-title" open preventClose>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Nueva partida
            <Text b size={18}>
              Manussa
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Card isPressable isHoverable variant="bordered" onClick={handlerCopyCode}>
            <Card.Body>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text size={12}>{'CÓDIGO DE PARTIDA'}</Text>
                <Text size={18} b>
                  {state.currentGame}
                </Text>
                <CopyDocumentIcon size={18} fill="var(--nextui-colors-secondary)" />
              </Row>
            </Card.Body>
          </Card>

          <Text size={12}>{'ESPERANDO JUGADORES'}</Text>
          <Progress indeterminated value={50} color="secondary" status="secondary" />
        </Modal.Body>
        <Modal.Footer>
          <Button auto light color="secondary" onClick={cancelGame}>
            Cancelar partida
          </Button>
          <Button auto disabled color="secondary" onClick={() => console.log('iniciar partida')}>
            {state.loading ? <Loading type="points" color="currentColor" size="sm" /> : 'Iniciar Partida'}
          </Button>
        </Modal.Footer>
      </Modal>
      {/* <Container>
        <Card variant="bordered">
          <Card.Body>
            <Text>Código de partida: {state.currentGame}</Text>
            <Progress indeterminated value={50} color="secondary" status="secondary" />
          </Card.Body>
        </Card>
      </Container> */}
      {/* <Grid.Container xs={12} sm={6} gap={2}>
        <Grid>
          <Card variant="bordered">
            <Card.Body>
              <Text>Código de partida: {state.currentGame}</Text>
              <Progress indeterminated value={50} color="secondary" status="secondary" />
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container> */}
    </StyledPage>
  )
}
