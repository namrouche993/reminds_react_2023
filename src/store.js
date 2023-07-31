// store.js
import { createStore } from 'redux';

const initialState = {
  value1: 5,
  value2: 8,
  value3: 50,
  value4_sumnb: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VALUE1':
      return {
        ...state,
        value1: action.payload,
      };
    case 'SET_VALUE2':
      return {
        ...state,
        value2: action.payload,
      };
    case 'SET_VALUE3':
      return {
        ...state,
        value3: action.payload,
      };
      case 'SET_VALUE4':
        return {
          ...state,
           value4_sumnb: state.value4_sumnb+action.payload,
          //value4_sumnb: action.payload,
        };
        case 'SET_VALUE5':
        return {
          ...state,
           value5: action.payload,
          //value4_sumnb: action.payload,
        };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
