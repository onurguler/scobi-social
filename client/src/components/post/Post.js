import React from 'react';
import PostHeader from './PostHeader';
import PostUser from './PostUser';
import PostContent from './PostContent';

const Post = () => {
  return (
    <div className="flex d-flex flex-column align-items-center justify-content-center post-container">
      <div className="mb-4 rounded-lg px-4 py-4 bg-white post">
        <PostHeader />
        <PostUser className="mt-4" />
        <PostContent className="mt-4" />
      </div>
    </div>
  );
};

export default Post;
