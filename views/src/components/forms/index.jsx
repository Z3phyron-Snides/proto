import { Btn, Container } from "./styles";
import Input from "../readOnlyInput";
import { useState } from "react";

const Index = ({ input, userDetails, onSubmit, notUser }) => {
  const [formData, setFormData] = useState({
    ...userDetails,
    [input?.name]: userDetails[input?.name] || input.value || "",
  });

  const [readOnly, setReadOnly] = useState(true);

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target?.name]: event.target.value });
    //  console.log(userDetails[input?.name]);
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
      <Input
        name={input.name}
        type={input.type}
        label={input.label}
        value={formData[input.name] || ""}
        onChange={handleInputChange}
        readOnly={readOnly}
        style={{
          backgroundColor: readOnly
            ? "transparent"
            : "rgba(228, 227, 227, 0.123)",
          borderBottom: readOnly ? "none" : "1px solid #c9c9c9",
          fontSize: readOnly ? "20px" : "16px",
          fontWeight: readOnly ? "400" : "100",
        }}
      />

      {readOnly && (
        <Btn
          className="edit"
          onClick={handleEdit}
          style={notUser(userDetails?._id)}
        >
          edit
        </Btn>
      )}

      {!readOnly && (
        <Btn className="submit" type="submit" style={notUser(userDetails?._id)}>
          Submit
        </Btn>
      )}
    </Container>
  );
};

export default Index;
