import React, { Fragment, useEffect, useState } from 'react';
import tfa_icon from '../../assets/img/2fa_icon.png';
import { Redirect } from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { getToken, login_2fa } from '../../store/actions/auth';
import PropTypes from 'prop-types';

const TwoFA = ({ auth, getToken, login_2fa }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (auth.user) {
      getToken(auth.user.id);
    }
  }, [getToken]);

  if (!auth.user && !auth.two_fa) {
    return <Redirect to="/" />;
  }

  const onSubmit = e => {
    e.preventDefault();

    if (token) {
      login_2fa(auth.secret, token, auth.user.id);
    }
  };

  if (auth.isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <Fragment>
      <div className="min-vh-100">
        <form className="justify-content-center d-flex align-items-center mt-4">
          <img
            width="210"
            height="230"
            //className="img-fluid vh-100 d-none d-lg-block fit-image"
            src={tfa_icon}
            alt="tfa"
          />
          <div className="col-5">
            <div className="text-center">
              <h4>Two Factor Authentication</h4>
            </div>
            <p className="text-center mt-3">
              Please enter the code generated on Google Authenticatior App
            </p>

            <form
              className="d-flex align-items-center"
              onSubmit={e => onSubmit(e)}>
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              <input
                value={token}
                onChange={e => setToken(e.target.value)}
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Code"
              />
              <button type="submit" className="btn btn-blue-500 ml-2">
                Verify
              </button>
            </form>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

TwoFA.propTypes = {
  auth: PropTypes.object.isRequired,
  getToken: PropTypes.func.isRequired,
  login_2fa: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  const { auth } = state;
  return { auth };
};

export default connect(mapStateToProps, { getToken, login_2fa })(TwoFA);
