import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NotificationItem = ({ notification }) => {
  return (
    <Link to={notification && notification.slug} className="dropdown-item">
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <img
            className="rounded-circle fit-image"
            src={notification && notification.avatar}
            width="50"
            height="50"
            alt=""
          />
          <div className="ml-3">
            <div className="text-wrap text-sm">
              <span className="font-weight-bold">
                {notification && notification.name}
              </span>{' '}
              <span>{notification && notification.msg}</span>
            </div>
            <div className="text-wrap truncate-3-lines text-xs">
              {notification && notification.post && notification.post.title}
            </div>
            <div>
              <small className="text-secondary">
                {notification && notification.date}
              </small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.object.isRequired
};

export default NotificationItem;
