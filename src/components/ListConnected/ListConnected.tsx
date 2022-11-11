import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { User } from '@nextui-org/react'

const Wrapper = styled.ul`
  padding: 0;
  overflow-y: 'auto';
  margin: 0;
  list-style: 'none';
`

const ListConnected = ({ users }) => {
  return (
    <Wrapper>
      {users.map((user) => {
        return (
          <li>
            <User src={user.avatar} name={user.username} description={user.name} squared />
          </li>
        )
      })}
    </Wrapper>
  )
}

export default ListConnected
