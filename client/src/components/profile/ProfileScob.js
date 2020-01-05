import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH, faShare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteScob } from '../../store/actions/scob';

const ProfileScob = ({ scob, deleteScob }) => {
  return (
    <Fragment>
      <div className="mb-4 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex mb-2">
            <img
              className="rounded-circle fit-image"
              src={scob.avatar}
              width="50"
              height="50"
              alt=""
            />
            <div className="ml-3">
              <div className="font-weight-bold">{scob.name}</div>
              <div>
                <small className="text-secondary">{scob.date}</small>
              </div>
            </div>
          </div>

          <div class="dropdown">
            <button
              class="btn btn-link text-secondary text-decoration-none dropdown"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            <div
              class="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenthuButton">
              <li class="dropdown-item" onClick={() => deleteScob(scob._id)}>
                Delete
              </li>
            </div>
          </div>
        </div>
        <p className="text-m leading-tight mt-2 text-decoration-none text-gray-900   ">
          {scob.text}
        </p>

        <div className="mt-2 d-flex justify-content-end">
          <div>
            <a className="text-decoration-none text-secondary ml-4" href="#!">
              <FontAwesomeIcon className="align-middle" icon={faShare} />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

ProfileScob.propTypes = {
  scob: PropTypes.object.isRequired,
  deleteScob: PropTypes.func.isRequired
};

export default connect(null, { deleteScob })(ProfileScob);
