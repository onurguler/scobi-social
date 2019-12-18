import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const AuthAccountDropdown = () => {
  return (
    <Fragment>
      <div className="dropdown">
        <button
          className="btn btn-default-gray-600 text-gray-600 btn-sm"
          data-toggle="dropdown">
          <img
            className="fit-image rounded-circle"
            src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1115&q=80"
            alt="account"
            width="32"
            height="32"
          />
        </button>
        <div
          className="dropdown-menu font-weight-bolder dropdown-menu-right"
          style={{ minWidth: '15rem' }}>
          <Link className="dropdown-item" to="/profile">
            <div className="d-flex">
              <img
                className="rounded-circle fit-image"
                src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1115&q=80"
                width="50"
                height="50"
                alt=""
              />
              <div className="ml-3">
                <div className="font-weight-bold">John Doe</div>
                <div>
                  <small className="text-secondary">@johndoe</small>
                </div>
              </div>
            </div>
          </Link>
          <div class="dropdown-divider"></div>
          <Link className="dropdown-item" to="/posts/new">
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
          <Link className="dropdown-item" to="/profile">
            Profile
          </Link>
          <Link className="dropdown-item" to="/settings">
            Settings
          </Link>
          <Link className="dropdown-item" to="/signout">
            Sign out
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default AuthAccountDropdown;
