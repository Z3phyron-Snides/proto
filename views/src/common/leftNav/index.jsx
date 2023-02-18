import { Container } from "./styles";
import UserCard from "../../components/userCard";
import LeftNavEl from "../../components/leftNav";
import SignOutBtn from '../../components/signOutBtn'


const Index = ({ isOpen, toggleOpen }) => {
  return (
    <Container isOpen={isOpen}>
      <UserCard />
      <LeftNavEl toggleOpen={toggleOpen} />
    <SignOutBtn/>
    </Container>
  );
};

export default Index;