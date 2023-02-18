import { Container } from "./styles";
import React from "react";
import AsyncCreatableSelect from "react-select/async-creatable";
import { Button, Modal } from "@nextui-org/react";
import { TiUserAdd } from "react-icons/ti";

const Index = ({ friendsList, setPostData, postData }) => {
  const [visible, setVisible] = React.useState(false);

  const handleTaggedFriends = (friends) => {
    setPostData({
      ...postData,
      taggedFriends: friends,
    });
  };

  const loadOptions = (inputValue, callback) => {
    const filteredFriends = friendsList.filter((friend) =>
      friend.userName.toLowerCase().includes(inputValue.toLowerCase())
    );
    callback(
      filteredFriends.map((friend) => ({
        value: friend._id,
        label: friend.userName,
      }))
    );
  };

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <Container>
      <button onClick={handler} className="open">
        {" "}
        <span className="icon">
          <TiUserAdd />
        </span>
        <small>Tag Friends</small>
      </button>
      <Modal
        width="50%"
        height="40%"
        blur
        scroll
        preventClose
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        css={{
          padding: "20px",
        }}
      >
        <Modal.Header>
          <h3>Tag friends</h3>
        </Modal.Header>
        <Modal.Body className="content">
          <div>
            <AsyncCreatableSelect
              isMulti
              loadOptions={loadOptions}
              onChange={handleTaggedFriends}
              value={postData.taggedFriends}
              placeholder="Type to search for friends..."
            />
          </div>
        </Modal.Body>
        <Button onPress={closeHandler}>done</Button>
      </Modal>
    </Container>
  );
};

export default Index;
