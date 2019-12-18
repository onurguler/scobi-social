import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
const PostCard = () => {
  return (
    <Link
      to="/posts"
      className="mb-2 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm mx-auto text-decoration-none text-gray-900">
      <div className="d-flex justify-content-between align-items-start">
        <span className="leading-tight text-decoration-none text-gray-800 mr-2 mb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
          voluptates, praesentium autem amet eius veniam provident quo tempora
          aperiam repudiandae?
        </span>

        <div className="d-flex">
          <p className="text-decoration-none text-gray-600 mr-1">
            <FontAwesomeIcon icon={faComment} />
          </p>
          <span className="text-sm">13</span>
        </div>
      </div>
      <span className="text-decoration-none text-gray-600">John Doe</span>
    </Link>
  );
};

export default PostCard;
