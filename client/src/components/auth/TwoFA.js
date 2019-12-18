import React, { Fragment } from 'react';
import tfa_icon from '../../assets/img/2fa_icon.png';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TwoFA = () => {
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
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faGoogle} className="mr-2" />
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                placeholder="Code"
              />
              <button className="btn btn-blue-500 ml-2">Verify</button>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default TwoFA;
