import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = ({ post }) => {
  return <h2>{post.post.title}</h2>;
};

PostHeader.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostHeader;
