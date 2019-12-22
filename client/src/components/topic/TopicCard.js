import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = ({ post }) => {
  return (
    <div class="card mb-3 home-post-card mb-4 overflow-hidden">
      <div class="row no-gutters">
        <div class="col-2 col-md-4">
          {post.cover && (
            <Link to={`/posts/${post._id}`}>
              <img
                src={post.cover}
                class="card-img fit-image rounded-0"
                width="200"
                height="200"
                alt="..."
              />
            </Link>
          )}
        </div>
        <div class="col-10  col-md-8">
          <div class="card-body d-flex flex-column">
            <Link
              to={`/posts/${post._id}`}
              className="text-decoration-none text-gray-900">
              <h5 class="card-title truncate-2-lines">{post.title}</h5>
            </Link>

            {post.subtitle && (
              <Link
                to={`/posts/${post._id}`}
                className="text-decoration-none text-gray-700">
                <p class="card-text font-smaller truncate-2-lines">
                  {post.subtitle}
                </p>
              </Link>
            )}
            <div class="card-text">
              <div className="mt-2">
                <Link
                  className="text-decoration-none text-gray-900 text-sm "
                  to={`/@${post.username}`}>
                  {post.name}
                </Link>
              </div>
              <small class="text-xs text-gray-700">{post.date}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
