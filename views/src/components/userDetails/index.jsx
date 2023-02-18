import { Container } from "./styles";
import Form from "../forms";
import { ProfileFields } from "../exports";
import { updateUser } from "../../features/user/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import useAxiosPrivate from "../../hook/useAxiosPrivate";

const HideBtn = (profileId) => {
  const { user } = useSelector((state) => state.user);
  if (profileId !== user?._id) {
    return { display: "none" };
  }
};

const Index = ({ userDetails }) => {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const onSubmit = (formData) => {
    console.log(formData);
    dispatch(updateUser({ formData, axiosPrivate }));
  };

  return (
    <Container>
      {ProfileFields.map((input) => (
        <Form
          input={input}
          key={input.name}
          notUser={HideBtn}
          userDetails={userDetails}
          onSubmit={onSubmit}
        />
      ))}
    </Container>
  );
};

export default Index;
