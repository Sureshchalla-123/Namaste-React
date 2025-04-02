// writing a hello world program in javascript
// const root = document.getElementById("root");

// const heading = document.createElement("h1");
// heading.textContent = "Hello, suresh!";

// root.appendChild(heading);

//creating a hello world program in react js

//--------------------------------------------

const heading1 = React.createElement("h1", {}, "heading1");
const heading2 = React.createElement("h1", {}, "heading2");
const heading3 = React.createElement("h1", {}, "heading3");
const parent2 = React.createElement("div", {}, heading3);
const parent = React.createElement("div", {}, [heading1, heading2, parent2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

// until here we dont need to use any server building import etc ...

// we can use react js in the browser directly by using the script tag in the index.html file
