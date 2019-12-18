import React, { Fragment } from 'react';
import { Form, Col, Button } from 'react-bootstrap';

const Education = () => {
  return (
    <Fragment>
      <Form className="m-4 mr-5">
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Level of Education</Form.Label>
          <Form.Control size="sm" as="select">
            <option>İlk Okul</option>
            <option>Orta Okul</option>
            <option>Lise</option>
            <option>Ön Lisans</option>
            <option>Lisans</option>
            <option>Yüksek Lisans</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Last School:</Form.Label>
          <Form.Control size="sm" type="text" placeholder="Aydın High School" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Current School:</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Süleyman Demirel University"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Languages:</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="English, French, ..."
          />
        </Form.Group>
        <Button className="float-right mb-4" variant="outline-success">
          Save
        </Button>
      </Form>
    </Fragment>
  );
};

export default Education;
