import React from "react";
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

const ReadOnlyInput = ({ name, onChange, value, label, readOnly, style }) => (
  <Container style={style}>
    {label && <Label htmlFor={name}>{label}</Label>}
    <Input
      id={name}
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </Container>
);

export default ReadOnlyInput;





























// import React, { useState } from 'react';
// import styled from 'styled-components';

// const internationalCallingCodes = [
//   { code: '+1', country: 'United States' },
//   { code: '+44', country: 'United Kingdom' },
//   { code: '+81', country: 'Japan' },
//   { code: '+86', country: 'China' },
//   { code: '+33', country: 'France' },
//   { code: '+49', country: 'Germany' },
// ];

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const Select = styled.select`
//   padding: 8px 10px;
//   font-size: 16px;
//   border-radius: 5px;
//   border: 1px solid #ccc;
// `;

// const CellInput = () => {
//   const [selectedCallingCode, setSelectedCallingCode] = useState('');

//   return (
//     <Container>
//       <Select value={selectedCallingCode} onChange={e => setSelectedCallingCode(e.target.value)}>
//         <option value="">Select an international calling code</option>
//         {internationalCallingCodes.map(callingCode => (
//           <option key={callingCode.code} value={callingCode.code}>
//             {callingCode.code} ({callingCode.country})
//           </option>
//         ))}
//       </Select>
//     </Container>
//   );
// };

// export default CellInput;
