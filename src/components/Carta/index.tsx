import React from 'react'
import { WrapperCarta } from './styled'

type Props = { valueCard: string; onClick: (x) => void; isActive: boolean }

const Carta = ({ valueCard, onClick, isActive }: Props) => {
  const handlerClick = () => onClick(valueCard)

  return <WrapperCarta value={valueCard} onClick={handlerClick} active={isActive} />
}

export default Carta
