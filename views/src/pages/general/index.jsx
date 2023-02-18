import { Container } from "./styles";
import { useSelector } from "react-redux";
import UserDetails from "../../components/userDetails";

const Index = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <Container>
      <UserDetails userDetails={user} />
    </Container>
  );
};

export default Index;
