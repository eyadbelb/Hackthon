import { useState } from "react";
import books from "../books";
import Book from "./Book";
import SearchBar from "./SearchBar";
import { BookDiv } from "../styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookList = (props) => {
  const books = useSelector((state) => state.books);

  const [query, setQuery] = useState("");
  let arrayOfBooks = books
    .filter(
      (book) =>
        book.author.toLowerCase().includes(query.toLowerCase()) ||
        book.title.toLowerCase().includes(query.toLowerCase()) ||
        book.genre.find((book) =>
          book.toLowerCase().includes(query.toLowerCase())
        )
    )

    .map((book) => (
      <Book
        key={book.id}
        product={book}
        setCurrentBook={props.setCurrentBook}
        deleteBook={props.deleteBook}
      />
    ));

  return (
    <div>
      <h1> Books List</h1>
      <SearchBar setQuery={setQuery} />
      <button> ADD NEW BOOK</button>

      <list> {arrayOfBooks}</list>
      <Link to="/addbook"></Link>
    </div>
  );
};

export default BookList;
