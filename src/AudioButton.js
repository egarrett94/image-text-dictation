import React from "react";

const AudioButton = ({ utterance }) => {
  const speak = () => {
    speechSynthesis.speak(new SpeechSynthesisUtterance(utterance));
  };

  return <button onClick={speak}>read this out loud!</button>;
};

export default AudioButton;
