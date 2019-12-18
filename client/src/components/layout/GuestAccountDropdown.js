import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faExternalLinkAlt,
  faSignInAlt
} from '@fortawesome/free-solid-svg-icons';
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import Login from '../auth/Login';

const GuestAccountDropdown = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Fragment>
      <div className="dropdown">
        <button
          className="btn btn-default-gray-600 dropdown-toggle text-gray-600 btn-sm"
          data-toggle="dropdown">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <div className="dropdown-menu font-weight-bolder dropdown-menu-right">
          <Link className="dropdown-item" to="/contact">
            <FontAwesomeIcon
              className="align-middle mr-2 icon-left"
              icon={faQuestionCircle}
            />
            Contact Us
            <FontAwesomeIcon
              className="align-middle ml-1 icon-right"
              icon={faExternalLinkAlt}
            />
          </Link>
          <div class="dropdown-divider"></div>
          <button
            className="btn btn-default-gray-600 dropdown-item"
            onClick={e => setModalIsOpen(!modalIsOpen)}>
            <FontAwesomeIcon
              className="align-middle mr-2 icon-left"
              icon={faSignInAlt}
            />
            Log In / Sign Up
          </button>
        </div>
      </div>
      <Modal size="xl" show={modalIsOpen} onHide={() => setModalIsOpen(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body style={{ padding: '0', margin: '0' }}>
          <Login />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default GuestAccountDropdown;
