import * as React from 'react'
import {
  AppBar, Toolbar, Container, Button,
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import { Link } from 'react-router-dom'

function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Link to="/">
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Link>
          <Link to="/RegexEval">
            <Button color="warning">RegexEval</Button>
          </Link>
          <Link to="/YalexProcessing">
            <Button color="warning">YalexProcessing</Button>
          </Link>
          <Link to="/YaparProcessing">
            <Button color="warning">YaparProcessing</Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
