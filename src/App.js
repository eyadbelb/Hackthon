import Home from "./compo/Home";
import BookList from "./compo/BookList";
import MemberList from "./compo/MemberList";
import SearchBar from "./compo/SearchBar";
import books from "./books";
import BookDetails from "./compo/BookDetails";
import { useState } from "react";
import members from "./members";
import MemberDetails from "./compo/MemberDetails";
import { Switch, Route } from "react-router";
import AddBook from "./compo/AddBook";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addbook">
          <AddBook />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
