import React, { useEffect } from 'react';
import PostCard from './PostCard';
import CommentCard from './CommentCard';
import NewComment from './NewComment';
import { connect } from 'react-redux';
import { getPost } from '../../store/actions/post';
import PropTypes from 'prop-types';

const Comments = ({ post, match, getPost, auth }) => {
  useEffect(() => {
    getPost(match.params.post_id);
  }, [match.params, getPost]);
  return (
    <div>
      <div className="flex d-flex flex-column align-items-center justify-content-center profile border py-2 bg-white">
        <p className="text-gray-700 text-sm font-semibold">
          Showing comments for:
        </p>
        <PostCard post={post} />
      </div>
      <div className="bg-gray-300 profile d-flex flex flex-column align-items-center pt-2 min-vh-100">
        {auth && auth.isAuthenticated && post && (
          <NewComment user={auth.user && auth.user} post_id={post._id} />
        )}
        {post &&
          post.comments.map(comment => (
            <CommentCard comment={comment} post={post} />
          ))}
      </div>
    </div>
  );
};

Comments.propTypes = {
  post: PropTypes.object.isRequired,
  getPost: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  const { post, auth } = state;

  return { post: post.post, auth };
};

export default connect(mapStateToProps, { getPost })(Comments);
