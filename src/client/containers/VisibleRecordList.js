import { connect } from 'react-redux'
import RecordList from '../components/RecordList'

const getVisibleRecords = (records) => {
    return records
}

const mapStateToProps = state => ({
    records: getVisibleRecords(state.records)
})

export default connect(
    mapStateToProps
)(RecordList)