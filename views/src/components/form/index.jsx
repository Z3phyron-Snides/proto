import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 8px;
  width: 100%;
`;

const ReadOnlyInput = ({
  name,
  type,
  onChange,
  value,
  label,
  readOnly,
  style,
}) => (
  <Container style={style}>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </Container>
);

const ReusableForm = ({ inputs, onSubmit }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <ReadOnlyInput
          key={input.name}
          name={input.name}
          type={input.type}
          label={input.label}
          value={formData[input.name] || ""}
          onChange={handleInputChange}
          readOnly={input.readOnly}
          style={{ backgroundColor: input.readOnly ? "lightgray" : "white" }}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReusableForm;
