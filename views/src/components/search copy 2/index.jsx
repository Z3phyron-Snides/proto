import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LikePost } from "../../features/post/PostSlice";

import { Button, Container } from "./styles";
import { BsFillHandThumbsUpFill } from "react-icons/bs";

const IsLiked = (likes) => {
  const { user } = useSelector((state) => state.user);
  const liked = likes?.find((like) => like?.user === user?._id);
  if (liked) {
    return { color: "#4078f1" };
  }
};

const Index = ({ postId, likes }) => {
  const dispatch = useDispatch();

  

  const handleClick = () => {
    dispatch(LikePost(postId));
  };

  return (
    <Container>
      <Button onClick={handleClick} style={IsLiked(likes)}>
        <BsFillHandThumbsUpFill />
      </Button>
    </Container>
  );
};

export default Index;
