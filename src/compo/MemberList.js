import members from "../members";
import Member from "./member";
import SearchBarM from "./SearchBarM";
import { useState } from "react";

const MemberList = (props) => {
  const [query, setQuery] = useState("");

  let arrayOfMembers = props.members
    .filter((member) =>
      member.firstName.toLowerCase().includes(query.toLowerCase())
    )
    .map((member) => (
      <Member
        key={member.id}
        productm={member}
        setCurrentMember={props.setCurrentMember}
        deleteMember={props.deleteMember}
      />
    ));

  return (
    <div>
      <h1> Members List</h1>
      <SearchBarM setQuery={setQuery} />

      <list> {arrayOfMembers}</list>

      <button>ADD NEW Member </button>
    </div>
  );
};

export default MemberList;
