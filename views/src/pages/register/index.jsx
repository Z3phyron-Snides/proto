import { Card, Container, Form, FormCtrl, User } from "./styles";
import { Input } from "@nextui-org/react";
import { RiImageAddFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../features/auth/AuthSlice";
import { useNavigate } from "react-router-dom";


const Index = () => {
  const { token, isSuccess,  message } = useSelector(
    (state) => state.auth
  );
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
  });

  const { firstName, lastName, email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      image: URL.createObjectURL(event.target.files[0]),
    });
  };

  useEffect(() => {
    if ( token) {
    
      navigate("/");
    }
  }, [isSuccess, token, navigate, message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(signUp({ firstName, lastName, email, password }));
  };
  return (
    <Container>
      <Card>
        <User>
          <img src={formData.image || ""} alt="" />
          <div className="icon">
            <RiImageAddFill />
          </div>
          <input type="file" onChange={handleImageChange} />
        </User>

        <Form onSubmit={handleSubmit}>
          <FormCtrl>
            <Input
              size="lg"
              fullWidth
              aria-label="..."
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <Input
              size="lg"
              fullWidth
              aria-label="..."
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </FormCtrl>
          <FormCtrl>
            <Input
              size="lg"
              fullWidth
              aria-label="..."
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </FormCtrl>
          <FormCtrl>
            <Input.Password
              size="lg"
              fullWidth
              aria-label="..."
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Input.Password
              size="lg"
              fullWidth
              aria-label="..."
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
          </FormCtrl>

          <button type="submit">Register</button>
        </Form>
      </Card>
    </Container>
  );
};

export default Index;
