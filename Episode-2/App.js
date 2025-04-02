import React from "react";
import ReactDOM from "react-dom/client";

// // writing React core
// const heading1 = React.createElement("h1", {}, "heading1");
// const heading2 = React.createElement("h1", {}, "heading2");
// const heading3 = React.createElement("h1", {}, "heading3");
// const parent2 = React.createElement("div", {}, heading3);
// const parent = React.createElement("div", {}, [heading1, heading2, parent2]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// // writing React with jsx with functional component

const App = () => {
  return (
    <div className="App">
      <h1>Namaste React</h1>
      <h2>React is awesome</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
