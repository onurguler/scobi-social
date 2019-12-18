import React, { Fragment, useEffect } from 'react';
import Trending from './Trending';
import PopularTopics from './PopularTopics';
import CategoriesList from './CategoriesList';
import queryString from 'query-string';

const Home = ({ location, history }) => {
  useEffect(() => {
    var query = queryString.parse(location.search);
    if (query.token) {
      localStorage.setItem('token', query.token);
      history.push('/');
    }
  }, [location, history]);

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
