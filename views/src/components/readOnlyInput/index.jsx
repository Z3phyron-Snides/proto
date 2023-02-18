import { Container, Input, Label, TextArea } from "./styles";

const Index = ({ name, type, onChange, value, label, readOnly, style }) => {
  return (
    <Container>
      {label && <Label htmlFor={name}>{label}:</Label>}
      {type === "textarea" ? (
        <TextArea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          style={style}
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          style={style}
        />
      )}
    </Container>
  );
};

export default Index;
