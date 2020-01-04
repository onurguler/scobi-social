import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  enableTwoFactorAuth,
  disableTwoFactorAuth
} from '../../../store/actions/auth';
import PropTypes from 'prop-types';

const Privacy = ({ auth, enableTwoFactorAuth, disableTwoFactorAuth }) => {
  return (
    <Fragment>
      <h1 className="border-bottom pb-3">Privacy & Security</h1>
      <div className="font-bold text-lg mt-4">
        Change your login password for Scobio
      </div>
      <div className="text-gray-800 mt-2 border-bottom pb-4">
        <span>Your password: </span>************
      </div>
      <div className="mt-4 d-flex justify-content-between">
        <div className="font-bold text-lg">Enable 2FA</div>
        {auth.user && auth.user.two_fa ? (
          <button
            className="btn btn-outline-green-500"
            onClick={() => disableTwoFactorAuth()}>
            Disable
          </button>
        ) : (
          <button
            className="btn btn-outline-green-500"
            onClick={() => enableTwoFactorAuth()}>
            Enable
          </button>
        )}
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

Privacy.propTypes = {
  auth: PropTypes.object.isRequired,
  enableTwoFactorAuth: PropTypes.func.isRequired,
  disableTwoFactorAuth: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps, {
  enableTwoFactorAuth,
  disableTwoFactorAuth
})(Privacy);
