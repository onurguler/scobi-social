import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // eslint-disable-next-line
  faThumbsUp as faThumbsUpSolid,
  // eslint-disable-next-line
  faThumbsDown as faThumbsDownSolid,
  // eslint-disable-next-line
  faBookmark as faBookmarkSolid,
  faShare
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import { addBookmark, removeBookmark } from '../../store/actions/post';
import PropTypes from 'prop-types';

const PostUser = ({
  className,
  post,
  bookmarks,
  addBookmark,
  removeBookmark
}) => {
  return (
    <div className={`d-flex ${className}`}>
      <Link to={post && `/@${post.username}`}>
        <img
          className="rounded-circle fit-image"
          src={post && post.avatar}
          width="50"
          height="50"
          alt=""
        />
      </Link>
      <div className="d-flex align-items-center justify-content-between w-100 ml-3">
        <Link
          to={post && `/@${post.username}`}
          className="text-dark text-decoration-none">
          <div className="d-flex align-items-start flex-wrap">
            <div>
              <div className="font-weight-bold">{post && post.name}</div>
              <div>
                <small className="text-secondary">{post && post.date}</small>
              </div>
            </div>
          </div>
        </Link>
        <div>
          {post &&
          bookmarks &&
          bookmarks.filter(bookmark => bookmark.post._id === post._id).length >
            0 ? (
            <button
              className="btn text-decoration-none text-secondary"
              onClick={() => removeBookmark(post._id)}>
              <FontAwesomeIcon
                className="align-middle"
                icon={faBookmarkSolid}
              />
            </button>
          ) : (
            <button
              className="btn text-decoration-none text-secondary"
              onClick={() => addBookmark(post._id)}>
              <FontAwesomeIcon className="align-middle" icon={faBookmark} />
            </button>
          )}
          <a className="text-decoration-none text-secondary ml-4" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faShare} />
          </a>
        </div>
      </div>
    </div>
  );
};

PostUser.propTypes = {
  addBookmark: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired
};

export default connect(null, { addBookmark, removeBookmark })(PostUser);
