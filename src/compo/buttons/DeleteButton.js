const DeleteButton = (props) => {
  return (
    <button onClick={() => props.deleteBook(props.bookId)}> Delete</button>
  );
};

export default DeleteButton;
