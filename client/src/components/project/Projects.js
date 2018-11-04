import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Projects extends Component {
  render() {
    return (
      <div>
      Projects List
          <Link to="/inverters">Inverters</Link>
      </div>
    )
  }
}
