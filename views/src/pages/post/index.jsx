import {
  Body,
  Container,
  Footer,
  Header,
  Grid,
  Option,
  Text,
  UserInfo,
  Video,
  Image,
} from "./styles";
import { TbDotsVertical } from "react-icons/tb";
import PostActions from "../../components/postActions";
import AddComment from "../../components/addComment";
import Comment from "../../components/comment";
import moment from "moment";
import { Avatar } from "@nextui-org/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPost } from "../../features/post/PostSlice";
import { useParams } from "react-router-dom";

const Index = () => {
  const { post } = useSelector((state) => state.post);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPost(id));
  }, [dispatch, id]);

  return (
    <Container>
      <Header>
        <UserInfo to={`/profile/${post?.user?._id}`}>
          <Avatar squared src={post?.user?.profileImage} />

          <div className="info">
            <h4 className="userName">{post?.user?.userName}</h4>
            <p className="timeStamp">{moment(post?.createdAt).fromNow()}</p>
          </div>
        </UserInfo>
        <Option>
          <TbDotsVertical />
        </Option>
      </Header>
      <Body>
        <Text>{post?.text}</Text>

        <Grid>
          {post?.media.map((item, index) => (
            <div key={index} className={"media"}>
              {item.type === "image" ? (
                <Image src={item.url} alt={item.altText} />
              ) : (
                <Video src={item.url} controls>
                  {item.title}
                </Video>
              )}
            </div>
          ))}
        </Grid>
      </Body>

      <Footer>
        <PostActions
          postId={post?._id}
          likes={post?.likes}
          comments={post?.comments}
        />
      </Footer>
      <AddComment postId={post?._id} />
      {post?.comments &&
        post?.comments?.map((comment) => (
          <Comment key={comment?._id} comment={comment} post={post} />
        ))}
    </Container>
  );
};

export default Index;
