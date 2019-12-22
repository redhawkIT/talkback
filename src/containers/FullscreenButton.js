import React from 'react'
// import PropTypes from "prop-types";

import screenfull from 'screenfull'

import IconButton from '@material-ui/core/IconButton'
import FullscreenIcon from '@material-ui/icons/Fullscreen'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'

class FullscreenButton extends React.Component {
  // state = {
  //   fullscreen: false
  // };
  constructor (props) {
    super(props)
    this.state = { fullscreen: false }
  }

  componentDidMount () {
    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        this.setState({
          fullscreen: screenfull.isFullscreen
        })
      })
    }
  }

  handleClick = () => {
    if (screenfull.isEnabled) {
      screenfull.toggle()
    }
  }

  render () {
    return (
      <div>
        FOOBAR
        {screenfull.isEnabled && (
          <IconButton
            aria-label='Fullscreen'
            onClick={this.handleClick}
            title='Fullscreen mode'
          >
            {this.state.fullscreen ? <FullscreenExitIcon /> : <FullscreenIcon />}
          </IconButton>
        )}
      </div>
    )
  }
}

FullscreenButton.propTypes = {}
FullscreenButton.defaultProps = {}

export default FullscreenButton
