import { Comment, Container, Content, InputField } from "./styles";
import React, { useState } from "react";
import { TiEdit, TiTrash } from "react-icons/ti";
import { IoIosSend } from "react-icons/io";
import { Avatar } from "@nextui-org/react";
import moment from "moment";
import { Cta } from "../addComment/styles";
import { useDispatch, useSelector } from "react-redux";
import { DeleteComment, UpdateComment } from "../../features/post/PostSlice";

const Index = ({ comment, post }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(comment.text);



  const dispatch = useDispatch();

    const {user} = useSelector((state) => state.user);

    const hideActions = () => {
      if (!user) {
        return true;
      }
      if (
        comment?.user?._id !== user?._id &&
        post?.user?._id !== user?._id
      ) {
        return true;
      }
      return false;
    };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(UpdateComment({ id: comment?._id, text }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(DeleteComment(comment?._id));
  };
  return (
    <Container>
      <Avatar size="md" squared src={comment?.user?.profileImage} />
      <Content>
        <span className="userName">{comment?.user?.userName}</span>
        {isEditing ? (
          <InputField onSubmit={handleSave}>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />

            <Cta type="submit">
              <IoIosSend />
            </Cta>
          </InputField>
        ) : (
          <Comment>
            <div className="comment">
              <span>{text}</span>
              <small>{moment(comment?.createdAt).fromNow()}</small>
            </div>

            {!hideActions() && (
              <span className="comment__actions">
                <TiEdit onClick={handleEdit} />
                <TiTrash onClick={handleDelete} />
              </span>
            )}
          </Comment>
        )}
      </Content>
    </Container>
  );
};

export default Index;

// const Comment = () => {

//   return (
//     <div className="comment">
//
//     </div>
//   );
// };

// export default Comment;
