import React, { useState } from 'react';
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
import LikesModal from './LikesModal';
import { Markdown } from 'react-showdown';
import { connect } from 'react-redux';
import {
  addLike,
  removeLike,
  addDislike,
  removeDislike
} from '../../store/actions/post';
import PropTypes from 'prop-types';

const PostContent = ({
  className,
  post,
  auth,
  addLike,
  removeLike,
  addDislike,
  removeDislike
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

      <div className="d-flex flex-wrap">
        <button className="btn btn-gray-300 text-gray-700 btn-sm text-sm mr-2">
          Technology
        </button>
        <button className="btn btn-gray-300 text-gray-700 btn-sm text-sm mr-2">
          Programming
        </button>
        <button className="btn btn-gray-300 text-gray-700 btn-sm text-sm mr-2">
          React
        </button>
        <button className="btn btn-gray-300 text-gray-700 btn-sm text-sm mr-2">
          Bootstrap
        </button>
      </div>

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
          <a className="text-decoration-none text-secondary" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faBookmark} />
          </a>
          <a className="text-decoration-none text-secondary ml-4" href="#!">
            <FontAwesomeIcon className="align-middle" icon={faShare} />
          </a>

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
              aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#!">
                Bookmark
              </a>
              <a class="dropdown-item" href="#!">
                Hide
              </a>
              <a class="dropdown-item" href="#!">
                Unfollow
              </a>
              <a class="dropdown-item" href="#!">
                Report
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center border-bottom">
        <div className="d-flex align-items-center py-4">
          <img
            className="rounded-circle fit-image"
            src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
            width="100"
            height="100"
            alt=""
          />
          <div className="ml-2">
            <div className="text-gray-600 text-xs text-uppercase">
              Posted by
            </div>
            <div className="text-lg font-semibold">Ege Çakmak</div>
          </div>
        </div>

        <button className="btn btn-outline-green-500 text-sm btn-sm">
          Follow
        </button>
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
  post: PropTypes.object.isRequired
};
export default connect(null, {
  addLike,
  removeLike,
  addDislike,
  removeDislike
})(PostContent);
