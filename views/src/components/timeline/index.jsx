import { Container } from "./styles";
import Post from "../postCard";
import { useSelector } from "react-redux";

const Index = () => {
  const { newsFeed } = useSelector((state) => state.post);

  return (
    <Container>
      {newsFeed &&
        newsFeed.map((item, index) => <Post post={item} key={index} />)}
    </Container>
  );
};

export default Index;
