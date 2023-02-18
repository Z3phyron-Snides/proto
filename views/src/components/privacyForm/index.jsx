import { Btn, Container, Label, Option, Select } from "./styles";
import { useState } from "react";
import { privacyOptions } from "../exports";

const Index = ({ input, onSubmit }) => {
  const [formData, setFormData] = useState({});
  const [readOnly, setReadOnly] = useState(true);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleEdit = () => {
    setReadOnly(false);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setReadOnly(true);
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Label htmlFor={input?.name}>{input?.name}:</Label>
      <h5>{input?.value}</h5>
      <Select
        id={input?.name}
        name={input?.name}
        value={formData[input?.name] || input?.value || ""}
        onChange={handleInputChange}
        disabled={readOnly}
      >
        {privacyOptions.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>

      {readOnly && (
        <Btn className="edit" onClick={handleEdit}>
          edit
        </Btn>
      )}

      {!readOnly && (
        <Btn className="submit" type="submit">
          Submit
        </Btn>
      )}
    </Container>
  );
};

export default Index;
