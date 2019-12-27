import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  // eslint-disable-next-line
  faThumbsUp as faThumbsUpSolid,
  // eslint-disable-next-line
  faThumbsDown as faThumbsDownSolid,
  // eslint-disable-next-line
  faBookmark as faBookmarkSolid,
  faShare
} from '@fortawesome/free-solid-svg-icons';
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark
} from '@fortawesome/free-regular-svg-icons';
import LikesModal from '../post/LikesModal';
import PropTypes from 'prop-types';

const CommentCard = ({ comment }) => {
  const [showLikesModal, setShowLikesModal] = useState(false);

  return (
    <Fragment>
      <div className="mb-4 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex">
            <img
              className="rounded-circle fit-image"
              src={comment.avatar}
              width="50"
              height="50"
              alt=""
            />
            <div className="ml-3">
              <div className="font-weight-bold">{comment.name}</div>
              <div>
                <small className="text-secondary">{comment.date}</small>
              </div>
            </div>
          </div>

          <div class="dropdown">
            <button
              className="btn btn-link text-secondary text-decoration-none dropdown"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              <FontAwesomeIcon icon={faEllipsisH} />
            </button>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#!">
                Bookmark
              </a>
              <a className="dropdown-item" href="#!">
                Hide
              </a>
              <a className="dropdown-item" href="#!">
                Delete
              </a>
              <a className="dropdown-item" href="#!">
                Unfollow
              </a>
              <a className="dropdown-item" href="#!">
                Report
              </a>
            </div>
          </div>
        </div>

        <p className="text-gray-900 text-decoration-none">{comment.text}</p>
      </div>
      <LikesModal
        show={showLikesModal}
        onHide={() => setShowLikesModal(false)}
      />
    </Fragment>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired
};

export default CommentCard;
