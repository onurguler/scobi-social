import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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
import LikesModal from './LikesModal';
import { Markdown } from 'react-showdown';
import { connect } from 'react-redux';
import {
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  addBookmark,
  removeBookmark
} from '../../store/actions/post';
import PropTypes from 'prop-types';

const PostContent = ({
  className,
  post,
  auth,
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  addBookmark,
  removeBookmark,
  bookmarks
}) => {
  const [showLikesModal, setShowLikesModal] = useState(false);
  const [likesModalData, setLikesModalData] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  return (
    <div className={`${className}`}>
      <h4>{post && post.subtitle}</h4>
      {post && post.cover && (
        <img className="w-100 img-fluid mb-4" src={post.cover} alt="" />
      )}

      <Markdown markup={post && post.text} />

      <div className="mt-2 d-flex align-items-center justify-content-between border-bottom pb-2">
        <div>
          {!auth.loading &&
          post &&
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
          <a className="text-decoration-none text-secondary" href="#!">
            <small
              className="ml-2"
              onClick={() => {
                setModalTitle('Likes');
                setLikesModalData(post.likes);
                setShowLikesModal(true);
              }}>
              {post && post.likes.length}
            </small>
          </a>

          {!auth.loading &&
          post &&
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
          <a
            className="text-decoration-none text-secondary"
            href="#!"
            onClick={() => {
              setModalTitle('Dislikes');
              setLikesModalData(post.dislikes);
              setShowLikesModal(true);
            }}>
            <small className="ml-2">{post && post.dislikes.length}</small>
          </a>
          <a className="text-decoration-none text-secondary ml-4" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faEye} />
          </a>
          <a className="text-decoration-none text-secondary" href="#!">
            <small className="ml-2">
              {post && post.views && post.views.length}
            </small>
          </a>
        </div>

        <div className="d-flex align-items-center">
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
      <div className="d-flex justify-content-between align-items-center border-bottom">
        <div className="d-flex align-items-center py-4">
          <Link to={`/@${post.username}`}>
            <img
              className="rounded-circle fit-image"
              src={post.avatar}
              width="100"
              height="100"
              alt=""
            />
          </Link>
          <div className="ml-2">
            <div className="text-gray-600 text-xs text-uppercase">
              Posted by
            </div>
            <Link to={`/@${post.username}`} className="text-dark">
              <div className="text-lg font-semibold">{post.name}</div>
            </Link>
          </div>
        </div>
      </div>
      <Link to={`/posts/${post && post._id}/comments`}>
        <button className="btn btn-outline-green-500 mt-4 w-100">
          Show Comments ({post && post.comments.length})
        </button>
      </Link>
      <LikesModal
        show={showLikesModal}
        title={modalTitle}
        data={likesModalData}
        onHide={() => setShowLikesModal(false)}
      />
    </div>
  );
};

PostContent.propTypes = {
  post: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  addDislike: PropTypes.func.isRequired,
  removeDislike: PropTypes.func.isRequired,
  addBookmark: PropTypes.func.isRequired,
  removeBookmark: PropTypes.func.isRequired
};
export default connect(null, {
  addLike,
  removeLike,
  addDislike,
  removeDislike,
  addBookmark,
  removeBookmark
})(PostContent);
