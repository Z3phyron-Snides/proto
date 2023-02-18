import React, { useState } from "react";
import CellInput from "./CellInput";

const internationalCallingCodes = [
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+81", country: "Japan" },
  { code: "+86", country: "China" },
  { code: "+33", country: "France" },
  { code: "+49", country: "Germany" },
];

const App = () => {
  const [selectedCallingCode, setSelectedCallingCode] = useState("");

  return (
    <div>
      <CellInput
        options={internationalCallingCodes}
        value={selectedCallingCode}
        onChange={(e) => setSelectedCallingCode(e.target.value)}
        placeholder="Select an international calling code"
      />
    </div>
  );
};

export default App;
