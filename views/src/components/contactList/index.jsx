import { Container, Title, Wrapper } from "./styles";
import Contact from "../contact";
import { useDispatch, useSelector } from "react-redux";
import { GetFriends } from "../../features/friends/FriendsSlice";
import { useEffect } from "react";

const Index = () => {
  const { user } = useSelector((state) => state.user);
  const { friends } = useSelector((state) => state.friends);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFriends(user?._id));
  }, [dispatch, user]);
  return (
    <Container>
      <Title>
        <h4 className="title">Contacts</h4>
        <span className="count">{friends.length}</span>
      </Title>
      <Wrapper>
        {friends &&
          friends.map((friend) => <Contact key={friend?._id} user={friend} />)}
      </Wrapper>
    </Container>
  );
};

export default Index;
