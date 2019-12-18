import React, { Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';

const ProfileEdit = () => {
  return (
    <Fragment>
      <div className="mw-100 min-vh-100 bg-gray-300">
        <div className="flex flex-column d-flex align-items-center justify-content-center mx-auto">
          <div className="col-lg-5 mx-auto">
            <div className="d-lg-flex align-items-center justify-content-between mx-auto">
              <div className="d-flex d-lg-block justify-content-center mx-auto order-1 order-lg-2">
                <img
                  className="rounded-circle fit-image mt-5 mr-md-4 ml-4 "
                  src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
                  alt=""
                  width="150"
                  height="150"
                />
              </div>
              <div className="mt-4 order-2 order-lg-1">
                <Form className="">
                  <Form.Group>
                    <Form.Control
                      className="border-0 bg-gray-300 colorpleaceholder text-3xl font-bold"
                      type="text"
                      placeholder="Enter your name "
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      className="border-0 bg-gray-300 colorpleaceholder"
                      as="textarea"
                      rows="3"
                      type="text"
                      placeholder="Enter a short bio"
                      style={{
                        resize: 'none'
                      }}
                    />
                  </Form.Group>
                </Form>
              </div>
            </div>
            <Button variant="outline-primary">Save</Button>
            <Button className="ml-3" variant="outline-secondary">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileEdit;
