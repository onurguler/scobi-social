import React, { Fragment, useState } from 'react';

const EmailSettings = () => {
  const defaultEmail = 'egeckmk@gmail.com';
  const [editEmail, setEditEmail] = useState(false);
  const [email, setEmail] = useState(defaultEmail);
  return (
    <Fragment>
      <div className="border-bottom pb-3 text-2xl font-bold">
        Email Settings
      </div>
      <div className="d-flex flex align-items-center justify-content-between flex-wrap border-bottom pb-4 mt-4">
        <div>
          <div className="font-bold text-lg">Your email</div>
          {editEmail ? (
            <input
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              className="form-control non-style-input"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              autoFocus={true}
            />
          ) : (
            <div className="text-gray-800 mt-2">egeckmk@gmail.com</div>
          )}
        </div>
        {editEmail ? (
          <div className="d-flex my-2 sm:my-0">
            <button className="btn btn-outline-green-500 text-sm mr-2">
              Save
            </button>
            <button
              onClick={() => {
                setEditEmail(!editEmail);
                setEmail(defaultEmail);
              }}
              className="btn border-gray-400 text-gray-600 btn-outline-gray-500 text-sm">
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditEmail(!editEmail)}
            className="btn border-gray-400 text-gray-600 btn-outline-gray-500 text-sm btn-sm">
            Edit email
          </button>
        )}
      </div>
      <div className="flex d-flex justify-content-between align-items-start mt-4">
        <div>
          <div className="font-bold text-lg">Emails from Scobers</div>
          <div className="text-gray-800 mt-2">
            Receive notifications when people you follow share a new post.
          </div>
        </div>

        <div class="btn-group" role="group" aria-label="Basic example">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-green-500 px-3 btn-sm">
              <input
                type="radio"
                name="options"
                id="option1"
                autocomplete="off"
                checked={true}
                onClick
              />
              On
            </label>
            <label class="btn border-gray-400 text-gray-600 btn-outline-gray-500 px-3 btn-sm">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              />
              Off
            </label>
          </div>
        </div>
      </div>

      <div className="border-bottom pb-4">
        <div className="font-bold text-lg mt-4 ">Followed Scobers</div>
        <div className="text-gray-800 mt-2">
          Control which emails are sent to you from scobers you follow.
        </div>
        <button className="btn btn-default-gray-600 border-gray-600 btn-sm text-gray-600 mt-2">
          Manage followed scobers emails
        </button>
      </div>

      <div className="flex d-flex justify-content-between align-items-start border-bottom pb-4 mt-4">
        <div>
          <div className="font-bold text-lg">Social notifications</div>
          <div className="text-gray-800 mt-2">
            Notifications when someone follows you.
          </div>
        </div>

        <div class="btn-group" role="group" aria-label="Basic example">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-green-500 px-3 btn-sm">
              <input
                type="radio"
                name="options"
                id="option1"
                autocomplete="off"
                checked={true}
                onClick
              />
              On
            </label>
            <label class="btn border-gray-400 text-gray-600 btn-outline-gray-500 px-3 btn-sm">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              />
              Off
            </label>
          </div>
        </div>
      </div>

      <div className="flex d-flex justify-content-between align-items-start border-bottom pb-4 mt-4 flex-wrap">
        <div>
          <div className="font-bold text-lg">Mention notifications</div>
          <div className="text-gray-800 mt-2">
            Notifications when people mention you in their posts on Scobio.
          </div>
        </div>

        <div class="btn-group mt-2" role="group" aria-label="Basic example">
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label class="btn border-gray-400 text-gray-600 btn-outline-gray-500 px-3 btn-sm">
              <input
                type="radio"
                name="options"
                id="option1"
                autocomplete="off"
                checked={true}
                onClick
              />
              All
            </label>
            <label class="btn btn-green-500 px-3 btn-sm">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              />
              Network
            </label>
            <label class="btn border-gray-400 text-gray-600 btn-outline-gray-500 px-3 btn-sm">
              <input
                type="radio"
                name="options"
                id="option2"
                autocomplete="off"
              />
              Off
            </label>
          </div>
        </div>
      </div>
      <div className="font-bold text-lg mt-4">Updates for Scobers</div>
      <div className="text-gray-800  pb-5 mt-2">
        Notifications on your scobs.
      </div>
    </Fragment>
  );
};

export default EmailSettings;
