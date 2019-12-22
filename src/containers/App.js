import React from 'react'
import Body from './Body'
import FullscreenButton from './FullscreenButton'
import Dictaphone from './Dictaphone'
import ActionsBar from './ActionsBar'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import '../styles/App.css'

const theme = createMuiTheme()

function App () {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          <Body />
          <Dictaphone />
        </header>
      </div>
      <ActionsBar />
    </ThemeProvider>
  )
}

export default App
