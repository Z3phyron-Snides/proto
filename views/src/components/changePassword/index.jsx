import React, { useState } from "react";
import {
  Container,
  Form,
  Label,
  Input,
  Button,
  FormCtrl,
  InputField,
} from "./styles";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Index = () => {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [viewToggle, setViewToggle] = useState({
    showCurrentPassword: false,
    showNewPassword: false,
    showConfirmNewPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform password change logic here
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleViewToggle = (field) => {
    setViewToggle({
      ...viewToggle,
      [`show${field}`]: !viewToggle[`show${field}`],
    });
  };

  const { currentPassword, newPassword, confirmNewPassword } = formData;
  const { showCurrentPassword, showNewPassword, showConfirmNewPassword } =
    viewToggle;

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormCtrl>
          <Label htmlFor="currentPassword">Current Password:</Label>
          <InputField>
            <Input
              type={showCurrentPassword ? "text" : "password"}
              id="currentPassword"
              value={currentPassword}
              onChange={handleInputChange}
            />
            <span
              className="toggle"
              onClick={() => handleViewToggle("CurrentPassword")}
            >
              {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </InputField>
        </FormCtrl>

        <FormCtrl>
          <Label htmlFor="newPassword">New Password:</Label>
          <InputField>
            <Input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={handleInputChange}
            />
            <span
              className="toggle"
              onClick={() => handleViewToggle("NewPassword")}
            >
              {showNewPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </InputField>
        </FormCtrl>

        <FormCtrl>
          <Label htmlFor="confirmNewPassword">Confirm New Password:</Label>
          <InputField>
            <Input
              type={showConfirmNewPassword ? "text" : "password"}
              id="confirmNewPassword"
              value={confirmNewPassword}
              onChange={handleInputChange}
            />
            <span
              className="toggle"
              onClick={() => handleViewToggle("ConfirmNewPassword")}
            >
              {showConfirmNewPassword ? <FiEyeOff /> : <FiEye />}
            </span>
          </InputField>
        </FormCtrl>

        <Button type="submit">Change Password</Button>
      </Form>
    </Container>
  );
};

export default Index;
