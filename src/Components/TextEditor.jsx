import React, { useState } from "react";

const TextEditor = (props) => {
  const [text, setText] = useState("");
  const [words, setWords] = useState(0);
  const [characters, setCharacters] = useState(0);
  // const [isChecked, setIsChecked] = useState(false);

  const convertToUpperCase = () => {
    let upperCaseText = text.toUpperCase();
    setText(upperCaseText);
  };

  const convertToLowerCase = () => {
    let lowerCaseText = text.toLowerCase();
    setText(lowerCaseText);
  };

  const clearText = () => {
    setText("");
    setWords(0);
    setCharacters(0);
  };

  const wordCount = () => {
    let trimmedText = text.trim();
    let wordsCount = trimmedText.split(/\s+/);
    setWords(wordsCount.length);
    setCharacters(trimmedText.length);
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Copied!");
      },
      () => {
        alert("Failed to copy");
      }
    );
  };

  // const onToggleSwitch = () => {
  //   setIsChecked(!isChecked);
  //   props.setStylee({
  //     backgroundColor: isChecked ? "" : "black",
  //     color: isChecked ? "" : "white",
  //   });
  // };

  return (
    <div className="texteditor pt-3" style={props.stylee}>
      <div className="container-fluid ">
        <div className="form-group">
          <label htmlFor="Title"> Please provide the given field</label>
          <textarea
          style={props.stylee}
            className="form-control"
            rows="6"
            value={text}
            id="Text"
            placeholder="Write anything you want"
            onChange={(e) => {
              setText(e.target.value);
              wordCount(); // Update count with each input
            }}
          ></textarea>
        </div>
        <div className="buttons flex">
          <button
            type="button"
            onClick={convertToUpperCase}
            className="btn btn-dark bg-slate-900"
          >
            Convert to Uppercase
          </button>
          <button
            type="button"
            onClick={convertToLowerCase}
            className="btn btn-dark mx-3 bg-slate-900"
          >
            Convert to Lowercase
          </button>
          <button
            type="button"
            onClick={() => copyText(text)}
            className="btn btn-dark bg-slate-900"
          >
            Copy
          </button>
          <button
            type="button"
            onClick={clearText}
            className="btn btn-dark bg-slate-900 mx-3"
          >
            Clear
          </button>
        </div>

        {/* <form>
          <div className="custom-control custom-switch float-right justify-content-center">
            <input
              type="checkbox"
              className="custom-control-input"
              id="switch2"
              checked={isChecked}
              onChange={onToggleSwitch}
            />
            <label className="custom-control-label" htmlFor="switch2">
              {isChecked ? "Disable Dark Mode" : "Enable Dark Mode"}
            </label>
          </div>
        </form> */}
      </div>
      <div className="container-fluid mt-3 mb-0 ">
        <p>
          Total Words: {words}
          <br />
          Total characters: {characters}
        </p>
        <h4 className="h4">Preview Text</h4>

        <pre className="mb-0 pb-3" style={props.style}>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview the text."}
        </pre>
      </div>
    </div>
  );
};


export default TextEditor;
