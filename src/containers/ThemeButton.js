import React, { useEffect, useState } from 'react'
// import PropTypes from "prop-types";

import IconButton from '@material-ui/core/IconButton'

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects'

const ThemeButton = ({ ...props }) => {
  return (
    <IconButton
      onClick={() => undefined}
      {...props}
    >
      <EmojiObjectsIcon />
    </IconButton>
  )
}

ThemeButton.propTypes = {}
ThemeButton.defaultProps = {}

export default ThemeButton
