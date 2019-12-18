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

const ProfilePost = () => {
  const [showLikesModal, setShowLikesModal] = useState(false);

  return (
    <Fragment>
      <div className="mb-4 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex">
            <img
              className="rounded-circle fit-image"
              src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
              width="50"
              height="50"
              alt=""
            />
            <div className="ml-3">
              <div className="font-weight-bold">Ege Çakmak</div>
              <div>
                <small className="text-secondary">Nov 15</small>
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
        <Link to="/posts">
          <img
            className="img-fluid mt-2 fit-image"
            src="https://images.unsplash.com/photo-1574192773018-be32f27632d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            alt=""
            style={{ width: '100%', height: '200px' }}
          />
        </Link>

        <Link
          to="/posts"
          className="text-2xl font-bold leading-tight truncate-2-lines mt-2 text-decoration-none text-gray-900 mb-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sint
          alias expedita unde ipsum quos voluptates quis sequi commodi nisi
          repellendus eius perferendis fuga exercitationem repudiandae,
          consequatur quam quasi nostrum.
        </Link>

        <Link
          to="/posts"
          className="text-gray-600 truncate-2-lines text-decoration-none mb-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia,
          quidem quasi doloremque distinctio autem quae, deleniti voluptatem a
          dolor deserunt veritatis. Assumenda et perferendis laboriosam? Fugit
          esse aut alias dolorem.
        </Link>

        <Link
          to="/posts"
          className="text-decoration-none text-gray-600 text-sm">
          Read more...
        </Link>

        <div className="mt-2 d-flex justify-content-between">
          <div>
            <a className="text-decoration-none text-secondary" href="#!">
              <FontAwesomeIcon icon={faThumbsUp} />
            </a>
            <a className="text-decoration-none text-secondary" href="#!">
              <small className="ml-2" onClick={() => setShowLikesModal(true)}>
                242
              </small>
            </a>

            <a className="text-decoration-none text-secondary ml-4" href="#!">
              <FontAwesomeIcon className="align-middle" icon={faThumbsDown} />
            </a>
            <a className="text-decoration-none text-secondary" href="#!">
              <small className="ml-2">13</small>
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

export default ProfilePost;
