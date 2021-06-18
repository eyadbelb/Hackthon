import { SearchBarStyled } from "../styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      onChange={(e) => props.setQuery(e.target.value)}
      placeholder="search for book name"
    />
  );
};

export default SearchBar;
