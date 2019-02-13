import { combineReducers } from 'redux';
import BooksReducer form './reducer_books';
const rootReducer = combineReducers({
  books: BooksReducer;
});

export default rootReducer;
