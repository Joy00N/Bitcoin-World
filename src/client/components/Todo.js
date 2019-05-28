import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({ onClick, completed, text, name }) => (
    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        {text}
        {name}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default Todo