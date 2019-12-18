import React from 'react';

const NotificationItem = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="d-flex">
        <img
          className="rounded-circle fit-image"
          src="https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/p960x960/65123467_10219910636463233_5371741452810321920_o.jpg?_nc_cat=102&_nc_oc=AQllQE9F2oHnz03qbVXp8zJ2yRunR6djtQEc5PDdaZqjBgLbED-_WZqdI-tfvCMpPc4&_nc_ht=scontent-otp1-1.xx&oh=360ed3d04eab2e7462dd54d33479b6e0&oe=5E5343CC"
          width="50"
          height="50"
          alt=""
        />
        <div className="ml-3">
          <div className="text-wrap text-sm">
            <span className="font-weight-bold">Ege Çakmak</span>{' '}
            <span>liked your post:</span>
          </div>
          <div className="text-wrap truncate-3-lines text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni
            atque modi nulla et obcaecati repellendus ipsa laboriosam, omnis hic
            earum.
          </div>
          <div>
            <small className="text-secondary">Nov 15</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;
