import members from "../members";
import books from "../books";
import slugify from "slugify";
import { CREATE_BOOK, RETURN_BOOK } from "./actions";

const initialState = {
  members: members,
  books: books,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      const { newBook } = action.payload;
      newBook.id = +state.books[state.books.length - 1].id + 1;
      newBook.slug = slugify(action.payload.newBook.title);
      return {
        ...state,
        books: [...state.books, newBook],
      };

    case RETURN_BOOK:
      const book = books.find((book) => book.id === action.payload.bookId);
      if (book.available === true) {
        book.available = false;
      } else {
        book.available = true;
      }

      return {
        ...state,
        books: [...state.books],
      };
    default:
      return state;
  }
};

export default reducer;
