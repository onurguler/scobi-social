import React, { Fragment } from 'react';

const Education = () => {
  return (
    <Fragment>
      <h1 className="border-bottom pb-3">Privacy & Security</h1>
      <div className="font-bold text-lg mt-4">
        Change your login password for Scobio
      </div>
      <div className="text-gray-800 mt-2 border-bottom pb-4">
        <span>Your password: </span>************
      </div>
      <div className="font-bold text-lg mt-4">Enable 2FA</div>
      <div className="text-gray-800 mt-2 border-bottom pb-4">
        aaaaaaaaaaaaaaaaaaa
      </div>
      <div className="font-bold text-lg mt-4">Deactivate account</div>
      <div className="text-gray-800 mt-2">
        Deactivating your account will remove it from Scobio within a few
        minutes. You can sign back in anytime to reactivate your account and
        restore its content.
      </div>
      <div className="border-bottom pb-4 mt-2">
        <a
          href="#!"
          className="text-gray-600"
          style={{ textDecoration: 'underline' }}>
          <span className="hover-red">Deactivate account</span>
        </a>
      </div>
      <div className="font-bold text-lg mt-4">Delete account</div>
      <div className="text-gray-800 mt-2">
        Permanently delete your account and all of your content.
      </div>
      <div className="pb-4 mt-2 mb-4">
        <a
          href="#!"
          className="text-gray-600"
          style={{ textDecoration: 'underline' }}>
          <span className="hover-red">Delete account</span>
        </a>
      </div>
    </Fragment>
  );
};

export default Education;
