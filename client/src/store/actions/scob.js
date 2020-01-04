import axios from 'axios';
import { GET_SCOBS, ADD_SCOB, DELETE_SCOB } from './types';

export const getUsersScobs = username => async dispatch => {
  try {
    const { data } = await axios.get(`/api/scobs/user/${username}`);

    dispatch({
      type: GET_SCOBS,
      payload: data
    });
  } catch (error) {
    console.error(error);
  }
};

export const addScob = text => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const { data } = await axios.post('/api/scobs', { text }, config);

    dispatch({
      type: ADD_SCOB,
      payload: data
    });

    return data._id;
  } catch (error) {
    console.error(error);
  }
};

export const deleteScob = id => async dispatch => {
  try {
    await axios.delete(`/api/scobs/${id}`);

    dispatch({
      type: DELETE_SCOB,
      payload: id
    });
  } catch (error) {
    console.error(error);
  }
};
