import React from 'react'
// import PropTypes from "prop-types";

import Button from '@material-ui/core/Button'
import MicIcon from '@material-ui/icons/Mic'

const TalkButton = ({ ...props }) => {
  return (
    <Button
      onClick={() => undefined}
      {...props}
    >
      <MicIcon />
    </Button>
  )
}

TalkButton.propTypes = {}
TalkButton.defaultProps = {}

export default TalkButton
