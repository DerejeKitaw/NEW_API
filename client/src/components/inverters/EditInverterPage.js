import React from 'react';
import { connect } from 'react-redux';
import InverterForm from './InverterForm';
import { editInverter, removeInverter } from '../../store/actions/inverterActions';
import { getInverters } from '../../store/actions/inverterActions';


const EditInverterPage = (props) => {
  return (
    <div>
      <InverterForm
        inverter={props.inverter}
        onSubmit={(inverter) => {
          props.dispatch(editInverter(props.inverter.id, inverter));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeInverter({ id: props.inverter.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  // console.log(state);
  return {
    // inverter: state.inverters.inverters
    inverter: state.inverters.inverters.find((inverter) => inverter._id === props.match.params.id)
  };
};
// const mapStateToProps = (state, props) => ({
//   inverters: state.inverters.inverters
// });

export default connect(mapStateToProps)(EditInverterPage);
