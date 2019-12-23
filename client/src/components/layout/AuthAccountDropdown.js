import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';

const AuthAccountDropdown = ({ avatar, name, username, logout }) => {
  return (
    <Fragment>
      <div className="dropdown">
        <button
          className="btn btn-default-gray-600 text-gray-600 btn-sm"
          data-toggle="dropdown">
          <img
            className="fit-image rounded-circle"
            src={avatar}
            alt="account"
            width="32"
            height="32"
          />
        </button>
        <div
          className="dropdown-menu font-weight-bolder dropdown-menu-right"
          style={{ minWidth: '15rem' }}>
          <Link className="dropdown-item" to={`/@${username}`}>
            <div className="d-flex">
              <img
                className="rounded-circle fit-image"
                src={avatar}
                width="50"
                height="50"
                alt=""
              />
              <div className="ml-3">
                <div className="font-weight-bold">{name}</div>
                <div>
                  <small className="text-secondary">@{username}</small>
                </div>
              </div>
            </div>
          </Link>
          <div class="dropdown-divider"></div>
          <Link className="dropdown-item" to="/new-post">
            New post
          </Link>
          <Link className="dropdown-item" to="/profile">
            Posts
          </Link>
          <div class="dropdown-divider"></div>
          <Link className="dropdown-item" to="/profile">
            Bookmarks
          </Link>
          <div class="dropdown-divider"></div>
          <Link className="dropdown-item" to={`/@${username}`}>
            Profile
          </Link>
          <Link className="dropdown-item" to="/settings">
            Settings
          </Link>
          <div onClick={logout} className="dropdown-item">
            Sign out
          </div>
        </div>
      </div>
    </Fragment>
  );
};

AuthAccountDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  const { auth } = state;

  return {
    avatar: auth.user.avatar,
    name: auth.user.name,
    username: auth.user.username
  };
};

export default connect(mapStateToProps, { logout })(AuthAccountDropdown);
