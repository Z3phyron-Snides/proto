// import { Container, Wrapper } from "./styles";
// import { Avatar, Button } from "@nextui-org/react";

// const Index = () => {
//   const src =
//     "https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=600";
//   return (
//     <Container src={src}>
//       <Wrapper>
//         <Button>
//           <Avatar
//             squared
//             size={"md"}
//             bordered
//             color={"white"}
//             src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
//           />
//         </Button>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Index;
import React, { useState } from "react";
import { Container, Wrapper } from "./styles";
import { Avatar } from "@nextui-org/react";
import InstaStories from "react-insta-stories";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(96, 52, 162, 0.422);
  display: ${({ show }) => (show ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 999;
  backdrop-filter: blur(1px);
`;

const Index = (props) => {
  const { user } = props;
  const [showStories, setShowStories] = useState(false);

  const src =
    user?.stories && user?.stories.length > 0
      ? user?.stories[user?.stories.length - 1].url
      : "";

  return (
    <Container src={src} onClick={() => setShowStories(!showStories)}>
      <Wrapper>
        {showStories && (
          <Overlay
            show={showStories}
            onClick={() => setShowStories(!showStories)}
          >
            <InstaStories stories={user?.stories} />
          </Overlay>
        )}
        <Avatar
          squared
          size={"sm"}
          bordered
          color={"white"}
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </Wrapper>
    </Container>
  );
};

export default Index;
