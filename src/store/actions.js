export const CREATE_BOOK = "CREATE_BOOK";
export const RETURN_BOOK = "RETURN_BOOK";

export const createBook = (newBook) => {
  return {
    type: CREATE_BOOK,
    payload: { newBook },
  };
};
export const returnBook = (bookId) => {
  return {
    type: RETURN_BOOK,
    payload: { bookId },
  };
};
