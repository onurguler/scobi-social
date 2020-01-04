import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addScob } from '../../store/actions/scob';

const NewScob = ({ profile, addScob }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (text.trim() !== '') {
      addScob(text);
    }
  };
  return (
    <div className="mb-4 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm">
      <div className="d-flex mb-2 align-items-center w-100">
        <img
          className="rounded-circle fit-image"
          src={profile.user.avatar}
          width="50"
          height="50"
          alt=""
        />
        <div className="ml-3">
          <div className="font-weight-bold">{profile.user.name}</div>
        </div>
      </div>
      <form onSubmit={e => onSubmit(e)}>
        <div class="form-group shadow-textarea profile-post w-100">
          <textarea
            class="form-control z-depth-1"
            value={text}
            onChange={e => setText(e.target.value)}
            id="exampleFormControlTextarea6"
            rows="3"
            placeholder="Buraya bir şeyler yazın..."></textarea>
        </div>
        <button
          className="btn btn-outline-blue-500 profile-post w-100"
          type="submit">
          <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
          Scob
        </button>
      </form>
    </div>
  );
};

NewScob.propTypes = {
  profile: PropTypes.object.isRequired,
  addScob: PropTypes.func.isRequired
};

export default connect(null, { addScob })(NewScob);
