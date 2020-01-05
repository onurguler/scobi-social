import React, { Fragment, useEffect } from 'react';
import CategoriesList from './CategoriesList';
import queryString from 'query-string';
import TopicCard from '../topic/TopicCard';
import { connect } from 'react-redux';
import { getPosts } from '../../store/actions/post';
import PropTypes from 'prop-types';

const Home = ({ location, history, post: { posts, loading }, getPosts }) => {
  useEffect(() => {
    var query = queryString.parse(location.search);
    if (query.token) {
      localStorage.setItem('token', query.token);
      history.push('/');
    }

    getPosts();
  }, [location, history, getPosts]);

  return (
    <Fragment>
      <div className="container pt-3 min-vh-100">
        {/* <Trending /> */}

        <div className="row mt-3">
          <div className="col-lg-8">
            {/* <PopularTopics /> */}
            <div className="border-bottom border-gray-400 py-2 mb-4">
<<<<<<< HEAD
              <span className="h5 font-weight-bold">Categories</span>
            </div>
            {posts.length === 0 && <p>There are no posts yet.</p>}
=======
              <span className="h5 font-weight-bold">Latest posts on Scobi</span>
            </div>
            {posts.length === 0 && (
              <p className="my-2">There are no posts yet.</p>
            )}
>>>>>>> deploy
            {!loading && posts.map(post => <TopicCard post={post} />)}
          </div>
          <div className="col-lg-4 pl-5">
            <CategoriesList />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Home.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { post } = state;

  return { post };
};

export default connect(mapStateToProps, { getPosts })(Home);
