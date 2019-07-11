import { INCREMENT, DECREMENT } from '../actions';

const initialState = {
  count: 0
}

// Our reducer that handles our two action cases:
// increment and decrement. It receives the state
// of our redux store, along with an action created
// by our action creator. What does the reducer
// need to do with the count in each case? 
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
     const addOne = state.count + 1
      return {
        count:addOne
      }
    case DECREMENT:
      const decOne = state.count -1
      return {
        count: decOne
      }
    default:
      return state;
  }
};
