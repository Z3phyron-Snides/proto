import { Container, FriendList, Header, PopUp, SearchCont } from "./styles";
import ChatCard from "../../components/chatCard";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Avatar } from "@nextui-org/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Contact from "../../components/contact";
import { useEffect } from "react";
import { GetFriends } from "../../features/friends/FriendsSlice";

const Search = () => {
  return (
    <SearchCont>
      <FiSearch className="icon" />
      <input type="search" name="" id="" />
    </SearchCont>
  );
};

const Index = () => {
  const { user } = useSelector((state) => state.user);
  const { friends } = useSelector((state) => state.friends);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFriends(user?._id));
  }, [dispatch, user]);
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Avatar
        squared
        icon={<BsPencilSquare />}
        size="sm"
        onClick={() => setOpen(true)}
      />

      <PopUp open={open}>
        <Header>
          <div className="head">
            <button onClick={() => setOpen(false)}>
              <IoIosArrowBack />
            </button>
            <div className="title">New Chat</div>
          </div>
          <Search />
        </Header>

        <FriendList>
          {friends
            ? friends.map((friend) => (
                <Link to={`/chat/${friend?._id}`} key={friend?._id}>
                  <Contact user={friend} />
                </Link>
              ))
            : null}
        </FriendList>
      </PopUp>
    </Container>
  );
};

export default Index;
