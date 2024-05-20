import React, { useState } from "react";
import "./App.css";
import TodoInput from "./component/input/TodoInput";
import TodoContainer from "./component/container/TodoContaier";
import Button from "./component/TodoButton/TodoButton";

function App() {
  const [textValue, setTextValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleAddOption = () => {
    if (textValue.trim() !== "") {
      setOptions([...options, textValue]);
      setTextValue("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const submittedData = {
      text: textValue,
      option: selectedOption,
    };
    console.log("データ：", submittedData);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TodoApp</h1>
        <form onSubmit={handleSubmit}>
          <TodoInput
            textValue={textValue}
            handleTextChange={handleTextChange}
            handleAddOption={handleAddOption}
          />
          <TodoContainer
            options={options}
            selectedOption={selectedOption}
            handleOptionChange={handleOptionChange}
            handleSubmit={handleSubmit}
          />
          <Button type="submit" className="submit-button" label="送信" />
        </form>
        {selectedOption && (
          <div className="submitted-data">
            <h2>送信されたデータ</h2>
            <p>選択されたオプション：{selectedOption}</p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
