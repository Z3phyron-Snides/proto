import { Card, Container, Form, FormCtrl, Input, InputField } from "./styles";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../../features/auth/AuthSlice";
import {  useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Index = () => {
  const { token, isSuccess, message } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
   
    password: "",
    confirmPassword: "",
  });
  const [view, setView] = useState({
    showPassword: false,
    showConfirmPassword: false,
  });

  const {  password, confirmPassword } = formData;
  const { showConfirmPassword, showPassword } = view;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleViewToggle = (field) => {
    setView({
      ...view,
      [`show${field}`]: !view[`show${field}`],
    });
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [isSuccess, token, navigate, message]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(signUp(formData));
  };
  return (
    <Container>
      <Card>
        <h3>Reset Password</h3>
        <Form onSubmit={handleSubmit}>
          
          <FormCtrl>
            <InputField>
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={handleInputChange}
              />
              <span
                className="toggle"
                onClick={() => handleViewToggle("Password")}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </InputField>
            </FormCtrl>
            <FormCtrl>
            <InputField>
              <Input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={handleInputChange}
              />
              <span
                className="toggle"
                onClick={() => handleViewToggle("ConfirmPassword")}
              >
                {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </InputField>
          </FormCtrl>

          <button type="submit">Reset</button>
        </Form>
       
      </Card>
    </Container>
  );
};

export default Index;
