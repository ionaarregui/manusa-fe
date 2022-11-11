import React, { useState } from 'react'
import { Button, Checkbox, Grid, Input, Loading, Modal, Radio, Text } from '@nextui-org/react'
import { useGame } from '../../hooks/useGame'

export const ModalConfigGame = () => {
  const { state, createGameAndConecct } = useGame()

  const [invited, setInvited] = useState(false)
  const [players, setPlayers] = useState('4')
  const [loading, setLoading] = useState(false)

  const [visible, setVisible] = useState(false)
  const handlerShow = () => setVisible(true)
  const closeHandler = () => {
    setVisible(false)
  }

  const handleSubmit = async () => {
    // setLoading(true)
    await createGameAndConecct({ cantPlayers: players, withGuests: invited })
  }

  return (
    <>
      <Button auto bordered color="gradient" onClick={handlerShow}>
        CREAR PARTIDA
      </Button>
      <Modal closeButton blur aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Nueva partida
            <Text b size={18}>
              Manussa
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          {state.loading ? (
            <Loading type="points" color="secondary" textColor="secondary">
              CREANDO PARTIDA
            </Loading>
          ) : (
            <Grid.Container gap={2} justify="center" alignItems="center">
              <Grid xs={12} justify="center">
                <Checkbox
                  color="secondary"
                  labelColor="secondary"
                  isRounded={true}
                  defaultSelected={invited}
                  size="sm"
                  onChange={setInvited}
                >
                  {'Permitir invitados'}
                </Checkbox>
              </Grid>
              <Grid xs={12} justify="center">
                <Radio.Group
                  orientation="horizontal"
                  label="Cantidad de jugadores"
                  value={players}
                  onChange={setPlayers}
                >
                  <Radio value="4" color="secondary" labelColor="secondary">
                    4
                  </Radio>
                  <Radio value="5" color="secondary" labelColor="secondary">
                    5
                  </Radio>
                  <Radio value="6" color="secondary" labelColor="secondary">
                    6
                  </Radio>
                </Radio.Group>
              </Grid>
            </Grid.Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button auto light color="secondary" onClick={closeHandler}>
            Cerrar
          </Button>
          <Button auto color="secondary" onClick={handleSubmit}>
            {state.loading ? <Loading type="points" color="currentColor" size="sm" /> : 'Iniciar'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
