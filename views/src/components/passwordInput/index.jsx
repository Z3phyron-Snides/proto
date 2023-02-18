import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: ${(props) => props.inputPadding};
  font-size: ${(props) => props.inputFontSize};
  border-radius: ${(props) => props.inputBorderRadius};
  border: ${(props) => props.inputBorder};
  margin-bottom: ${(props) => props.inputMarginBottom};
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const PasswordInput = ({
  passwordValue,
  inputPadding,
  inputFontSize,
  inputBorderRadius,
  inputBorder,
  inputMarginBottom,
}) => {
  const [password, setPassword] = useState(passwordValue);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container>
      <Input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        inputPadding={inputPadding}
        inputFontSize={inputFontSize}
        inputBorderRadius={inputBorderRadius}
        inputBorder={inputBorder}
        inputMarginBottom={inputMarginBottom}
      />
      <Button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? <FaEye /> : <FaEyeSlash />}
      </Button>
    </Container>
  );
};

PasswordInput.propTypes = {
  passwordValue: PropTypes.string,
  inputPadding: PropTypes.string,
  inputFontSize: PropTypes.string,
  inputBorderRadius: PropTypes.string,
  inputBorder: PropTypes.string,
  inputMarginBottom: PropTypes.string,
};

PasswordInput.defaultProps = {
  passwordValue: "",
  inputPadding: "8px 10px",
  inputFontSize: "16px",
  inputBorderRadius: "5px",
  inputBorder: "1px solid #ccc",
  inputMarginBottom: "10px",
};

export default PasswordInput;
