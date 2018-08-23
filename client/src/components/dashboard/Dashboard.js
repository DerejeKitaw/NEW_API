import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class Dashboard extends Component {
  render() {
    const { user } = this.props.auth;

    let dashboardContent;

    // Check if logged in user has profile data
    dashboardContent = (
      <div>
        <p className="lead text-muted">
          Welcome {user.name}
        </p>
      </div>
    )
    // User is logged in but has no profile
    dashboardContent = (
      <div>
        <p className="lead text-muted">Welcome {user.name}</p>
        <p>You have not yet setup a projects, please add some project</p>
      </div>
    );
    
    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(mapStateToProps, {   })(
  Dashboard
);
