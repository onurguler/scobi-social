import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchInput = ({ className }) => {
  return (
    <div className={`input-group input-group-sm ${className}`}>
      <input
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-gray-600 px-3">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
