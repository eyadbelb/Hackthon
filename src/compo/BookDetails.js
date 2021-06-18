import { Details } from "../styles";

const BookDetails = (props) => {
  return (
    <Details>
      <h1> Tilte: {props.product.title}</h1>
      <h2> Author: {props.product.author} </h2>
      <h3> Genre: {props.product.genre}</h3>
      <h3> {props.product.available}</h3>
      <button onClick={() => props.setCurrentBook(null)}>GO BACK! </button>
      <button> Borrow</button>
    </Details>
  );
};
export default BookDetails;
