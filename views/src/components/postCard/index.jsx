import { Avatar } from "@nextui-org/react";
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
import PostActions from "../postActions";
import AddComment from "../addComment";
import moment from "moment";

const MAX_ITEMS = 3;

const Index = ({ post }) => {
  // console.log(post);
  const media = post?.media;
  const columns = media.length >= MAX_ITEMS ? MAX_ITEMS : media.length;
  const counter = media.length - MAX_ITEMS;

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

      <Body to={`/feed/${post?._id}`}>
        <Text>{post.text}</Text>
        {media.length > 0 && (
          <Grid columns={columns} counter={counter >= 1 ? counter : null}>
            {media.slice(0, MAX_ITEMS).map((item, index) => (
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
        )}
      </Body>

      <Footer>
        <PostActions
          postId={post?._id}
          likes={post?.likes}
          comments={post?.comments}
        />
      </Footer>
      <AddComment postId={post?._id} />
    </Container>
  );
};

export default Index;
