import React from 'react'
// import PropTypes from "prop-types";

import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'

const AboutButton = ({ ...props }) => {
  return (
    <IconButton
      onClick={() => undefined}
      {...props}
    >
      <InfoIcon />
    </IconButton>
  )
}

AboutButton.propTypes = {}
AboutButton.defaultProps = {}

export default AboutButton
