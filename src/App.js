import React, { useState } from "react";
import "./styles.css";

const inputStyles = {
  marginTop: "1rem",
  padding: "1rem",
  width: "80%",
  border: "2px solid",
  borderRadius: "11px",
  fontSize: "larger",
  textAlign: "center"
};

// const spanStyles = {
//   padding: "0 2rem",
//    cursor: "pointer"
// };

const emojiDict = {
  "😎": "Stylish",
  "😂": "LoL",
  "😴": "Sleepy",
  "😪": "Lazy",
  "😔": "Sad",
  "😡": "Angry",
  "💖": "Heart",
  "🧁": "Ice-Cream",
  "💐": "Flower",
  "🎉": "Celebration"
};
const emojiList = Object.keys(emojiDict);

export default function App() {
  const [emojiMeaning, setEmojiMeaning] = useState("");

  const inputEventHandler = (event) => {
    const inputEmoji = event.target.value;

    // if text is cleared, reset the emojiMeaning to empty string
    if (inputEmoji === "") {
      setEmojiMeaning("");
    } else {
      if (inputEmoji in emojiDict) {
        setEmojiMeaning(emojiDict[inputEmoji]);
      } else {
        setEmojiMeaning("Sorry, this emoji is not in the database.");
      }
    }
  };
  const emojiClickHandler = (item) => {
    const emojiClicked = item;
    const meaning = emojiDict[emojiClicked];
    setEmojiMeaning(meaning);
  };

  return (
    <div className="App">
      <h1>Emoji Interpeter</h1>

      <input
        placeholder="Enter some emoji to find meaning"
        style={inputStyles}
        onChange={inputEventHandler}
      />

      <div className="showMeaning">{emojiMeaning}</div>

      <div className="emojiContainer">
        {emojiList.map((item) => {
          return (
            <span
              key={item}
              // style={spanStyles}
              style={{ fontSize: "2rem", padding: "0.7rem", cursor: "pointer" }}
              onClick={() => emojiClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
