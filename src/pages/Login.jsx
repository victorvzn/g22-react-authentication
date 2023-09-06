import { Container, Box, Paper, Avatar, Typography, TextField, Button } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useState } from 'react'

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    const input = event.target
    const name = input.name
    const value = input.value
    setForm({ ...form, [name]: value })
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
        <Box component="form">
          <TextField
            type="email"
            margin="normal"
            required
            fullWidth
            label="Email"
            name="email"
            value={form.email}
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