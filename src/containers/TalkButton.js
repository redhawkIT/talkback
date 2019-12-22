import React from 'react'
// import PropTypes from "prop-types";

import IconButton from '@material-ui/core/IconButton'

import MicIcon from '@material-ui/icons/Mic';

const TalkButton = ({ ...props }) => {
  return (
    <IconButton
      onClick={() => undefined}
      {...props}
    >
      <MicIcon />
    </IconButton>
  )
}

TalkButton.propTypes = {}
TalkButton.defaultProps = {}

export default TalkButton
