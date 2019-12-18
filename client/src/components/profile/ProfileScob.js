import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsisH,
  // eslint-disable-next-line
  faBookmark as faBookmarkSolid,
  faShare
} from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const ProfileScob = () => {
  return (
    <Fragment>
      <div className="mb-4 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex mb-2">
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
              aria-labelledby="dropdownMenthuButton">
              <a class="dropdown-item" href="#!">
                Bookmark
              </a>
              <a class="dropdown-item" href="#!">
                Hide
              </a>
              <a class="dropdown-item" href="#!">
                Delete
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
        <Link
          to="/posts"
          className="text-m leading-tight mt-2 text-decoration-none text-gray-900   ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id sint
          alias expedita unde ipsum quos voluptates quis sequi commodi nisi
          repellendus eius perferendis fuga exercitationem repudiandae,
          consequatur quam quasi nostrum.
        </Link>

        <div className="mt-2 d-flex justify-content-end">
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
    </Fragment>
  );
};

export default ProfileScob;
