export function selectBook(book){
  // selectBook is an ActionCreator, it needs to return an action,
  // an oject with an type property
  return{
   type: 'BOOK_SELECTED',
   payload: book;
  };
}
