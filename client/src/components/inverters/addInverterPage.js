import React from 'react';
import { connect } from 'react-redux';
import InverterForm from './InverterForm';
import { addInverter } from '../../store/actions/inverterAction';

const AddInverterPage = (props) => (
  <div>
    <h1>Add Inverter</h1>
    <InverterForm
      onSubmit={(inverter) => {
        props.dispatch(addInverter(inverter));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddInverterPage);
