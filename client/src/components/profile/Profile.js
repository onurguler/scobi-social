import React, { Fragment, useState } from 'react';
import ProfileTop from './ProfileTop';
import ProfilePost from './ProfilePost';
import ProfileNav from './ProfileNav';
import ProfileScob from './ProfileScob';
import NewScob from './NewScob';

const Profile = () => {
  const [showPosts, setShowPosts] = useState(true);
  const [showScobs, setShowScobs] = useState(false);
  const [showBookmarks, setShowBookmarks] = useState(false);

  return (
    <div className="flex d-flex flex-column align-items-center justify-content-center profile">
      <ProfileTop />
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

export default Profile;
