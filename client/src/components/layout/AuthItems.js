import React from 'react';
import AuthAccountDropdown from './AuthAccountDropdown';
import NotificationDropdown from './NotificationDropdown';

const AuthItems = () => {
  return (
    <div className="d-flex">
      <NotificationDropdown />
      <AuthAccountDropdown />
    </div>
  );
};

export default AuthItems;
