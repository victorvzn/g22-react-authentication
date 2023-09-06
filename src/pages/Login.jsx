import { Container, Box, Paper, Avatar, Typography, TextField, Button } from '@mui/material'

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'

const Login = () => {
  return (
    <Container maxWidth="xs">
      <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 10, px: 3, py: 5 }}>
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>
          Login
        </Typography>
        <Box component="form">
          <TextField
            type="email"
            margin="normal"
            required
            fullWidth
            label="Email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
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