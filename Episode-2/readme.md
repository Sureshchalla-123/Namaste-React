## Episode 2

- creating a server using react and Buindler
- executing the react code using server

# Note

- we will create package.json by npm init -y
- Installing the react, react-dom it will add node_modules (all the dependencies)
- when installing the packages it will add to package.json dependencies and if we use -D it will add to development dependencies
- we are using npx parcel index.html (executing the parcel package and call the main project file)
- after running the project .parcel-cache , dist files are added (It is auto generated files we can also able to delete and we should add it to .gitignore fiels)

# Process

- clear the CDN links its not good for production ready
- install react and react-dom (npm install react react-dom)
- install a Bundler (webpack, parcel, viet) anyone
- configure the package.json
  - remove main
  - add development dependecy as bundeler (only uses in development phase)
  - add start script ("start" : "npx parcel index.html")
- Try the raw js code

  - // // writing React core
    // const heading1 = React.createElement("h1", {}, "heading1");
    // const heading2 = React.createElement("h1", {}, "heading2");
    // const heading3 = React.createElement("h1", {}, "heading3");
    // const parent2 = React.createElement("div", {}, heading3);
    // const parent = React.createElement("div", {}, [heading1, heading2, parent2]);
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(parent);

- Write a functional component and create root and render componet in root

  - const App = () => {
    return (
    <div className="App">
    <h1>Namaste React</h1>
    <h2>React is awesome</h2>
    </div>
    );
    };

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<App />);

# observation

- creating the root end of App.js file
- const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<App />);
- writing the jsx functional component
- const App = () => {
  return (
    <div className="App">
      <h1>Namaste React</h1>
      <h2>React is awesome</h2>
    </div>
    );
    };
- importing the modules
- import React from "react";
  import ReactDOM from "react-dom/client";
