import { Container, Wrapper } from "./styles";
import { BsPlus } from "react-icons/bs";
import { Button } from "@nextui-org/react";

const Index = () => {

    const src =
      "https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=600";
  return (
    <Container src={src}>
      <Wrapper>
        <Button
          size={"md"}
          auto
          icon={
            <span>
              <BsPlus />
            </span>
          }
        />

        <small>Add Story</small>
      </Wrapper>
    </Container>
  );
};

export default Index;
