import { Card, Container, Form, FormCtrl, Input } from "./styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const { token, isSuccess, message } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
  });

  const { email } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [isSuccess, token, navigate, message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(signIn(formData));
  };
  return (
    <Container>
      <Card>
        <h3>Sign In</h3>
        <Form onSubmit={handleSubmit}>
          <FormCtrl>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </FormCtrl>

          <button type="submit">Sign In</button>
        </Form>
      </Card>
    </Container>
  );
};

export default Index;
