import React from 'react'
import PropTypes from 'prop-types'
import Record from './Record'

const RecordList = ({ records }) => (
    <ul>
        {records.map(record => (
            <Record key={record.id} {...record} />
        ))}
    </ul>
)

RecordList.propTypes = {
    records: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default RecordList