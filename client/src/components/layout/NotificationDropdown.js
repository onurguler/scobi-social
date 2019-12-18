import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import NotificationItem from './NotificationItem';
const NotificationDropdown = () => {
  return (
    <Fragment>
      <div className="dropdown">
        <button
          className="btn btn-default-gray-600 text-gray-600 btn-sm text-xl"
          data-toggle="dropdown">
          <FontAwesomeIcon icon={faBell} />
        </button>
        <div
          className="dropdown-menu font-weight-bolder dropdown-menu-right"
          style={{ minWidth: '25rem', maxWidth: '25rem' }}>
          <Link className="dropdown-item">
            <NotificationItem />
          </Link>
          <Link className="dropdown-item">
            <NotificationItem />
          </Link>
          <Link className="dropdown-item">
            <NotificationItem />
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NotificationDropdown;
