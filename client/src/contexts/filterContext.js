import {createContext, useReducer} from 'react';

export const FilterContext = createContext();

const initialState = {
  isFilter: false,
  data: {
    typeRent: 'day',
    price: '1200000',
    amenities:'pet Allowed',
    bedroom: '2',
    bathroom: '1',
  }
}
const reducer = (state, action) =>{
  // const { type, payload } = action
  switch (action.type) {
    case "Filter":
      return {
        ...state,
        isFilter: true,
        data: action.payload,
      };
    case "notFilter":
      return {
        ...state,
        isFilter: false,
        data: null,
      };
    default:
      throw new Error("unknown cases");
  }
};


export const FilterContextProvider = ({children}) => {
  const [state, filterDispatch] = useReducer(reducer, initialState);

  return (
    <FilterContext.Provider value={[ state, filterDispatch ]}>
      {children}
    </FilterContext.Provider>
  )
}
