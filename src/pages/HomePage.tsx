import React from 'react'
import styled from 'styled-components'
import { NavBar } from '../components/NavBar/NavBar'
import { Home } from '../components/Home/Home'

const StyledHome = styled.div`
  height: calc(100vh - 65px);
`

export const HomePage = () => {
  return (
    <NavBar>
      <Home />
    </NavBar>
  )
}
