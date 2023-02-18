import { Card, Container, Form, FormCtrl, User } from "./styles";
import { Avatar, Input } from "@nextui-org/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  loadUser,
  reset,
  signIn,
} from "../../features/auth/AuthSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosPrivate from "../../hook/useAxiosPrivate";

const Index = () => {
  const { token, isSuccess, user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    if (isSuccess && token) {
      // toast.success(message);
      navigate("/");
      dispatch(reset());
      setTimeout(() => {
        dispatch(loadUser(axiosPrivate));
      }, 2000);
    }
    if (email) {
      const getData = setTimeout(() => {
        const data = {
          email: email,
        };
        dispatch(getUser(data));
        dispatch(reset());
      }, 2000);

      return () => clearTimeout(getData);
    }
  }, [token, email, dispatch, isSuccess, axiosPrivate, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Perform form submission actions here
    dispatch(signIn(formData));
  };

  return (
    <Container>
      <Card>
        {user ? (
          <User>
            <Avatar
              size="xl"
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
              color="secondary"
              bordered
            />

            <h3 className="name">{`${user?.firstName} ${user?.lastName}`}</h3>
            <h5 className="name">{`${user?.email} `}</h5>
          </User>
        ) : null}

        <Form onSubmit={handleSubmit}>
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
          </FormCtrl>

          <button type="submit">Login</button>
        </Form>
      </Card>
    </Container>
  );
};

export default Index;
