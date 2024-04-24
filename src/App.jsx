import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Drawer } from '@mui/material'
import RegexEval from './pages/RegexEval'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Start from './pages/Start'

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Routes>
        <Route
          path="/RegexEval"
          exact
          element={(<RegexEval />)}
        />
        <Route
          path="/"
          exact
          element={(<Start />)}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
