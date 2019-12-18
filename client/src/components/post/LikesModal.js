import React from 'react';
import { Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/*
 * TODO: Modal title'ı küçült, Font size'ı küçült, Text'i ortala
 */
const LikesModal = props => {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-fixed">
      <Modal.Header closeButton className="fixed">
        <Modal.Title id="contained-modal-title-vcenter">Likes</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <Link
            onClick={props.onHide}
            className="text-decoration-none text-dark d-flex"
            to="/profile">
            <img
              className="rounded-circle fit-image"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              alt=""
              width="45"
              height="45"
            />
            <div className="ml-3">
              <div style={{ fontSize: '0.9rem' }}>yarenyalcin</div>
              <small className="text-secondary">Yaren Yalçın</small>
            </div>
          </Link>
          <button type="button" class="btn btn-primary btn-sm px-4">
            Follow
          </button>
        </div>

        <div className="d-flex align-items-center justify-content-between mb-2">
          <Link
            onClick={props.onHide}
            className="text-decoration-none text-dark d-flex"
            to="/profile">
            <img
              className="rounded-circle fit-image"
              src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=635&q=80"
              alt=""
              width="45"
              height="45"
            />
            <div className="ml-3">
              <div style={{ fontSize: '0.9rem' }}>luisviol</div>
              <small className="text-secondary">Luis Villasmill</small>
            </div>
          </Link>
          <button type="button" class="btn btn-primary btn-sm px-4">
            Follow
          </button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LikesModal;
