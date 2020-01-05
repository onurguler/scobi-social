import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import signin from '../../assets/img/signin.jpg';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login } from '../../store/actions/auth';
import Alert from '../layout/Alert';

const Login = ({ isAuthenticated, login, two_fa }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) return <Redirect to="/" />;

  if (two_fa) return <Redirect to="/2FA" />;

  return (
    <Fragment>
      <Row>
        <Col lg={4}>
          <Image
            className="img-fluid vh-100 d-none d-lg-block fit-image"
            src={signin}
          />
        </Col>

        <Col className="justify-content-center mx-auto vertical-center p-5">
          <Form className="login-form text-center" onSubmit={e => onSubmit(e)}>
            <Alert />

            <h3 className="mb-5">Login to continue</h3>

            <Form.Group controlId="formBasicEmail">
              <Form.Control
                value={email}
                onChange={e => onChange(e)}
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Control
                value={password}
                onChange={e => onChange(e)}
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            {/* <FormGroup>
              <a className="d-block mb-3" href="#!">
                Forgot Password?
              </a>
            </FormGroup> */}

            <Button className="w-50" variant="primary" type="submit">
              LOG IN
            </Button>

            <Form.Text className="text-muted mt-4">or sign in using</Form.Text>

            <Button id="facebook" variant="default">
              <a
                className="text-decoration-none"
                href="http://scobi.social/api/auth/google">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </Button>

            <Button id="google" variant="default">
              <a
                className="text-decoration-none text-danger"
                href="http://scobi.social/api/auth/google">
                <FontAwesomeIcon icon={faGooglePlus} size="2x" />
              </a>
            </Button>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  two_fa: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  const { auth } = state;

  return { isAuthenticated: auth.isAuthenticated, two_fa: auth.two_fa };
};

export default connect(mapStateToProps, { login })(Login);
