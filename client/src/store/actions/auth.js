import axios from 'axios';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REDIRECT_TWO_FA,
  GET_TOKEN,
  UPDATE_TWO_FA
} from './types';
import setAuthToken from '../../utils/setAuthToken';
import { getCurrentProfile } from './profile';
import { getUsersBookmarks } from './post';

// Load User
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/auth');

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });

    dispatch(getCurrentProfile());

    dispatch(getUsersBookmarks());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Register User
export const register = ({
  name,
  username,
  email,
  password
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, username, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    if (res.data.two_fa) {
      return dispatch({
        type: REDIRECT_TWO_FA,
        payload: res.data
      });
    }

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors ? err.response.data.errors : false;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    console.log(err);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

export const getToken = user_id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    let res = await axios.get('/api/auth/totp-secret');
    const secret = res.data.secret;

    const body = JSON.stringify({ secret, user_id });
    res = await axios.post('/api/auth/totp-generate', body, config);

    dispatch({
      type: GET_TOKEN,
      payload: { secret }
    });
  } catch (err) {
    // const errors = err.response.data.errors;
    // if (errors) {
    //   errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    // }
    console.log(err);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Login User 2FA
export const login_2fa = (secret, token, user_id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ secret, token, user_id });

  try {
    const res = await axios.post('/api/auth/totp-validate', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    console.log(err);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout / Clear Profile
export const logout = () => dispatch => {
  // dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};

export const enableTwoFactorAuth = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ two_fa: true });
  try {
    await axios.post('/api/settings/two-factor-auth', body, config);
    dispatch({
      type: UPDATE_TWO_FA,
      payload: true
    });
  } catch (error) {
    console.error(error);
  }
};

export const disableTwoFactorAuth = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ two_fa: false });
  try {
    await axios.post('/api/settings/two-factor-auth', body, config);
    dispatch({
      type: UPDATE_TWO_FA,
      payload: false
    });
  } catch (error) {
    console.error(error);
  }
};
