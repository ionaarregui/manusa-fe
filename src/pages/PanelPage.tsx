import styled from 'styled-components'
import { Row, Grid } from '@nextui-org/react'
import { useParams } from 'react-router'
import CardCode from '../components/CardCode/CardCode'
import { StyledPage } from './Styles'
import Carta from '../components/Carta'

const CARTAS = [
  'B1',
  'B2',
  'B3',
  'B4',
  'B5',
  'B6',
  'B7',
  'B10',
  'B11',
  'B12',
  'C1',
  'C2',
  'C3',
  'C4',
  'C5',
  'C6',
  'C7',
  'C10',
  'C11',
  'C12',
  'E1',
  'E2',
  'E3',
  'E4',
  'E5',
  'E6',
  'E7',
  'E10',
  'E11',
  'E12',
  'O1',
  'O2',
  'O3',
  'O4',
  'O5',
  'O6',
  'O7',
  'O10',
  'O11',
  'O12'
]

const WrapperMesa = styled(Grid)`
  /* box-sizing: border-box; */
  /* position: absolute; */
  width: 932px;
  height: 500px;
  background: radial-gradient(50% 50% at 50% 50%, #1f9032 0%, #1c812d 33.85%, #144e1e 100%);
  border-radius: 1358.5px;
`

const desordenar = (c) => {
  return c.sort(() => Math.random() - 0.5)
}

const PanelPage = () => {
  const { id }: any = useParams()

  return (
    <StyledPage>
      <Grid.Container gap={2} justify="center" css={{ h: '100vh' }}>
        <Row justify="center">
          <Grid xs={3}>
            <CardCode idGame={id} />
          </Grid>
        </Row>
        <WrapperMesa xs={10} justify="center">
          <Grid.Container justify="center">
            {desordenar(CARTAS).map((c, index) => {
              return <Carta key={index} valueCard={c} />
            })}
          </Grid.Container>
        </WrapperMesa>
      </Grid.Container>
    </StyledPage>
  )
}

export default PanelPage
