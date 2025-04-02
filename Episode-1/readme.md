## Episode 1

- creating a simple hello world program in html
- creating a simple hello world program in javascript
- creating a simple hello world program in react js

# Note

- Until here we dont install any packages or package.json

# Process

- create a new folder for project
- create index.html and write simple hello world and check the browser window
- create index.js and link to html file and write hello world in js and manupalte the dom
- now place the react CDN links into the <body></body> tag and go a head to use the react into our project
- create the react elements using React.createElement(), it will take 3 orguments {element tag, {attributes} , children}
- create the react root using React.createRoot(), take an orgument document.getElementById("root")
- render the root using major parent element root.render("parent")

# observation

- in JS const heading = document.createElement("h1");
- in React const heading1 = React.createElement("h1", {}, "heading1");
- in JS const root = document.getElementById("root");
- in React const root = ReactDOM.createRoot(document.getElementById("root"));
- in JS root.appendChild(heading);
- in React root.render(parent);
