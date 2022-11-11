import styled from 'styled-components'

const positionsX = {
  B1: 0,
  B2: -4,
  B3: -5,
  B4: -6,
  B5: -7,
  B6: -8,
  B7: -9,
  B10: -1,
  B11: -2,
  B12: -3,
  C1: -10,
  C2: -14,
  C3: -15,
  C4: -16,
  C5: -17,
  C6: -18,
  C7: -19,
  C10: -11,
  C11: -12,
  C12: -13,
  E1: -20,
  E2: -24,
  E3: -25,
  E4: -26,
  E5: -27,
  E6: -28,
  E7: -29,
  E10: -21,
  E11: -22,
  E12: -23,
  O1: -30,
  O2: -34,
  O3: -35,
  O4: -36,
  O5: -37,
  O6: -38,
  O7: -39,
  O10: -31,
  O11: -32,
  O12: -33
}

export const WrapperCarta = styled.div<{ value: string }>`
  background-image: url(https://cdn2.cloudymedia.com/img/sprites/cartas-nuevas.jpg?v=101);
  width: 83px;
  height: 124px;
  border: solid 1px grey;
  border-radius: 6px;
  background-position-x: ${({ value }) => `${positionsX[value] * 83}px`};
`
