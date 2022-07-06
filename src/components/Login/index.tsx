import React from 'react'
// import { Input, TextField } from '@mui/material'
// import { Grid } from '@material-ui/core'
import { Box, Stack } from '@mui/material'

// import { Button, Input } from '@nextui-org/react'
// import { Grid } from '@nextui-org/react'
// import { Input } from '@mui/material'
// import {useLocation} from "wouter"
// import useUser from '../../hooks/useUser'
import ModalInvitado from './modalInvitado'
import ModalLogin from './modalLogin'
import { Text } from '@nextui-org/react'
// import { useEffect } from "react";
// import './Login.css'

export default function Login({}) {
  // const [username, setUsername] = useState('')
  // const [password, setPassword] = useState('')
  // const [, navigate] = useLocation()
  // const {isLoginLoading, hasLoginError, login, isLogged} = useUser()
  // const { isLoginLoading, hasLoginError, login } = useUser()

  // useEffect(() => {
  //   if (isLogged) {
  //     navigate('/')
  //     onLogin && onLogin()
  //   }
  // }, [isLogged, navigate, onLogin])

  // const handleSubmit = (e: any) => {
  //   e.preventDefault()
  //   login({ username, password })
  // }

  return (
    // <Box md={{ display: 'flex', aligItems: 'center', justifyContent: 'center' }}>
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Stack direction="column" spacing={{ xs: 1, sm: 2, md: 4 }} alignItems="center">
        <Text id="modal-title" size={18}>
          Welcome to
          <Text b size={18}>
            Manussa
          </Text>
        </Text>
        <ModalLogin />
        <ModalInvitado />
      </Stack>
    </Box>
  )
}
