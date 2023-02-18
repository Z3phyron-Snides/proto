<ReadOnlyInput
  name="firstName"
  label="First Name"
  value={firstName}
  onChange={handleFirstNameChange}
  readOnly={true}
  style={{ backgroundColor: 'lightgray' }}
/>
<ReadOnlyInput
  name="lastName"
  label="Last Name"
  value={lastName}
  onChange={handleLastNameChange}
  readOnly={false}
  style={{ backgroundColor: 'white' }}
/>
