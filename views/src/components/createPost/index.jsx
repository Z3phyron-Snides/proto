import {
  Attachments,
  Container,
  Cta,
  Field,
  Form,
  InputField,
  Tag,
  Tags,
  Thumb,
  Thumbs,
  Title,
} from "./styles";
import { Avatar } from "@nextui-org/react";
import { IoImage } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

import { FiEdit } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import TagFriends from "../tagFriend";
import { useEffect, useState } from "react";
import { CreatePost } from "../../features/post/PostSlice";

const Index = () => {
  const { user } = useSelector((state) => state.user);
  const { friends } = useSelector((state) => state.friends);
  const { isSuccess } = useSelector((state) => state.post);

  //formData
  const [postData, setPostData] = useState({
    text: "",
    medias: [],
    taggedFriends: [],
  });
  const [previews, setPreviews] = useState([]);

  const dispatch = useDispatch();

    useEffect(() => {
      if (isSuccess) {
        resetForm();
      }
    }, [isSuccess]);

    const resetForm = () => {
      setPostData({
        text: "",
        medias: [],
        taggedFriends: [],
      });
      setPreviews([]);
    };


  ////handleMediaChange
  const handleMediaChange = (event) => {
    const newMedias = [];
    const newPreviews = [];
    for (let i = 0; i < event.target.files.length; i++) {
      const file = event.target.files[i];
      const fileType = file.type.split("/")[0];

      if (fileType === "image") {
        newMedias.push({ file, type: fileType });
        const preview = URL.createObjectURL(file);
        newPreviews.push({ src: preview, type: fileType });
      } else if (fileType === "video") {
        newMedias.push({ file, type: fileType });
        const preview = URL.createObjectURL(file);
        newPreviews.push({ src: preview, type: fileType });
      }
    }

    setPostData({
      ...postData,
      medias: [...postData.medias, ...newMedias],
    });
    setPreviews([...previews, ...newPreviews]);
  };

  ////mediaDeleteHandler
  const handleDelete = (index) => {
    const newMedias = postData.medias.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setPostData({
      ...postData,
      medias: newMedias,
    });
    setPreviews(newPreviews);
  };

  ///textHandler
  const handleTextChange = (event) => {
    setPostData({
      ...postData,
      text: event.target.value,
    });
  };


  ///submitHandler
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("text", postData.text);

    if (postData.taggedFriends.length > 0) {
      formData.append("taggedFriends", JSON.stringify(postData.taggedFriends));
    }

    if (postData.medias) {
      postData.medias.forEach((media) => {
        if (media.type === "image") {
          formData.append("images", media.file);
        } else if (media.type === "video") {
          formData.append("videos", media.file);
        }
      });
    }

    dispatch(CreatePost(formData));
    resetForm();
  };


  return (
    <Container onSubmit={handleSubmit}>
      {/* Title  */}
      <Title>
        <span>
          <FiEdit />
        </span>
        Create Post
      </Title>

      {/* ***** Form Components****** */}
      <Form>
        {/* ******** Content Field ******** */}
        <Field>
          <Avatar size="md" squared color="gradient" src={user?.profileImage} />
          <InputField>
            {postData.taggedFriends.length > 0 ? (
              <Tags>
                <small>tagged:</small>
                {postData.taggedFriends.slice(0, 2).map((friend, index) => (
                  <Tag key={index}>{friend.label}</Tag>
                ))}
                {postData.taggedFriends.length > 2 && (
                  <div className="remainder">
                    +{postData.taggedFriends.length - 2}
                  </div>
                )}
              </Tags>
            ) : null}

            <textarea
              name=""
              id=""
              cols="20"
              rows="10"
              value={postData.text}
              placeholder={`What's on your mind, ${user?.firstName} ?`}
              onChange={handleTextChange}
            />

            {/* ***** Image Previews ***** */}
            <Thumbs>
              {previews.slice(0, 2).map((preview, index) => {
                if (preview.type === "image") {
                  return (
                    <Thumb key={index}>
                      <img src={preview.src} alt="" />
                      <span
                        className="delete-icon"
                        onClick={() => handleDelete(index)}
                      >
                        <FiTrash />
                      </span>
                    </Thumb>
                  );
                } else if (preview.type === "video") {
                  return (
                    <Thumb key={index}>
                      <video src={preview.src} controls />
                      <span
                        className="delete-icon"
                        onClick={() => handleDelete(index)}
                      >
                        <FiTrash />
                      </span>
                    </Thumb>
                  );
                }
              })}
              {previews.length > 2 && (
                <small className="remainder">+ {previews.length - 2}</small>
              )}
            </Thumbs>
          </InputField>
        </Field>

        {/* ***** Attechment ***** */}
        <Attachments>
          <Cta className="gallery">
            <span className="icon">
              <IoImage />
            </span>
            <input type="file" multiple onChange={handleMediaChange} />
            <small> Gallery</small>
          </Cta>

          <TagFriends
            postData={postData}
            setPostData={setPostData}
            friendsList={friends}
          />
        </Attachments>

        <button className="submit">
          <IoIosSend />
        </button>
      </Form>
    </Container>
  );
};

export default Index;
