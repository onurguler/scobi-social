import React, { Fragment } from 'react';
import Trending from './Trending';
import PopularTopics from './PopularTopics';
import CategoriesList from './CategoriesList';

const Home = () => {
  return (
    <Fragment>
      <div className="container pt-3">
        <Trending />

        <div className="row mt-3">
          <div className="col-lg-8">
            <PopularTopics />
          </div>
          <div className="col-lg-4 pl-5">
            <CategoriesList />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
