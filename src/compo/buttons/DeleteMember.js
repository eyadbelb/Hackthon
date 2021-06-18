const DeleteMember = (props) => {
  return (
    <button onClick={() => props.deleteMember(props.memberId)}> Delete</button>
  );
};

export default DeleteMember;
