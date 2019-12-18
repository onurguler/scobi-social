import React, { Fragment } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';

const OverView = () => {
  return (
    <Fragment>
      <Form className="m-4">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" placeholder="Name" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Bio:</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Form.Group>
          <Form.Row>
            <Col className="align-self-center">
              <Form.Label>Birth Date:</Form.Label>

              <DatePicker
                className="ml-3 date-picker"
                selected={new Date()}
                onChange={''}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </Col>
          </Form.Row>
        </Form.Group>
        <Button className="float-right mb-4" variant="outline-success">
          Save
        </Button>
      </Form>
    </Fragment>
  );
};

export default OverView;
