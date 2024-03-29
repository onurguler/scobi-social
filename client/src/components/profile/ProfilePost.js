import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  faThumbsUp as faThumbsUpSolid,
  faThumbsDown as faThumbsDownSolid,
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
  removeDislike,
  addBookmark,
  removeBookmark,
  deletePost
} from '../../store/actions/post';

const ProfilePost = ({
  post,
  addLike,
  auth,
  removeLike,
  addDislike,
  removeDislike,
  addBookmark,
  removeBookmark,
  bookmarks,
  deletePost
}) => {
  const [showLikesModal, setShowLikesModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalTitle, setModalTitle] = useState('');

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
              <li
                className="dropdown-item"
                onClick={() => deletePost(post._id)}>
                Delete
              </li>
            </div>
          </div>
        </div>
        {post.cover && (
          <Link to={`/posts/${post._id}`}>
            <img
              className="img-fluid mt-2 fit-image"
              src={post.cover}
              alt=""
              style={{ width: '100%', height: '200px' }}
            />
          </Link>
        )}

        <Link
          to={`/posts/${post._id}`}
          className="text-2xl font-bold leading-tight truncate-2-lines mt-2 text-decoration-none text-gray-900 mb-2">
          {post.title}
        </Link>

        {post.subtitle && (
          <Link
            to={`/posts/${post._id}`}
            className="text-gray-600 truncate-2-lines text-decoration-none mb-2">
            {post.subtitle}
          </Link>
        )}

        <Link
          to={`/posts/${post._id}`}
          className="text-decoration-none text-gray-600 text-sm">
          Read more...
        </Link>

        <div className="mt-2 d-flex justify-content-between">
          <div>
            {!auth.loading &&
            post.likes.filter(like => like.user._id === auth.user._id).length >
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
            <button className="btn text-decoration-none text-secondary">
              <small
                onClick={() => {
                  setModalData(post.likes);
                  setModalTitle('Likes');
                  setShowLikesModal(true);
                }}>
                {post.likes.length}
              </small>
            </button>

            {!auth.loading &&
            post.dislikes.filter(dislike => dislike.user._id === auth.user._id)
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
            <button
              className="btn text-decoration-none text-secondary cursor-pointer"
              onClick={() => {
                setModalData(post.dislikes);
                setModalTitle('Dislikes');
                setShowLikesModal(true);
              }}>
              <small>{post.dislikes.length}</small>
            </button>
            <span className="text-decoration-none text-secondary ml-4">
              <FontAwesomeIcon className="align-middle" icon={faEye} />
            </span>
            <span className="text-decoration-none text-secondary" href="#!">
              <small className="ml-2">{post.views && post.views.length}</small>
            </span>
          </div>

          <div>
            {post &&
            bookmarks &&
            bookmarks.filter(bookmark => bookmark.post._id === post._id)
              .length > 0 ? (
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
      <LikesModal
        show={showLikesModal}
        title={modalTitle}
        data={modalData}
        onHide={() => setShowLikesModal(false)}
      />
    </Fragment>
  );
};

const mapStateToProps = state => {
  const { auth, post } = state;
  return { auth, bookmarks: post.bookmarks };
};

export default connect(mapStateToProps, {
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  addBookmark,
  removeBookmark,
  deletePost
})(ProfilePost);
