import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Select = styled.select`
  padding: 8px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const CellInput = ({ options, value, onChange, placeholder }) => (
  <Container>
    <Select value={value} onChange={onChange}>
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option.code} value={option.code}>
          {option.code} ({option.country})
        </option>
      ))}
    </Select>
  </Container>
);

CellInput.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

CellInput.defaultProps = {
  value: "",
  placeholder: "Select an option",
};

export default CellInput;
