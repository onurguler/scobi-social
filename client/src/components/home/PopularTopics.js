import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import TopicCard from '../topic/TopicCard';

const PopularTopics = () => (
  <Fragment>
    <div className="pr-2 py-2 border-bottom border-gray-400 mb-4">
      <span className="h5 font-weight-bold">Technology</span>
      <Link
        className="float-right text-decoration-none text-gray-600"
        to={`/topic/technology`}>
        More
        <FontAwesomeIcon className="align-middle ml-2" icon={faChevronRight} />
      </Link>
    </div>

    <TopicCard />
    <TopicCard />
    <TopicCard />
    <TopicCard />
    <TopicCard />
  </Fragment>
);

export default PopularTopics;
