
// Filters Reducer

const filtersReducerDefaultState = {
  inverterManufacturer: ''
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_INVERTER_MANUFACTURER_FILTER':
      return {
        ...state,
        inverterManufacturer: action.inverterManufacturer
      };
    default:
      return state;
  }
};
