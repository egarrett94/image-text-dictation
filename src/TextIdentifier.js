import React from "react";

const TextIdentifier = ({ response, identify }) => (
  <div>
    <h3>txt-in-img id tool</h3>
    <input type="file" onChange={identify} />
    <p>{response}</p>
  </div>
);

export default TextIdentifier;
