/*const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World this from React"
);*/

/*
Below is the code for the nested tags in html like

<div id="parent">
    <div id= "child">
        <h1>"i am h1 tag"</h1>
        <h2>"i am h2"</h2>
    </div>
</div>


if you want to pass the two heading we need to pass them as array 
*/
// The parent is the react element which is nothing but the javascript object.
// ReactElement(object) => HTML (Browser understandable)
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
  ])
);
//The above thing is not an  h1 element it is a react element

console.log(parent); // this willreturn the object

const root = ReactDOM.createRoot(document.getElementById("root"));
// while the above parent object rendering onto the dom that object is converted into the HTML and puts into the dom.
root.render(parent); // this take the object and convert into heading tag and puting into the browser.
