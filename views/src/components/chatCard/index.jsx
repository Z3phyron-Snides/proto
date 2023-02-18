import { Container, Info, TimeStamp } from "./styles";
import { Avatar } from "@nextui-org/react";

const Index = ({user}) => {
  return (
    <Container>
      <Avatar squared src={user?.profileImage} />
      <Info>
        <h4 className="name">{ user?.userName}</h4>
        <p>Lorem ipsum, dolor .....</p>
      </Info>
      <TimeStamp>
        <div className="status"></div>
        <div className="lastSeen">17 hrs ago</div>
      </TimeStamp>
    </Container>
  );
};

export default Index;
