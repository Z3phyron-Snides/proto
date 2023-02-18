import { Container } from "./styles";
import { TbDotsVertical } from "react-icons/tb";
import { Avatar } from "@nextui-org/react";

const Index = ({ user }) => {
  return (
    <Container>
      <Avatar size={"sm"} squared src={user?.profileImage} />
      <h4 className="userName">{user?.userName}</h4>

      <span className="option">
        <TbDotsVertical />
      </span>
    </Container>
  );
};

export default Index;
