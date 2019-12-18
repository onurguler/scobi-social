import React, { Fragment } from 'react';
import 'react-datepicker/dist/react-datepicker.css';

import EmailSettings from '../settings/EmailSettings';
import Connections from '../settings/Connections';
import Account from '../settings/Account';
import Privacy from '../settings/Privacy';

const Settings = () => {
  return (
    <Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-3 d-none d-xl-block">
            <div className="position-fixed">
              <h3 className="mb-4 font-bold">Settings</h3>

              <a
                className="text-gray-600 text-decoration-none"
                href="#EmailSettings">
                <p>Email Settings</p>
              </a>
              <a
                className="text-gray-600 text-decoration-none"
                href="#Connections">
                <p>Connections</p>
              </a>
              <a className="text-gray-600 text-decoration-none" href="#Account">
                <p>Account</p>
              </a>
              <a className="text-gray-600 text-decoration-none" href="#Privacy">
                <p>Privacy</p>
              </a>
            </div>
          </div>
          <div className="col-lg-9">
            <section id="EmailSettings">
              <EmailSettings />
            </section>
            <section id="Connections">
              <Connections />
            </section>
            <section id="Account">
              <Account />
            </section>
            <section id="Privacy">
              <Privacy />
            </section>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;
