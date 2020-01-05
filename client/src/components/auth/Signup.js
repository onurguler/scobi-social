import React, { Fragment, useState } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import signin from '../../assets/img/signin.jpg';
import Alert from '../layout/Alert';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../store/actions/alert';
import { register } from '../../store/actions/auth';

const Signup = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, username, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, username, email, password });
    }
    console.log(name, email, password, password2);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Fragment>
      <Row>
        <Col lg={4}>
          <Image
            className="img-fluid vh-100 d-none d-lg-block fit-image"
            src={signin}
          />
        </Col>

        <Col lg={8} className="justify-content-center vertical-center">
          <Form className="login-form text-center" onSubmit={e => onSubmit(e)}>
            <Alert />
            <h3 className="mb-5">
              By having a Scobio account, you can also create, vote, and comment
              on content.
            </h3>

            <Form.Row>
              <Col>
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    value={name}
                    onChange={e => onChange(e)}
                    name="name"
                    type="text"
                    placeholder="Name"
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Col>
                <Form.Group controlId="formBasicName">
                  <Form.Control
                    value={username}
                    onChange={e => onChange(e)}
                    name="username"
                    type="text"
                    placeholder="Username"
                  />
                </Form.Group>
              </Col>
            </Form.Row>

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

            <Form.Group controlId="formBasicPassword2">
              <Form.Control
                value={password2}
                onChange={e => onChange(e)}
                name="password2"
                type="password"
                placeholder="Password Again"
              />
            </Form.Group>

            <Form.Group>
              <p>
                Already a Scober? <Link to="/login"> LOG IN</Link>
              </p>
            </Form.Group>

            <Button className="w-50" variant="primary" type="submit">
              SIGN UP
            </Button>

            <Form.Text className="text-muted mt-4">or sign up using</Form.Text>

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

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
