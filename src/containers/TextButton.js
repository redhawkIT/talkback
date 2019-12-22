import React, { useEffect, useState } from 'react'
// import PropTypes from "prop-types";

import Button from '@material-ui/core/Button'
import MessageIcon from '@material-ui/icons/Message'

const TextButton = ({ ...props }) => {
  return (
    <Button
      onClick={() => undefined}
      {...props}
    >
      <MessageIcon />
    </Button>
  )
}

TextButton.propTypes = {}
TextButton.defaultProps = {}

export default TextButton
