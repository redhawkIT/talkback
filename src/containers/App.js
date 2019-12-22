import React from 'react'
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition'

// import Body from './Body'
import BigText from './BigText'
import ActionsBar from './ActionsBar'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import '../styles/App.css'

const theme = createMuiTheme()

function App ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition
}) {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <header className='App-header'>
          {/* <Body /> */}
          <BigText transcript={transcript} />
        </header>
      </div>
      <ActionsBar
        talkEnabled={browserSupportsSpeechRecognition}
        resetTranscript={resetTranscript}
      />
    </ThemeProvider>
  )
}

App.propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

export default SpeechRecognition(App)
