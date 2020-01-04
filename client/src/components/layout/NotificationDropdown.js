import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import NotificationItem from './NotificationItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const NotificationDropdown = ({ auth }) => {
  return (
    <Fragment>
      {!auth.loading && auth.isAuthenticated && (
        <div className="dropdown">
          <button
            className="btn btn-default-gray-600 text-gray-600 btn-sm text-xl"
            data-toggle="dropdown">
            <FontAwesomeIcon icon={faBell} />
          </button>
          <div
            className="dropdown-menu font-weight-bolder dropdown-menu-right"
            style={{ minWidth: '25rem', maxWidth: '25rem' }}>
            {auth.user &&
              auth.user.notifications &&
              auth.user.notifications.map(notification => (
                <NotificationItem notification={notification} />
              ))}
          </div>
        </div>
      )}
    </Fragment>
  );
};

NotificationDropdown.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { auth } = state;

  return {
    auth
  };
};

export default connect(mapStateToProps, null)(NotificationDropdown);
