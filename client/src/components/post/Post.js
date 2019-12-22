import React, { useEffect } from 'react';
import PostHeader from './PostHeader';
import PostUser from './PostUser';
import PostContent from './PostContent';
import { connect } from 'react-redux';
import { getPost } from '../../store/actions/post';

const Post = ({ getPost, match, post }) => {
  useEffect(() => {
    getPost(match.params.post_id);
  }, [match]);
  return (
    <div className="flex d-flex flex-column align-items-center justify-content-center post-container">
      <div className="mb-4 rounded-lg px-4 py-4 bg-white post">
        <h2>{post && post.title}</h2>
        <PostUser post={post} className="mt-4" />
        <PostContent post={post} className="mt-4" />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { post } = state;
  return { post: post.post };
};
export default connect(mapStateToProps, { getPost })(Post);
