const initialState = { cart: [] };

function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'cart/add':
      return { ...state, cart: action.payload };
    default:
      return state;
  }
}

//   // Check to see if the reducer cares about this action
//   if (action.type === 'counter/increment') {
//     // If so, make a copy of `state`
//     return {
//       ...state,
//       // and update the copy with the new value
//       value: state.value + 1,
//     };
//   }
//   // otherwise return the existing state unchanged
//   return state;
// }

export { appReducer, initialState };
