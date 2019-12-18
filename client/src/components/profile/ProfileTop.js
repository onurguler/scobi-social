import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const ProfileTop = () => {
  return (
    <Fragment>
      <div className="bg-teal-700 mb-4 mw-100">
        <div className="flex flex-column d-flex align-items-center justify-content-center py-4 mw-100 profile-top mt-4 mb-4 mx-auto">
          <div className="d-md-flex align-items-center pb-3">
            <div className="d-flex  align-items-center justify-content-center mb-4 mb-md-0">
              <img
                className="rounded-circle fit-image mr-md-4"
                src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
                alt=""
              />
            </div>

            <div className="ml-4">
              <div className="d-flex justify-content-between mb-3 align-items-center">
                <span className="lead font-weight-bold text-center align-middle text-gray-100">
                  Ege Çakmak
                  <Link className="text-gray-100" to="/profile/edit/overview">
                    <FontAwesomeIcon className="ml-2" icon={faEdit} />
                  </Link>
                </span>

                <button type="button" class="btn btn-outline-light btn-sm px-4">
                  Follow
                </button>
              </div>
              <div className="d-flex flex-row text-center justify-content-center text-gray-100">
                <div className="px-4 py-2 border-right border-gray-300">
                  <div className="font-bold">14</div>
                  <small className="text-gray-300">Posts</small>
                </div>
                <div className="px-4 py-2 border-right border-gray-300">
                  <div className="font-bold">1.42M</div>
                  <small className="text-gray-300">Followers</small>
                </div>
                <div className="px-4 py-2">
                  <div className="font-bold">124</div>
                  <small className="text-gray-300">Following</small>
                </div>
              </div>
            </div>
          </div>

          <div className="px-md-5 mx-md-5 text-center text-gray-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quasi
            aliquid molestias explicabo, natus ullam, consequatur voluptatum
            minima necessitatibus ut, consequuntur voluptatem. Temporibus
            similique fugit optio vel, accusantium consequatur nobis!
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileTop;
