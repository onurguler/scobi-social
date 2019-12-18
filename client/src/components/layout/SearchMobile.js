import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchMobile = ({ className }) => {
  return (
    <div className={`dropdown ${className}`}>
      <button
        className="btn btn-default btn-sm text-gray-600 btn-default-gray-600"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <div
        className="dropdown-menu dropdown-menu-right"
        aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#!">
          Action
        </a>
        <a className="dropdown-item" href="#!">
          Another action
        </a>
        <a className="dropdown-item" href="#!">
          Something else here
        </a>
      </div>
    </div>
  );
};

export default SearchMobile;
