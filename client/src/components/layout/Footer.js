import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSellcast } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Fragment>
      <div className="bg-gray-900 border-gray-900 border-top">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <Link
              to="/"
              className="navbar-brand text-decoration-none text-gray-300 text-lg">
              <FontAwesomeIcon
                className="mr-1 align-middle"
                icon={faSellcast}
              />
            </Link>

            <div className="d-flex align-items-center">
              <Link className="text-decoration-none" to="/AboutUs">
                <span className="align-middle text-teal-100 mr-4">
                  About Us
                </span>
              </Link>
              <Link className="text-decoration-none" to="/Contact">
                <span className="align-middle text-teal-100">Contact</span>
              </Link>
            </div>
          </div>
          <div className="text-xs align-items-center w-100 text-teal-100 py-1">
            © Scobi 2019, All Rights Reserved.
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
