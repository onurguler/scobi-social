import React, { useEffect } from 'react';
import PostUser from './PostUser';
import PostContent from './PostContent';
import { connect } from 'react-redux';
import { getPost } from '../../store/actions/post';

const Post = ({ getPost, match, post, auth }) => {
  useEffect(() => {
    getPost(match.params.post_id);
  }, [match, getPost]);
  return (
    <div className="min-vh-100">
      {post.post && (
        <div className="mx-auto col-md-8 col-lg-6">
          <div className="mb-4 rounded-lg px-2 py-4 bg-white post">
            <h2>{post.post && post.post.title}</h2>
            <PostUser
              post={post.post}
              bookmarks={post.bookmarks && post.bookmarks}
              className="mt-4"
            />
            <PostContent
              post={post.post}
              bookmarks={post.bookmarks && post.bookmarks}
              auth={auth}
              className="mt-4"
            />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  const { post, auth } = state;
  return { post, auth };
};
export default connect(mapStateToProps, { getPost })(Post);
