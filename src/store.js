// store.js
import { createStore } from 'redux';

const initialState = {
  value1: 5,
  value2: 8,
  value3: 50,
  value4_sumnb: 0,
  value5: 0,
  value6: 0,
  hotInstance_redux:null,
  value11:20,
  hotInstance12_redux:null,
  userLocale3:'en'
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
        case 'SET_VALUE6':
          return {
            ...state,
             value6: action.payload,
            //value4_sumnb: action.payload,
          };
          
        case 'SET_HOT':
          return {
            ...state,
            hotInstance_redux: action.payload,
            //value4_sumnb: action.payload,
          };
          
        case 'SET_VALUE11':
          //alert('set value11 triggered')
          return {
            ...state,
            value11: action.payload,
            //value4_sumnb: action.payload,
          };

          case 'SET_HOT12':
            return {
              ...state,
              hotInstance12_redux: action.payload,
              //value4_sumnb: action.payload,
            };
            case 'SET_USERLOCALE3':
            return {
              ...state,
              userLocale3: action.payload,
              //value4_sumnb: action.payload,
            };
            

    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
