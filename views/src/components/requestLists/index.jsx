import { Container, Title, Wrapper } from "./styles";
import Request from "../requestCard";
import { useSelector } from "react-redux";



const Index = () => {
 
  const { friendRequests } = useSelector((state) => state.friends);
  //get requests @todo
 
  return (
    <Container>
      <Title>
        <h4 className="title">Requests</h4>
        <span className="count">{friendRequests.length}</span>
      </Title>
      <Wrapper>
        {friendRequests &&
          friendRequests.map((request) => (
            <Request key={request?._id} user={request?.user} />
          ))}
      </Wrapper>
    </Container>
  );
};

export default Index;
