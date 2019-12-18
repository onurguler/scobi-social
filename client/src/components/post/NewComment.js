import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

const NewComment = () => {
  return (
    <div className="mb-4 border rounded-lg px-4 py-4 bg-white profile-post shadow-sm">
      <div className="d-flex mb-2 align-items-center w-100">
        <img
          className="rounded-circle fit-image"
          src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
          width="50"
          height="50"
          alt=""
        />
        <div className="ml-3">
          <div className="font-weight-bold">Ege Çakmak</div>
        </div>
      </div>
      <div class="form-group shadow-textarea profile-post w-100">
        <textarea
          class="form-control z-depth-1"
          id="exampleFormControlTextarea6"
          rows="3"
          placeholder="Buraya bir şeyler yazın..."></textarea>
      </div>
      <button className="btn btn-outline-blue-500 profile-post w-100">
        <FontAwesomeIcon icon={faPlusSquare} className="mr-2" />
        Comment
      </button>
    </div>
  );
};

export default NewComment;
