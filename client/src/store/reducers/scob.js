import { GET_SCOBS, ADD_SCOB, DELETE_SCOB } from '../actions/types';

const initialState = {
  scobs: [],
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SCOBS:
      return {
        ...state,
        scobs: payload,
        loading: false
      };
    case ADD_SCOB:
      return {
        ...state,
        scobs: [payload, ...state.scobs],
        loading: false
      };
    case DELETE_SCOB:
      return {
        ...state,
        scobs: state.scobs.filter(scob => scob._id !== payload),
        loading: false
      };
    default:
      return state;
  }
}
