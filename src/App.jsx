import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import RegexEval from './pages/RegexEval'
import ResponsiveAppBar from './components/ResponsiveAppBar'
import Start from './pages/Start'
import YalexProcessing from './pages/YalexProcessing'
import YaparProcessing from './pages/YaparProcessing'

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
        <Route
          path="/YalexProcessing"
          exact
          element={(<YalexProcessing />)}
        />
        <Route
          path="/YaparProcessing"
          exact
          element={(<YaparProcessing />)}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
