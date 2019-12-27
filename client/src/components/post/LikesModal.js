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
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.data &&
          props.data.map(data => (
            <div className="d-flex align-items-center justify-content-between mb-4">
              <Link
                onClick={props.onHide}
                className="text-decoration-none text-dark d-flex"
                to={`/@${data.user.username}`}>
                <img
                  className="rounded-circle fit-image"
                  src={data.user.avatar}
                  alt=""
                  width="45"
                  height="45"
                />
                <div className="ml-3">
                  <div style={{ fontSize: '0.9rem' }}>
                    @{data.user.username}
                  </div>
                  <small className="text-secondary">{data.user.name}</small>
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

export default LikesModal;
