import React, { useState, useEffect } from "react";
import "./style.css";
import { firstName } from "./Name";
import { ja3Value } from "./Name";
import { Form } from "./Form";
import { namelist } from "./scratchpad"; 

export default function App() {

  const [submittedFirstName, changeSubmittedFirstName] = useState("Michael"); useEffect(() => {console.log(submittedFirstName), [submittedFirstName]});
  const [route, changeRoute] = useState("home");


  const handleFirstNameSubmit = firstName => {
    changeSubmittedFirstName(firstName); 
    changeRoute("home"); 
  };

  const [submittedJA3, changeSubmittedJA3] = useState("123"); useEffect(() => {console.log   (submittedJA3), [submittedJA3]});
  const [routeJA3, changeJA3Route] = useState("123");

  const handleJA3Submit = ja3Value => {
    changeSubmittedJA3(ja3Value); 
    changeJA3Route("123"); 
  };

  return (
     route === "home" ? (
    <div>
      <h1>Welcome to JA3DB</h1>
      <p>Let's validate you!</p>

      <firstName firstName={submittedFirstName} />  
     
     <button 
        onClick={(firstName) => {
          changeRoute("home")}} > Change </button>
      <ja3Value text={"hi"} />
      
      <button 
        onClick={(ja3Value) => {
          changeJA3Route(ja3Value)}} > Comment </button>
    </div>

    )

    : ( 
      
    <Form handleFirstNameSubmit={handleFirstNameSubmit} currentFirstName={submittedFirstName} />
    )
  );
};