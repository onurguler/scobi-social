import React, { Fragment, useState } from 'react';
import { Row, Col, Image, Form, Button } from 'react-bootstrap';
import { faFacebook, faGooglePlus } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import signin from '../../assets/img/signin.jpg';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    password2: '',
    birth: new Date()
  });

  const { name, surname, email, password, password2, birth } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    console.log(name, surname, email, password, password2, birth);
  };

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

              <Col>
                <Form.Group controlId="formBasicSurname">
                  <Form.Control
                    value={surname}
                    onChange={e => onChange(e)}
                    name="surname"
                    type="text"
                    placeholder="Surname"
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
              <Form.Row>
                <Col className="align-self-center">
                  <Form.Label>Birth Date</Form.Label>
                </Col>

                <Col>
                  <DatePicker
                    className="ml-3 date-picker"
                    selected={birth}
                    onChange={date => setFormData({ ...formData, birth: date })}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group>
              <p>
                Already a Scober? <a href="#!"> LOG IN</a>
              </p>
            </Form.Group>

            <Button className="w-50" variant="primary" type="submit">
              SIGN UP
            </Button>

            <Form.Text className="text-muted mt-4">or sign up using</Form.Text>

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

export default Signup;
