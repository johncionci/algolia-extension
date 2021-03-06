import { actionTypes } from './actions';

const {
  CATCH_SETTINGS_ERROR,
  RECEIVE_SETTINGS,
  REQUEST_SETTINGS,
  START_SETTINGS_LOAD,
  FINISH_SETTINGS_LOAD,
} = actionTypes;

const defaultState = {
  data: undefined,
  error: undefined,
  finishedLoadAt: undefined,
  isLoading: false,
  startedLoadAt: undefined,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CATCH_SETTINGS_ERROR:
      return {
        ...state,
        error: action.error.message || action.error,
        finishedLoadAt: Date.now(),
        isLoading: false,
      };
    case RECEIVE_SETTINGS:
      return {
        ...state,
        data: action.settings,
        error: undefined,
        finishedLoadAt: Date.now(),
        isLoading: false,
      };
    case REQUEST_SETTINGS:
      return {
        ...state,
        isLoading: true,
        startedLoadAt: Date.now(),
      };
    case START_SETTINGS_LOAD:
      return {
        ...state,
        isLoading: true,
        startedLoadAt: Date.now(),
      };
    case FINISH_SETTINGS_LOAD:
      return {
        ...state,
        finishedLoadAt: Date.now(),
        isLoading: false,
      };
    default:
      return state;
  }
};
