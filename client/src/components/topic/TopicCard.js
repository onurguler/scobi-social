import React from 'react';
import { Link } from 'react-router-dom';

const TopicCard = () => {
  return (
    <div class="card mb-3 home-post-card mb-4 overflow-hidden">
      <div class="row no-gutters">
        <div class="col-2 col-md-4">
          <Link to="/posts">
            <img
              src="https://images.unsplash.com/photo-1558981420-c532902e58b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              class="card-img fit-image rounded-0"
              width="200"
              height="200"
              alt="..."
            />
          </Link>
        </div>
        <div class="col-10  col-md-8">
          <div class="card-body">
            <Link to="/posts" className="text-decoration-none text-gray-900">
              <h5 class="card-title truncate-2-lines">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi odio repellendus facilis officia quo veniam molestias
                nihil quis neque unde!
              </h5>
            </Link>
            <Link to="/posts" className="text-decoration-none text-gray-700">
              <p class="card-text font-smaller truncate-2-lines">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores sit earum natus officia placeat reprehenderit autem
                nihil aut ratione.
              </p>
            </Link>
            <div class="card-text">
              <div className="mt-2">
                <Link
                  className="text-decoration-none text-gray-900 text-sm "
                  to="/profile">
                  John Doe
                </Link>
              </div>
              <small class="text-xs text-gray-700">
                Last updated yesterday
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
