import { Container } from "./styles";
import { User } from "@nextui-org/react";
import { useSelector } from 'react-redux';

const Index = () => {
   const { user, } = useSelector((state) => state.user);
  return (
    <Container>
      <User
        size="lg"
        squared
        bordered
        color="gradient"
        src={user?.profileImage}
      />

      <div className="info">
        <h4 className="name">{`${user?.firstName} ${user?.lastName}`}</h4>
        <p className="userName">{user?.userName}</p>
      </div>
    </Container>
  );
};

export default Index;
