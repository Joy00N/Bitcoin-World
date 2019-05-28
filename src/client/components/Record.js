import React from 'react'
import PropTypes from 'prop-types'

const Record = ({ onClick, completed, text, name }) => (
    <li>
        {text}
        {name}
    </li>
)

Record.propTypes = {
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Record