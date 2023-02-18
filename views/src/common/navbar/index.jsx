import { useContext } from "react";
import { Container, Logo } from "./styles";
// import Search from "../../components/search";
import { Avatar, Switch } from "@nextui-org/react";
import { ThemeContext } from "../../context/themeContext";
import { useSelector } from "react-redux";

const Index = ({ toggleOpen }) => {
  const { user } = useSelector((state) => state.user);
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <Container>
      <Logo to="/">
        Friends<span>Hub</span>
      </Logo>
      {/* <Search /> */}{" "}
      <Switch
        className="toggle"
        size="md"
        color={"secondary"}
        checked={mode === "dark" ? true : false}
        onChange={() => setMode(mode === "light" ? "dark" : "light")}
      />
      <Avatar
        className="user"
        size={"md"}
        squared
        src={user?.profileImage}
        alt="User Avatar"
        bordered
        color={"secondary"}
        onClick={toggleOpen}
      />
    </Container>
  );
};

export default Index;
