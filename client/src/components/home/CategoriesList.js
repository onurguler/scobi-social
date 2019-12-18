import React, { Fragment } from 'react';

const CategoriesList = () => {
  return (
    <Fragment>
      <div className="border-bottom border-gray-400 py-2">
        <span className="h5 font-weight-bold">Categories</span>
      </div>
      <div>
        <ul className="list-unstyled mt-2">
          <li className="mb-2">
            <a className="text-decoration-none text-dark" href="#!">
              News
            </a>
          </li>
          <li className="mb-2">
            <a className="text-decoration-none text-dark" href="#!">
              Technology
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default CategoriesList;
