import React, { useState } from 'react'
import { Button, Checkbox, Grid, Input, Loading, Modal, Radio, Text } from '@nextui-org/react'
import { useGame } from '../../hooks/useGame'

export const ModalJoinGame = () => {
  const { state, joinGame } = useGame()
  const [visible, setVisible] = useState(false)

  const [codeGame, setCodeGame] = useState('')
  const [error, setError] = useState('')

  const handlerShow = () => setVisible(true)
  const closeHandler = () => {
    setVisible(false)
  }

  // chequear que esté ok la partida
  const handleSubmit = async () => {
    if (codeGame.length === 8) {
      joinGame(codeGame)
    } else {
      setError('Código de partida inválido')
    }
  }

  return (
    <>
      <Button auto bordered size={'xs'} color="gradient" onClick={handlerShow}>
        CON CÓDIGO
      </Button>

      <Modal closeButton blur aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Unirse a Partida
            <Text b size={18}>
              Manussa
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          {state.loading ? (
            <Loading type="points" color="secondary" textColor="secondary">
              UNIENDO A PARTIDA
            </Loading>
          ) : (
            <Grid.Container gap={2} justify="center" alignItems="center">
              <Grid xs={12} justify="center">
                <Input
                  clearable
                  bordered
                  fullWidth
                  color="secondary"
                  aria-label="Código de la partida"
                  size="lg"
                  placeholder="Código de la partida"
                  value={codeGame}
                  onChange={(e) => setCodeGame(e.target.value)}
                  status={error ? 'error' : 'secondary'}
                  helperText={error ? error : ''}
                />
              </Grid>
            </Grid.Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button auto light color="secondary" onClick={closeHandler}>
            Cerrar
          </Button>
          <Button auto color="secondary" onClick={handleSubmit}>
            {state.loading ? <Loading type="points" color="currentColor" size="sm" /> : 'Unirse'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
