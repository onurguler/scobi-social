import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import LikesModal from '../post/LikesModal';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../store/actions/post';

const CommentCard = ({ comment, post, deleteComment }) => {
  const [showLikesModal, setShowLikesModal] = useState(false);

  return (
    <Fragment>
      <div className="mb-4 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex">
            <Link to={`/@${comment.username}`}>
              <img
                className="rounded-circle fit-image"
                src={comment.avatar}
                width="50"
                height="50"
                alt=""
              />
            </Link>
            <div className="ml-3">
              <Link to={`/@${comment.username}`} className="text-dark">
                <div className="font-weight-bold">{comment.name}</div>
              </Link>
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
              <li
                className="dropdown-item"
                onClick={() => deleteComment(post._id, comment._id)}>
                Delete
              </li>
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
  comment: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default connect(null, { deleteComment })(CommentCard);
