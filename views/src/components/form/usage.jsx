const onSubmit = (formData) => {
  console.log(formData);
};

const inputs = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    readOnly: true,
    value: "John",
    style: { backgroundColor: "lightgray" },
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    readOnly: false,
    value: "Doe",
    style: { backgroundColor: "white" },
  },
];

const App = () => <ReusableForm inputs={inputs} onSubmit={onSubmit} />;
