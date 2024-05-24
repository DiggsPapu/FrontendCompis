import * as React from 'react'
import {
  AppBar, Toolbar, Container, Button,
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import { Link } from 'react-router-dom'
import DropdownButton from './dropdownButton'
import Linkedin from '../assets/linkedin.avif'
import mail from '../assets/mail.png'
import github from '../assets/github.svg'

function ResponsiveAppBar() {
  const subject = 'Hi Diego'
  const body = 'I wanted to contact you for...'
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Link to="/FrontendCompis">
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          </Link>
          <Link to="/FrontendCompis/RegexEval">
            <Button color="warning">RegexEval</Button>
          </Link>
          <Link to="/FrontendCompis/YalexProcessing">
            <Button color="warning">YalexProcessing</Button>
          </Link>
          <Link to="/FrontendCompis/YaparProcessing">
            <Button color="warning">YaparProcessing</Button>
          </Link>
          <div style={{
            marginRight: '0',
            width: '20%',
          }}
          >
            <DropdownButton
              title="CONTACT ME"
              options={
            [['https://www.linkedin.com/in/diegoalonzomedinilladiggspapu', Linkedin],
              ['https://github.com/DiggsPapu', github],
              [`mailto:diego.alonzom@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, mail],
            ]
}
              color="white"
              backgroundColor="transparent"
            />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
