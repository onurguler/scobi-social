import React, { Fragment } from 'react';
import TopicCard from './TopicCard';

const Topic = () => {
  return (
    <Fragment>
      <div className="flex flex-column d-flex bg-gray-300 text-center p-5 shadow">
        <h1>Technology</h1>
      </div>

      <div className="container my-4">
        <div className="row">
          <div className="col-lg-4 order-lg-2">asdasd</div>
          <div className="col-lg-8 order-lg-1">
            <div className="flex d-flex border-bottom pb-2 px-2 mb-4">
              <a
                href="#!"
                className="mr-4 font-weight-bolder text-decoration-none text-gray-900">
                Latest
              </a>
              <a
                href="#!"
                className="mr-4 font-weight-bolder text-decoration-none text-gray-900">
                Popular
              </a>
              <a
                href="#!"
                className="mr-4 font-weight-bolder text-decoration-none text-gray-900">
                Trending
              </a>
              <a
                href="#!"
                className="mr-4 font-weight-bolder text-decoration-none text-gray-900">
                Hot
              </a>
            </div>

            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Topic;
