import { Container, Header } from "./styles";
import Privacy from "../../components/privacyForm";
import { privacyFields } from "../../components/exports";
import { useSelector, useDispatch } from "react-redux";
import { UpdatePrivacy } from "../../features/settings/SettingsSlice";
import useAxiosPrivate from "../../hook/useAxiosPrivate";

const Index = () => {
  const { privacies } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();

  const handleSubmit = (privacyData) => {
    console.log(privacyData);
    dispatch(UpdatePrivacy({ axiosPrivate, privacyData }));
  };

  return (
    <Container>
      <Header>Who can see:</Header>
      {privacyFields.map((input) => {
        const privacy = privacies?.find((p) => p?.name === input?.name);
        if (privacy) {
          return (
            <Privacy
              input={{ ...input, value: privacy.value }}
              key={input.name}
              onSubmit={handleSubmit}
            />
          );
        } else {
          return (
            <Privacy input={input} key={input.name} onSubmit={handleSubmit} />
          );
        }
      })}
    </Container>
  );
};

export default Index;
