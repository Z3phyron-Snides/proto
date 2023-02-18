import { Avatar } from "@nextui-org/react";
import {CgProfile} from 'react-icons/cg'
import { IoIosArrowBack } from "react-icons/io";
import { Container, Option, User } from "./styles";
import {useNavigate} from 'react-router-dom'

const Index = ({ showProfile, setShowProfile, user }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    setShowProfile(!showProfile);
  };
  return (
    <Container>
      <button onClick={()=> navigate('/chat')}><IoIosArrowBack/></button>
      
      <User>
        <Avatar squared src={user?.members[0]?.profileImage} />
        <div className="info">
          <div className="name">{user?.name }</div>
          <div className="status">last seen</div>
        </div>
      </User>
          <Option onClick={handleClick}>
              <CgProfile/>
      </Option>
    </Container>
  );
};

export default Index;
