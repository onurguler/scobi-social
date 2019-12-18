import React, { Fragment } from 'react';

const Connections = () => {
  return (
    <Fragment>
      <h1 className="border-bottom pb-3">Connections</h1>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <div className="font-bold text-lg mt-4">
            You are connected to Google
          </div>
          <div className="text-gray-800 pb-4 mt-2">
            You can now sign in to Scobio using your Google account.
          </div>
        </div>
        <div>
          <div className="text-gray-600 font-bold">egeckmk@gmail.com</div>
          <a className="text-decoration-none text-gray-600" href="#!">
            <div className="text-right text-xs hover-red">(disconnect)</div>
          </a>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <div className="font-bold text-lg mt-4">
            You are connected to Facebook
          </div>
          <div className="text-gray-800 pb-4 mt-2">
            You can now sign in to Scobio using your Facebook account.
          </div>
        </div>
        <div>
          <div className="text-gray-600 font-bold">@egeckmk</div>
          <a className="text-decoration-none text-gray-600" href="#!">
            <div className="text-right text-xs hover-red">(disconnect)</div>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default Connections;
