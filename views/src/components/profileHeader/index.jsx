import { Avatar } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SendRequest } from "../../features/friends/FriendsSlice";
import { updateCoverImage } from "../../features/user/UserSlice";
import useAxiosPrivate from "../../hook/useAxiosPrivate";
import {
  Actions,
  Container,
  CoverPhoto,
  Dp,
  Request,
  UpdateBtn,
} from "./styles";

const HideBtn = (profileId) => {
  const { user } = useSelector((state) => state.user);
  if (profileId !== user?._id) {
    return { display: "none" };
  }
};
const ShowBtn = (profileId) => {
  const { user } = useSelector((state) => state.user);
  if (profileId === user?._id) {
    return { display: "none" };
  }
};

const Index = ({ user }) => {
  const [coverImage, setCoverImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const handleCoverImageChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  useEffect(() => {
    if (coverImage) {
      const data = new FormData();
      data.append("images", coverImage);
      dispatch(updateCoverImage(data));
      setCoverImage(null);
    }
  }, [coverImage, axiosPrivate, dispatch, setCoverImage]);

  // console.log(coverImage);
  const handleProfileImageChange = (e) => {
    setProfileImage(e.target.files[0]);
    console.log(profileImage);
  };
  return (
    <Container>
      <CoverPhoto>
        <UpdateBtn style={HideBtn(user?._id)}>
          Update Cover{" "}
          <input
            type="file"
            name="coverImage"
            onChange={handleCoverImageChange}
          />
        </UpdateBtn>
        <img src={user?.coverImage} alt="" />
      </CoverPhoto>
      <Dp>
        <div className="user">
          <Avatar
            squared
            bordered
            src={user?.profileImage}
            css={{ size: "$24" }}
          />

          <div className="info">
            <div className="name">{`${user?.firstName} ${user?.lastName}`}</div>
            <small className="username">{user?.userName}</small>
          </div>
        </div>
        <Actions style={HideBtn(user?._id)}>
          <div className="change">
            change{" "}
            <input
              type="file"
              name="profileImage"
              onChange={handleProfileImageChange}
            />
          </div>
          <div className="del">Delete</div>
        </Actions>
      </Dp>

      <Request
        style={ShowBtn(user?._id)}
        onClick={() => dispatch(SendRequest(user?._id))}
      >
        Add friend
      </Request>
    </Container>
  );
};

export default Index;
