import React from 'react';
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

const PostUser = ({ className, post }) => {
  return (
    <div className={`d-flex ${className}`}>
      <img
        className="rounded-circle fit-image"
        src={post && post.avatar}
        width="50"
        height="50"
        alt=""
      />
      <div className="d-flex align-items-center justify-content-between w-100 ml-3">
        <div className="d-flex align-items-start flex-wrap">
          <div>
            <div className="font-weight-bold">{post && post.name}</div>
            <div>
              <small className="text-secondary">{post && post.date}</small>
            </div>
          </div>
          <button className="btn btn-outline-green-500 btn-sm ml-2">
            Follow
          </button>
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
  );
};

export default PostUser;
