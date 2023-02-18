import { Comments, Container, Likes, Share } from "./styles";
import { IoArrowRedoOutline } from "react-icons/io5";
import LikePost from "../search copy 2";

const Index = ({ postId, likes, comments }) => {
  return (
    <Container>
      <Likes>
        <LikePost postId={postId} likes={likes} />

        <small>{likes?.length}</small>
      </Likes>
      <Comments>
        {comments?.length} <small>comments</small>
      </Comments>
      <Share>
        <IoArrowRedoOutline /> <small>share</small>
      </Share>
    </Container>
  );
};

export default Index;
