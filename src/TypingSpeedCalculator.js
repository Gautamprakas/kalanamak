import React, { useState, useEffect } from "react";

const TypingSpeedCalculator = () => {
  const [text, setText] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [typingSpeed, setTypingSpeed] = useState(0);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    if (!startTime) {
      setStartTime(new Date().getTime());
      startTimer();
    }
  };

  const startTimer = () => {
    const id = setInterval(() => {
      setTimer((prevTime) => prevTime + 1);
    }, 1000); // update every second
    setIntervalId(id);
  };

  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const calculateSpeed = () => {
    const endTime = new Date().getTime();
    const timeDiff = (endTime - startTime) / 1000 / 60; // time in minutes
    const wordCount = text.trim().split(" ").filter((word) => word !== "").length; // count words
    const speed = wordCount / timeDiff; // words per minute
    setTypingSpeed(speed.toFixed(2)); // set speed to 2 decimal places
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (text.length > 0) {
        calculateSpeed();
        stopTimer(); // Stop the timer after speed calculation
      }
    }, 3000); // calculate speed after 3 seconds of inactivity

    return () => clearTimeout(timerId);
  }, [text]);

  useEffect(() => {
    if (text.length === 0) {
      setTimer(0); // Reset timer if text is cleared
      stopTimer(); // Stop the timer when typing is cleared
      setStartTime(null);
    }
  }, [text]);

  return (
    <div className="container my-3">
      <h1>Your Typing Speed</h1>
      <textarea
        rows="4"
        cols="50"
        onChange={handleTextChange}
        placeholder="Start typing..."
      />
      <p>Typed Text: {text}</p>
      <p>Characters: {text.length}</p>
      <p>Timer: {timer} seconds</p>
      <p>Typing Speed: {typingSpeed} WPM</p>
    </div>
  );
};

export default TypingSpeedCalculator;
