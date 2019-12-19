import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*
 * TODO: Modal title'ı küçült, Font size'ı küçült, Text'i ortala
 */
const Followers = ({ show, onHide, title, data }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-fixed">
      <Modal.Header closeButton className="fixed">
        <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {data.map(user => (
          <div className="d-flex align-items-center justify-content-between mb-4">
            <Link
              onClick={onHide}
              className="text-decoration-none text-dark d-flex"
              to="/profile">
              <img
                className="rounded-circle fit-image"
                src={user.user.avatar}
                alt=""
                width="45"
                height="45"
              />
              <div className="ml-3">
                <div style={{ fontSize: '0.9rem' }}>{user.user.name}</div>
                <small className="text-secondary">@{user.user.username}</small>
              </div>
            </Link>
            <button type="button" class="btn btn-primary btn-sm px-4">
              Follow
            </button>
          </div>
        ))}
      </Modal.Body>
    </Modal>
  );
};

export default Followers;
