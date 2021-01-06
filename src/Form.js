import React, { useState } from "react";

const Form = ({handleFirstNameSubmit, currentFirstName}) => {
  const [firstName, changeFirstName] = useState("Bob Barker");
  const handleClick = event => {
    handleFirstNameSubmit(firstName);
  };
};
const JA3Form = ({handleJA3Submit, currentJA3}) => {
  const [ja3Value, changeJA3] = useState("asdfasdf");
  const handleClick = event => {
    handleJA3Submit(ja3Value);
};
  
const handleNameChange = event => changeFirstName(event.currentTarget.value);
const handleJA3Change = event => changeJA3(event.currentTarget.value);

  return (
    <>
      <form>
        <label>
          Name
          <input
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleNameChange}
            value={firstName}
          />
        </label>  
      <label>
          JA3
          <input
            type="text"
            ja3Value="123"
            id="ja3Value"
            onChange={handleJA3Change}
            ja3Value={ja3Value}
          />
        </label>
      </form>
      <button onClick={handleClick}>Submit</button>
      <button onClick={handleClick}>Comment</button>
    </>
  );
};

export { Form };
export { JA3Form };