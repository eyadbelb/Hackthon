import DeleteMember from "./buttons/DeleteMember";

const Member = (props) => {
  const member = props.productm;
  return (
    <div>
      <h3 onClick={() => props.setCurrentMember(props.productm)}>
        {member.firstName} {member.lastName}
      </h3>
      <h3>{member.currentlyBorrowedBooks}</h3>
      <h3>{member.membership}</h3>
      <DeleteMember deleteMember={props.deleteMember} memberId={member.id} />
    </div>
  );
};

export default Member;
