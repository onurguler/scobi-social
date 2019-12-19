import React, { Fragment, useState, useEffect } from 'react';
import ProfileTop from './ProfileTop';
import ProfilePost from './ProfilePost';
import ProfileNav from './ProfileNav';
import ProfileScob from './ProfileScob';
import NewScob from './NewScob';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProfileByUsername } from '../../store/actions/profile';

const Profile = ({ match, getProfileByUsername, profile, auth }) => {
  useEffect(() => {
    const username = match.params.username;
    if (username) {
      getProfileByUsername(username);
    }
  }, [getProfileByUsername, match.params]);
  const [showPosts, setShowPosts] = useState(true);
  const [showScobs, setShowScobs] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);

  return (
    <div className="flex d-flex flex-column align-items-center justify-content-center profile">
      {!profile.loading && <ProfileTop profile={profile.profile} />}
      <ProfileNav
        setShowPosts={setShowPosts}
        setShowScobs={setShowScobs}
        setShowBookmarks={setShowBookmarks}
      />
      {showPosts && (
        <Fragment>
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </Fragment>
      )}
      {showScobs && (
        <Fragment>
          <NewScob />
          <ProfileScob />
          <ProfileScob />
        </Fragment>
      )}
      {showBookmarks && (
        <Fragment>
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
          <ProfilePost />
        </Fragment>
      )}
    </div>
  );
};

Profile.propTypes = {
  getProfileByUsername: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileByUsername })(Profile);
