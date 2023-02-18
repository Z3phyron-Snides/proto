import React, { useState } from "react";
import {
  Button,
  Container,
  Image,
  InputContainer,
  PopupContainer,
  PreviewContainer,
  Video,
} from "./styles";
import { IoIosSend } from "react-icons/io";
import { GiPaperClip } from "react-icons/gi";
import { IoImage } from "react-icons/io5";
import { IoIosVideocam } from "react-icons/io";
import InputEmoji from "react-input-emoji";

const Index = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [previewType, setPreviewType] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSendMessage = () => {
    if (inputValue) {
      const data = { text: inputValue, type: "text" };
      onSendMessage(data);
      console.log({ text: inputValue });
      setInputValue("");
    } else if (photo) {
      const data = { media: photo, type: "image" };
      onSendMessage(data);
      setPhoto(null);
      setShowPreview(false);
      setShowPopup(false);
    } else if (video) {
      const data = { media: video, type: "video" };
      onSendMessage(data);
      setVideo(null);
      setShowPreview(false);
      setShowPopup(false);
    }
  };

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const handlePreview = (type) => {
    setPreviewType(type);
    setShowPreview(true);
    setShowPopup(!showPopup);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    setPreviewUrl("");
  };

  const handlePhotoChange = (e) => {
    const photo = e.target.files[0];
    if (photo.size <= 5000000) {
      setPhoto(photo);
      previewMedia(photo, "image");
    }
  };

  const handleVideoChange = (e) => {
    const video = e.target.files[0];
    if (video.size <= 5000000) {
      setVideo(video);
      previewMedia(video, "video");
    }
  };

  const handleOnEnter = (text) => {
    const data = { text, type: "text" };
    onSendMessage(data);
    console.log({ text });
  };

  const previewMedia = (file, type) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
      handlePreview(type);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Container>
      {showPopup && (
        <PopupContainer>
          <button className="image">
            <IoImage />
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </button>
          <button className="video">
            <IoIosVideocam />
            <input type="file" accept="video/*" onChange={handleVideoChange} />
          </button>
        </PopupContainer>
      )}
      <InputContainer>
        <Button className="attachment" onClick={handlePopup}>
          <GiPaperClip />
        </Button>
        {/* <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        /> */}
        <InputEmoji
          value={inputValue}
          onChange={(e) => setInputValue(e)}
          cleanOnEnter
          onEnter={handleOnEnter}
          placeholder="Type a message"
        />
      </InputContainer>

      {showPreview && previewType === "image" && (
        <PreviewContainer>
          <div className="media">
            <Image src={previewUrl} />
          </div>
          <div className="btnGrp">
            <button className="close" onClick={handleClosePreview}>
              Close
            </button>
            <button className="send" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </PreviewContainer>
      )}
      {showPreview && previewType === "video" && (
        <PreviewContainer>
          <div className="media">
            <Video src={previewUrl} controls />
          </div>
          <div className="btnGrp">
            <button className="close" onClick={handleClosePreview}>
              Close
            </button>
            <button className="send" onClick={handleSendMessage}>
              Send
            </button>
          </div>
        </PreviewContainer>
      )}
      <Button className="send" onClick={handleSendMessage}>
        <IoIosSend />
      </Button>
    </Container>
  );
};

export default Index;
