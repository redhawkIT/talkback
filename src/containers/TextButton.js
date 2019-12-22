import React, { useEffect, useState } from 'react'
// import PropTypes from "prop-types";

import IconButton from '@material-ui/core/IconButton'
import MessageIcon from '@material-ui/icons/Message';

const TextButton = ({ ...props }) => {
  return (
    <IconButton
      onClick={() => undefined}
      {...props}
    >
      <MessageIcon />
    </IconButton>
  )
}

TextButton.propTypes = {}
TextButton.defaultProps = {}

export default TextButton
