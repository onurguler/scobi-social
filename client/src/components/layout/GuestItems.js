import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import GuestAccountDropdown from './GuestAccountDropdown';

const GuestItems = () => {
  return (
    <Fragment>
      <div className="auth-buttons d-none d-md-block">
        <Link to="/login">
          <button className="btn btn-outline-green-500 btn-sm mr-3 font-semibold">
            SIGN IN
          </button>
        </Link>

        <Link to="/register">
          <button className="btn btn-green-500 btn-sm mr-3 font-semibold">
            SIGN UP
          </button>
        </Link>
      </div>
      <GuestAccountDropdown />
    </Fragment>
  );
};

export default GuestItems;
