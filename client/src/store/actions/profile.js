import axios from 'axios';
import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_FOLLOWERS,
  GET_CURRENT_PROFILE
} from './types';

// Get current users profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_CURRENT_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Get profile by ID
export const getProfileByUsername = username => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/${username}`);

    await dispatch({ type: CLEAR_PROFILE });

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    // dispatch({
    //   type: PROFILE_ERROR,
    //   payload: { msg: err.response.statusText, status: err.response.status }
    // });
  }
};

export const follow = username => async dispatch => {
  try {
    const { data } = await axios.put(`/api/profile/follow/${username}`);

    dispatch({
      type: UPDATE_FOLLOWERS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};

export const unfollow = username => async dispatch => {
  try {
    const { data } = await axios.put(`/api/profile/unfollow/${username}`);

    dispatch({
      type: UPDATE_FOLLOWERS,
      payload: data
    });
  } catch (error) {
    console.log(error);
  }
};
