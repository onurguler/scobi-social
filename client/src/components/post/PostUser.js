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

const PostUser = ({ className }) => {
  return (
    <div className={`d-flex ${className}`}>
      <img
        className="rounded-circle fit-image"
        src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
        width="50"
        height="50"
        alt=""
      />
      <div className="d-flex align-items-center justify-content-between w-100 ml-3">
        <div className="d-flex align-items-start flex-wrap">
          <div>
            <div className="font-weight-bold">Ege Çakmak</div>
            <div>
              <small className="text-secondary">Nov 15</small>
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
