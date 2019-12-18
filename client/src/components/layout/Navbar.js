import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSellcast } from '@fortawesome/free-brands-svg-icons';
import SearchDesktop from './SearchDesktop';
import { Link } from 'react-router-dom';
import SearchMobile from './SearchMobile';
import GuestItems from './GuestItems';
import AuthItems from './AuthItems';

const NavBar = ({ isAuthenticated }) => {
  return (
    <Fragment>
      <div className="navbar navbar-light bg-light border-bottom border-gray-400">
        <div className="container">
          <Link
            to="/"
            className="navbar-brand text-decoration-none text-gray-900">
            <FontAwesomeIcon
              className="mr-2 align-middle"
              icon={faSellcast}
              size={'2x'}
            />
            <span className="font-semibold align-middle" href="#home">
              Scobi
            </span>
          </Link>
          <SearchDesktop className="d-none d-md-flex mr-auto col-5 col-sm-9 col-md-5 col-lg-5" />
          <div className="d-flex align-items-center">
            <SearchMobile className="d-md-none" />
            {isAuthenticated ? <AuthItems /> : <GuestItems />}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
