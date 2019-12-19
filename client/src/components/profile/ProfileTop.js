import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ProfileTop = ({ profile, user, loading }) => {
  return (
    <Fragment>
      <div className="bg-teal-700 mb-4 mw-100">
        <div className="flex flex-column d-flex align-items-center justify-content-center py-4 min-vw-100 profile-top mt-4 mb-4 mx-auto">
          <div className="d-md-flex align-items-center pb-3">
            <div className="d-flex  align-items-center justify-content-center mb-4 mb-md-0">
              <img
                className="rounded-circle fit-image mr-md-4"
                src={profile.user.avatar}
                alt=""
              />
            </div>

            <div className="ml-4">
              <div className="d-flex justify-content-between mb-3 align-items-center">
                <span className="lead font-weight-bold text-center align-middle text-gray-100">
                  {profile.user.name}
                  {!loading && profile.user.username === user.username && (
                    <Link className="text-gray-100" to="/profile/edit/overview">
                      <FontAwesomeIcon className="ml-2" icon={faEdit} />
                    </Link>
                  )}
                </span>

                {!loading && profile.user.username !== user.username && (
                  <button
                    type="button"
                    class="btn btn-outline-light btn-sm px-4">
                    Follow
                  </button>
                )}
              </div>
              <div className="d-flex flex-row text-center justify-content-center text-gray-100">
                <div className="px-4 py-2 border-right border-gray-300">
                  <div className="font-bold">14</div>
                  <small className="text-gray-300">Posts</small>
                </div>
                <div className="px-4 py-2 border-right border-gray-300">
                  <div className="font-bold">{profile.followers.length}</div>
                  <small className="text-gray-300">Followers</small>
                </div>
                <div className="px-4 py-2">
                  <div className="font-bold">{profile.following.length}</div>
                  <small className="text-gray-300">Following</small>
                </div>
              </div>
            </div>
          </div>

          {profile.bio && (
            <div className="px-md-5 mx-md-5 text-center text-gray-100">
              {profile.bio}
            </div>
          )}
        </div>
      </div>
    </Fragment>
  );
};

ProfileTop.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading
});

export default connect(mapStateToProps, null)(ProfileTop);
