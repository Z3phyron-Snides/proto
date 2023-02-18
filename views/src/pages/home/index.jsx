import { Container, Feed, Side } from "./styles";
// import StorySlide from "../../components/storySlide";
import CreatePost from "../../components/createPost";
import Post from "../../components/postCard";
import RequestList from "../../components/requestLists";
import ContactList from "../../components/contactList";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../../hook/useAxiosPrivate";
import { useEffect } from "react";
import { NewsFeed } from "../../features/post/PostSlice";
import { GetRequests } from "../../features/friends/FriendsSlice";

const Index = () => {
  const { user } = useSelector((state) => state.user);
  const { newsFeed } = useSelector((state) => state.post);
  const { friendRequests } = useSelector((state) => state.friends);
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

 

  useEffect(() => {
    dispatch(GetRequests(user?._id));
    dispatch(NewsFeed(axiosPrivate));
  }, [dispatch, axiosPrivate, user]);

  return (
    <Container>
      <Feed>
        {/* <StorySlide /> */}
        <CreatePost />
        {newsFeed &&
          newsFeed.map((item, index) => <Post post={item} key={index} />)}
      </Feed>

      <Side>
        {friendRequests?.length > 0 && <RequestList />}

        <ContactList />
      </Side>
    </Container>
  );
};

export default Index;
