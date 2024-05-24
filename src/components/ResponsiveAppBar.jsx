import * as React from 'react'
import {
  AppBar, Toolbar, Container, Button,
} from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import { Link } from 'react-router-dom'
import DropdownButton from './dropdownButton'

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
            [['https://www.linkedin.com/in/diegoalonzomedinilladiggspapu', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Ficon%2Flinkedin-black-logo%2F147114&psig=AOvVaw1XNYfWdIib3_5edIv-6AqN&ust=1716622575072000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJim-sjjpYYDFQAAAAAdAAAAABAI'],
              ['https://github.com/DiggsPapu', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Dgithub&psig=AOvVaw2-jMdrenUNBziwGuFicX5r&ust=1716622604616000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPihwdjjpYYDFQAAAAAdAAAAABAN'],
              [`mailto:diego.alonzom@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.micoope.com.gt%2Fproducto-financiero%2Fseguros%2F%3Fo%3Dmail-icon-in-black-circle-envelope-symbol-vector-image-nn-MY73a0hW&psig=AOvVaw1DmYrXTMM7GEAZSYyqi59Z&ust=1716622633242000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCICWq-XjpYYDFQAAAAAdAAAAABAE'],
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
