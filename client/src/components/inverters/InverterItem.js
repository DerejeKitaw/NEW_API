import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../utils/is-empty';

class InverterItem extends Component {
  render() {
    const { inverter } = this.props;

    return (
      <tbody>
        <tr>
          <th>
            {
              <Link to={`/inverter/${inverter._id}`} className="btn btn-info">
                View Inverter
              </Link>
            }
          </th>
          <th>
            {
              <Link
                to={`/inverter/edit/${inverter._id}`}
                className="btn btn-info"
              >
                Edit Inverter
              </Link>
            }
          </th>
          <td>{inverter.inverterManufacturer}</td>
          <td>{inverter.inverterType}</td>
          <td>{inverter.maxPowerOutput}</td>
        </tr>
      </tbody>
      // <div className="card card-body bg-light mb-3">
      //   <div className="row">
      //     <div className="col-2">{inverter.inverterType}</div>
      //     <div className="col-lg-6 col-md-4 col-8">
      //       <h3>{inverter.maxDcVoltage}</h3>

      //       <Link to={`/inverter/${inverter._id}`} className="btn btn-info">
      //         View Inverter
      //       </Link>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

InverterItem.propTypes = {
  inverter: PropTypes.object.isRequired
};

export default InverterItem;
