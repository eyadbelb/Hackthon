import { Details } from "../styles";

const MemberDetails = (props) => {
  return (
    <Details>
      <h3>
        {" "}
        name:
        {props.productm.firstName} {props.productm.lastName}
      </h3>
      <h3> {props.productm.currentlyBorrowedBooks}</h3>
      <h3> Membership: {props.productm.membership}</h3>
      <button onClick={() => props.setCurrentMember(null)}> GO BACK!</button>
    </Details>
  );
};
export default MemberDetails;
