import React, { useEffect, useState } from 'react'
// import PropTypes from "prop-types";

import screenfull from 'screenfull'

import IconButton from '@material-ui/core/IconButton'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'

const FullscreenButton = () => {
  // fullscreen state must also be tracked by the app for compatibility
  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    screenfull.on('change', () => {
      setFullscreen(screenfull.isFullscreen)
    })
  })
  const handleClick = () => screenfull.isEnabled && screenfull.toggle()

  if (!screenfull.isEnabled) return null
  return (
    <IconButton
      aria-label='Fullscreen'
      onClick={handleClick}
      title='Fullscreen mode'
    >
      {fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
    </IconButton>
  )
}

FullscreenButton.propTypes = {}
FullscreenButton.defaultProps = {}

export default FullscreenButton
