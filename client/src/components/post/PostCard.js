import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  return (
    post && (
      <Link
        to={`/posts/${post._id}`}
        className="mb-2 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm mx-auto text-decoration-none text-gray-900">
        <div className="d-flex justify-content-between align-items-start">
          <span className="leading-tight text-decoration-none text-gray-800 mr-2 mb-2">
            {post && post.title}
          </span>

          <div className="d-flex">
            <p className="text-decoration-none text-gray-600 mr-1">
              <FontAwesomeIcon icon={faComment} />
            </p>
            <span className="text-sm">{post && post.comments.length}</span>
          </div>
        </div>
        <span className="text-decoration-none text-gray-600">
          {post && post.name}
        </span>
      </Link>
    )
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostCard;
