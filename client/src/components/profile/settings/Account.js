import React, { Fragment } from 'react';

const Account = () => {
  return (
    <Fragment>
      <h1 className="border-bottom pb-3">Account</h1>
      <div className="font-bold text-lg mt-4">Your username</div>
      <div className="text-gray-800 mt-2 border-bottom pb-4">
        <span className="text-gray-600">https://scobio.social/@</span>egeckmk
      </div>
      <div className="font-bold text-lg mt-4">Manage blocked users</div>
      <div className="text-gray-800 mt-2 border-bottom pb-4">
        See a list of all the users you've blocked.
      </div>
      <div className="font-bold text-lg mt-4">Download your information</div>
      <div className="text-gray-800 mt-2 pb-4 mb-4">
        Download a copy of the imformation you've shared on Scobio to a .zip
        file.
      </div>
    </Fragment>
  );
};

export default Account;
