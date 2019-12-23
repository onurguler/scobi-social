import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addComment } from '../../store/actions/post';
import PropTypes from 'prop-types';

const NewComment = ({ user, addComment, post_id }) => {
  const [formData, setFormData] = useState({
    text: ''
  });

  const { text } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    addComment(post_id, formData);
  };
  return (
    <div className="mb-4 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm">
      <div className="d-flex mb-2 align-items-center w-100">
        <img
          className="rounded-circle fit-image"
          src={user && user.avatar}
          width="50"
          height="50"
          alt=""
        />
        <div className="ml-3">
          <div className="font-weight-bold">{user && user.name}</div>
        </div>
      </div>
      <form onSubmit={e => onSubmit(e)}>
        <div class="form-group shadow-textarea profile-post w-100">
          <textarea
            class="form-control z-depth-1"
            name="text"
            id="exampleFormControlTextarea6"
            rows="3"
            value={text}
            onChange={e => onChange(e)}
            placeholder="Buraya bir şeyler yazın..."></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-outline-blue-500 profile-post w-100">
          <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
          Comment
        </button>
      </form>
    </div>
  );
};

NewComment.propTypes = {
  addComment: PropTypes.func.isRequired,
  post_id: PropTypes.string.isRequired
};

export default connect(null, { addComment })(NewComment);
