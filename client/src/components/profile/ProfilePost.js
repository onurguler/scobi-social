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
  faShare,
  faEye
} from '@fortawesome/free-solid-svg-icons';
import {
  faThumbsUp,
  faThumbsDown,
  faBookmark
} from '@fortawesome/free-regular-svg-icons';
import LikesModal from '../post/LikesModal';
import { connect } from 'react-redux';
import {
  addLike,
  removeLike,
  addDislike,
  removeDislike
} from '../../store/actions/post';

const ProfilePost = ({
  post,
  addLike,
  auth,
  removeLike,
  addDislike,
  removeDislike
}) => {
  const [showLikesModal, setShowLikesModal] = useState(false);

  return (
    <Fragment>
      <div className="mb-4 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <img
              className="rounded-circle fit-image"
              src={post.avatar}
              width="50"
              height="50"
              alt=""
            />
            <div className="ml-3">
              <div className="font-weight-bold">{post.name}</div>
              <div>
                <small className="text-secondary">{post.date}</small>
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
        {post.cover && (
          <Link to="/posts">
            <img
              className="img-fluid mt-2 fit-image"
              src={post.cover}
              alt=""
              style={{ width: '100%', height: '200px' }}
            />
          </Link>
        )}

        <Link
          to="/posts"
          className="text-2xl font-bold leading-tight truncate-2-lines mt-2 text-decoration-none text-gray-900 mb-2">
          {post.title}
        </Link>

        {post.subtitle && (
          <Link
            to="/posts"
            className="text-gray-600 truncate-2-lines text-decoration-none mb-2">
            {post.subtitle}
          </Link>
        )}

        <Link
          to="/posts"
          className="text-decoration-none text-gray-600 text-sm">
          Read more...
        </Link>

        <div className="mt-2 d-flex justify-content-between">
          <div>
            {!auth.loading &&
            post.likes.filter(like => like.user === auth.user._id).length >
              0 ? (
              <button
                className="btn text-secondary"
                href="#!"
                onClick={() => removeLike(post._id)}>
                <FontAwesomeIcon icon={faThumbsUpSolid} />
              </button>
            ) : (
              <button
                className="btn text-secondary"
                href="#!"
                onClick={() => addLike(post._id)}>
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            )}
            <a className="text-decoration-none text-secondary" href="#!">
              <small className="ml-2" onClick={() => setShowLikesModal(true)}>
                {post.likes.length}
              </small>
            </a>

            {!auth.loading &&
            post.dislikes.filter(dislike => dislike.user === auth.user._id)
              .length > 0 ? (
              <button
                className="btn text-secondary"
                href="#!"
                onClick={() => removeDislike(post._id)}>
                <FontAwesomeIcon icon={faThumbsDownSolid} />
              </button>
            ) : (
              <button
                className="btn text-secondary"
                href="#!"
                onClick={() => addDislike(post._id)}>
                <FontAwesomeIcon icon={faThumbsDown} />
              </button>
            )}
            <a className="text-decoration-none text-secondary" href="#!">
              <small className="ml-2">{post.dislikes.length}</small>
            </a>
            <a className="text-decoration-none text-secondary ml-4" href="#!">
              <FontAwesomeIcon className="align-middle" icon={faEye} />
            </a>
            <a className="text-decoration-none text-secondary" href="#!">
              <small className="ml-2">200K+</small>
            </a>
          </div>

          <div>
            <a className="text-decoration-none text-secondary" href="#!">
              <FontAwesomeIcon className="align-middle" icon={faBookmark} />
            </a>
            <a className="text-decoration-none text-secondary ml-4" href="#!">
              <FontAwesomeIcon className="align-middle" icon={faShare} />
            </a>
          </div>
        </div>
      </div>
      <LikesModal
        show={showLikesModal}
        onHide={() => setShowLikesModal(false)}
      />
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  addDislike,
  removeDislike
})(ProfilePost);
