import { ChatList, Container, Empty, Header, SearchCont } from "./styles";
import ChatCard from "../../components/chatCard";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import NewChat from "../../components/newChat";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FetchConversations } from "../../features/chat/ChatSlice";

const Search = () => {
  return (
    <SearchCont>
      <FiSearch className="icon" />
      <input type="search" name="" id="" />
    </SearchCont>
  );
};

const Index = ({ show }) => {
  const navigate = useNavigate();

  const { conversations } = useSelector((state) => state.chat);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(FetchConversations());
  }, [dispatch]);

  return (
    <Container chatroom={show}>
      <Header>
        <div className="head">
          <button onClick={() => navigate("/")}>
            <IoIosArrowBack />
          </button>
          <div className="title">Recents</div>
        </div>
        <div className="search__chat">
          <Search />
          <NewChat />
        </div>
      </Header>

      <ChatList>
        {conversations.length > 0 ? (
          conversations?.map((convo) => (
            <Link to={`/chat/${convo?._id}`} key={convo?._id}>
              <ChatCard user={convo?.members[0]} />
            </Link>
          ))
        ) : (
          <Empty>
            <div className="msg">Ooops No convo made Yet!!!</div>
          </Empty>
        )}
      </ChatList>
    </Container>
  );
};

export default Index;
