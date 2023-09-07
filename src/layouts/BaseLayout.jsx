import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { Outlet } from "react-router-dom"

const BaseLayout = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              My APP
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default BaseLayout