import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FollowersModal from './FollowersModal';
import { follow, unfollow } from '../../store/actions/profile';

const ProfileTop = ({ profile, user, loading, posts, follow, unfollow }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalData, setModalData] = useState([]);

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
                  {!loading && user && profile.user.username === user.username && (
                    <Link className="text-gray-100" to="/profile/edit/overview">
                      <FontAwesomeIcon className="ml-2" icon={faEdit} />
                    </Link>
                  )}
                </span>

                {!loading && user && profile.user.username !== user.username ? (
                  profile.followers.filter(
                    follower => follower.user._id || follower.user === user._id
                  ).length > 0 ? (
                    <button
                      type="button"
                      class="btn btn-outline-light btn-sm px-4"
                      onClick={() => unfollow(profile.user.username)}>
                      Unfollow
                    </button>
                  ) : (
                    <button
                      type="button"
                      class="btn btn-outline-light btn-sm px-4"
                      onClick={() => follow(profile.user.username)}>
                      Follow
                    </button>
                  )
                ) : null}
              </div>
              <div className="d-flex flex-row text-center justify-content-center text-gray-100">
                <div className="px-4 py-2 border-right border-gray-300">
                  <div className="font-bold">{posts.length}</div>
                  <small className="text-gray-300">Posts</small>
                </div>
                <div
                  className="px-4 py-2 border-right border-gray-300"
                  onClick={() => {
                    setModalTitle('Followers');
                    setModalData(profile.followers);
                    setShowModal(true);
                  }}>
                  <div className="font-bold">{profile.followers.length}</div>
                  <small className="text-gray-300">Followers</small>
                </div>
                <div
                  className="px-4 py-2"
                  onClick={() => {
                    setModalTitle('Following');
                    setModalData(profile.following);
                    setShowModal(true);
                  }}>
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

      <FollowersModal
        show={showModal}
        onHide={() => setShowModal(false)}
        title={modalTitle}
        data={modalData}
      />
    </Fragment>
  );
};

ProfileTop.propTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading
});

export default connect(mapStateToProps, { follow, unfollow })(ProfileTop);
