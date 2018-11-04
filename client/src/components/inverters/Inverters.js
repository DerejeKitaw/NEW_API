import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import InverterItem from './InverterItem';
import { getInverters } from '../../store/actions/inverterActions';

class Inverters extends Component {
  componentDidMount() {
    this.props.getInverters();
  }

  render() {
    const { inverters, loading } = this.props.inverters;
    let inverterItems;

    if (inverters === null || loading) {
      inverterItems = <Spinner />;
    } else {
      if (inverters.length > 0) {
        inverterItems = inverters.map(inverter => (
          <InverterItem key={inverter._id} inverter={inverter} />
        ));
      } else {
        //inverterItems = <th>No inverters found...</th>;
      }
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col" />
            <th scope="col" />
            <th scope="col">Inverter Manufacturer</th>
            <th scope="col">Inverter Type</th>
            <th scope="col">Max Power Output</th>
          </tr>
        </thead>
        {inverterItems}
      </table>
      // <div className="inverters">
      //   <div className="container">
      //     <div className="row">
      //       <div className="col-md-12">
      //         <h1 className="display-4 text-center">Developer Inverters</h1>
      //         <p className="lead text-center">
      //           Browse and connect with developers
      //         </p>
      //         {inverterItems}
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

Inverters.propTypes = {
  getInverters: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  console.log('state from Inverter component', state);
  return {
    inverters: state.inverters
  };
};
//   ({
//   inverters: state.inverters
// });

export default connect(
  mapStateToProps,
  { getInverters }
)(Inverters);
