import React, { Fragment, useState, useEffect } from 'react';
import ProfileTop from './ProfileTop';
import ProfilePost from './ProfilePost';
import ProfileNav from './ProfileNav';
import ProfileScob from './ProfileScob';
import NewScob from './NewScob';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getProfileByUsername } from '../../store/actions/profile';
import { getUsersPosts } from '../../store/actions/post';

const Profile = ({
  match,
  getProfileByUsername,
  profile,
  auth,
  post,
  getUsersPosts
}) => {
  useEffect(() => {
    const username = match.params.username;
    if (username) {
      getProfileByUsername(username);
      getUsersPosts(username);
    }
  }, [getProfileByUsername, match.params, getUsersPosts]);
  const [showPosts, setShowPosts] = useState(true);
  const [showScobs, setShowScobs] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);

  return (
    <div className="flex d-flex flex-column align-items-center justify-content-center profile">
      {!profile.loading && !post.loading && (
        <ProfileTop profile={profile.profile} posts={post.posts} />
      )}
      <ProfileNav
        setShowPosts={setShowPosts}
        setShowScobs={setShowScobs}
        setShowBookmarks={setShowBookmarks}
      />
      {showPosts && (
        <Fragment>
          {!post.loading && post.posts.map(post => <ProfilePost post={post} />)}
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
  auth: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  post: state.post
});

export default connect(mapStateToProps, {
  getProfileByUsername,
  getUsersPosts
})(Profile);
