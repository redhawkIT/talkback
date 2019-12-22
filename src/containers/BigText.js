import React from 'react'
import FitText from '@kennethormandy/react-fittext'
import PropTypes from 'prop-types'

// https://github.com/malte-wessel/react-textfit
// https://github.com/kennethormandy/react-fittext
// http://react-fittext.kennethormandy.com/?selectedKind=FitText&selectedStory=Welcome&full=0&addons=0&stories=1&panelRight=0

const BigText = ({ transcript }) => {
  return (
    <FitText>{transcript}</FitText>
  )
}

BigText.propTypes = {
  transcript: PropTypes.string
}

export default BigText
