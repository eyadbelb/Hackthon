import { SearchBarStyled } from "../styles";

const SearchBarM = (props) => {
  return (
    <SearchBarStyled
      onChange={(e) => props.setQuery(e.target.value)}
      placeholder="search for Member name"
    />
  );
};

export default SearchBarM;
