import { connect } from 'react-redux'
import { calculator } from '../actions'

const GetCalculator = (todos) => {
    return todos
};

const mapStateToProps = state => ({
    calculator: state.calculator
});

const mapDispatchToProps = dispatch => ({
    calculator: id => dispatch(calculator(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GetCalculator)