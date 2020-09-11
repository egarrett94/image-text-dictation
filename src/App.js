import React, { useState } from "react";
import "./App.css";
import AudioButton from "./AudioButton.js";
import TextIdentifier from "./TextIdentifier.js";

import { Predictions } from "aws-amplify";

const App = () => {
  const [response, setResponse] = useState("please upload a photo!");
  const [textAcquired, setTextAcquired] = useState(false);

  const identify = async (evt) => {
    let data;

    setTextAcquired(false);
    setResponse("identifying text...");

    const {
      target: { files },
    } = evt;
    const file = files[0];

    try {
      data = await Predictions.identify({
        text: { source: { file }, format: "PLAIN" },
      });
    } catch (err) {
      console.log("something went wrong...", err);
    }

    if (!data) {
      setResponse("error uploading file, try again pls!");
      return;
    }

    if (!data.text || data.text.fullText === "") {
      setResponse("couldn't find text in there!");
      setTextAcquired(false);
      return;
    }

    setResponse(data.text.fullText);
    setTextAcquired(true);
  };

  return (
    <div className="App">
      <TextIdentifier identify={identify} response={response} />
      {textAcquired && <AudioButton utterance={response} />}
    </div>
  );
};

export default App;
