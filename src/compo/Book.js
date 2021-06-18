import { useDispatch, useSelector } from "react-redux";
import books from "../books";
import { returnBook } from "../store/actions";
import DeleteButton from "./buttons/DeleteButton";

const Book = (props) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(returnBook(props.product.id));
  };

  const book = props.product;
  return (
    <div>
      <h3 onClick={() => props.setCurrentBook(props.product)}>
        {" "}
        Title: {book.title}
      </h3>
      <h3 onClick={() => props.setCurrentBook(props.product)}>
        {" "}
        Author :{book.author}{" "}
      </h3>
      <h3> Genre : {book.genre}</h3>
      <h3> available : {book.available ? "Yes" : "No"}</h3>
      <button onClick={handleClick}> Return </button>
      {/* <DeleteButton deleteBook={props.deleteBook} bookId={book.id} /> */}
    </div>
  );
};

export default Book;
