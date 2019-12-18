import React, { Fragment, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Row, Col, Image, Form, Button, FormGroup } from 'react-bootstrap';
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import signin from '../../assets/img/signin.jpg';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    console.log(email, password);

    setIsAuthenticated(true);
  };

  if (isAuthenticated) return <Redirect to="/2FA" />;

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

            {/* <Form.Group className="text-left" controlId="formBasicCheckbox">
              <Form.Check
                name="rememberMe"
                type="checkbox"
                label="Remember me"
              />
            </Form.Group> */}

            <FormGroup>
              <a className="d-block mb-3" href="#!">
                Forgot Password?
              </a>
            </FormGroup>

            <Button className="w-50" variant="primary" type="submit">
              LOG IN
            </Button>

            <Form.Text className="text-muted mt-4">or sign in using</Form.Text>

            <Button id="facebook" variant="default">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </Button>

            <Button id="google" variant="default">
              <FontAwesomeIcon icon={faGooglePlus} size="2x" />
            </Button>
          </Form>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Login;
