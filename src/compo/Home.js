import { MainDiv } from "../styles";

import BookList from "./BookList";
import MemberList from "./MemberList";
import SearchBar from "./SearchBar";
import books from "../books";
import BookDetails from "./BookDetails";
import { useState } from "react";
import members from "../members";
import MemberDetails from "./MemberDetails";
import { Switch, Route } from "react-router";

const Home = () => {
  const [currnetBook, setCurrentBook] = useState(null);
  const [currnetMember, setCurrentMember] = useState(null);
  const [_product, SetProduct] = useState(books);
  const [_productt, SetProductt] = useState(members);

  const deleteBook = (bookId) => {
    let newBooks = _product.filter((book) => book.id !== bookId);
    SetProduct(newBooks);
  };

  const deleteMember = (memberId) => {
    let newMembers = _productt.filter((member) => member.id !== memberId);
    SetProductt(newMembers);
  };

  const setView = () => {
    if (currnetBook)
      return (
        <Route exact path="/">
          <BookDetails product={currnetBook} setCurrentBook={setCurrentBook} />
        </Route>
      );
    else
      return (
        <Route exact path="/">
          <BookList
            setCurrentBook={setCurrentBook}
            books={_product}
            deleteBook={deleteBook}
          />
        </Route>
      );
  };
  const setVieww = () => {
    if (currnetMember)
      return (
        <Route exact path="/">
          <MemberDetails
            productm={currnetMember}
            setCurrentMember={setCurrentMember}
          />
        </Route>
      );
    else
      return (
        <Route exact path="/">
          <MemberList
            setCurrentMember={setCurrentMember}
            members={_productt}
            deleteMember={deleteMember}
          />
        </Route>
      );
  };
  return (
    <MainDiv>
      <h1> Library </h1>

      {setView()}

      {setVieww()}
      <button> BOOKS</button>
      <button>Members</button>
    </MainDiv>
  );
};

export default Home;
