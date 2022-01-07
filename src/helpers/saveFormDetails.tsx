import React from "react";
import fetch from "node-fetch";

export const saveFormDetails = (event, enteredEmail, enteredName) => {
  event.preventDefault();
  console.log(enteredEmail, enteredName);
  fetch(`api/newsLetter`, {
    method: "POST",
    body: JSON.stringify({ name: enteredName, email: enteredEmail }),
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json)
    .then((data) => console.log(data));
};
