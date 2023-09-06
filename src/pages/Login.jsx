import { Container, Box, Paper, Avatar, Typography, TextField, Button } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useState } from 'react'
import { login } from '../services/auth'

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (event) => {
    const input = event.target
    const name = input.name
    const value = input.value
    setForm({ ...form, [name]: value })
  }

  const handleLogin = async (event) => {
    event.preventDefault(); // Evitamos que la página se recargue
    
    console.log('estoy enviando la información...')
    
    const res = await login({
      username: form.username,
      password: form.password
    })
    
    console.log(res)

    localStorage.setItem('auth', JSON.stringify(res))
  }

  return (
    <Container maxWidth="xs">
      <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10, px: 3, py: 5 }}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>
          Login
        </Typography>
        {JSON.stringify(form)}
        <Box component="form" onSubmit={handleLogin}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Username"
            name="username"
            value={form.username}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{ mt: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  )
}

export default Login