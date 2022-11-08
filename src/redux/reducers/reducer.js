import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';

const reducer = combineReducers({
  todos,
  filter,
});

export default reducer;

// import { combineReducers } from 'redux';

// const reducer = combineReducers({
//   todos: todosReducer,
//   filter: filterReducer,
// });

// export default reducer;
