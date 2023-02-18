import { BtnGrp, Container, User } from "./styles";
import { Avatar, Button } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import { AcceptRequest, RejectRequest } from "../../features/friends/FriendsSlice";
import { useEffect } from "react";

const Index = ({ user }) => {
   const dispatch = useDispatch();

  return (
    <Container>
      <User>
        <Avatar squared src={user?.profileImage} />

        <p>
          <strong>{user?.userName}</strong> wants to add you as friends
        </p>
      </User>

      <BtnGrp>
        <Button
          auto
          size={"sm"}
          onPress={() => dispatch(AcceptRequest(user?._id))}
        >
          Accept
        </Button>
        <Button
          auto
          color={"error"}
          size={"sm"}
          flat
          onPress={() => dispatch(RejectRequest(user?._id))}
        >
          Decline
        </Button>
      </BtnGrp>
    </Container>
  );
};

export default Index;
