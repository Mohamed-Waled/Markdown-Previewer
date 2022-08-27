import React from "react";
import "./App.scss";
import Body from "./components/Editor/Body";

function App() {
  return (
    <div className="app">
      <h1 className="title">{`Markdown Editor & Previewer`}</h1>
      <div className="bodyy">
        <Body />
      </div>
    </div>
  );
}

export default App;
