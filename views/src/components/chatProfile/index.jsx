import { Avatar } from "@nextui-org/react";
import { Container } from "./styles";


const Index = ({show}) => {
    return (
      <Container show={show}>
            <Avatar squared src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <div className="userName">Mack Freed</div>
            <div className="status">last seen 12hrs ago</div>
      </Container>
    );
}

export default Index;