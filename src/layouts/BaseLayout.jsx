import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { Outlet, useNavigate } from "react-router-dom"

import useAuth from "../hooks/useAuth"

const BaseLayout = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My APP
            </Typography>
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        {<Outlet />}
      </main>
    </>
  )
}

export default BaseLayout