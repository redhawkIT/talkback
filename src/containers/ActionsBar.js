import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import FullscreenButton from './FullscreenButton'
import ThemeButton from './ThemeButton'
import TalkButton from './TalkButton'
import TextButton from './TextButton'

import ButtonGroup from '@material-ui/core/ButtonGroup'
import AboutButton from './AboutButton'

const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0
  },
  grow: {
    flexGrow: 1
  }
  // fabButton: {
  //   position: 'absolute',
  //   zIndex: 1,
  //   top: -30,
  //   // left: 0,
  //   // right: 0,
  //   right: 30,
  //   margin: '0 auto'
  // },
}))

function ActionsBar () {
  const classes = useStyles()

  return (
    <AppBar
      className={classes.appBar}
      position='fixed'
      color='primary'
      title='Talkback'
    >
      <Toolbar>
        <FullscreenButton
          edge='start'
          color='inherit'
          title='Fullscreen'
          aria-label='fullscreen'
        />
        <ThemeButton
          edge='start'
          color='inherit'
          title='Invert Colors'
          aria-label='invert colors'
        />
        <AboutButton
          edge='start'
          color='inherit'
          title='Invert Colors'
          aria-label='invert colors'
        />
        <div className={classes.grow} />
        <ButtonGroup variant='contained' color='secondary' size='large'>
          <TalkButton
            title='Talk'
            aria-label='speech to text'
          />
          <TextButton
            title='Text'
            aria-label='text'
          />
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  )
}

export default ActionsBar
