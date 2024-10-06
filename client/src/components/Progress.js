import React from 'react'
import PropTypes from 'prop-types'

const Progress = ({percentage}) => {
  return (
    <div className="progress" role="progressbar" aria-label="Animated striped example">
        <div className="progress-bar progress-bar-striped bg-success progress-bar-animated" style={{width: `${percentage}%`}}>
        {percentage}%
        </div>
</div>
  )
}

Progress.propTypes = {
    percentage: PropTypes.string.isRequired
}

export default Progress