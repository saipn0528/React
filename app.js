import React from "react";
import ReactDOM from "react-dom/client";

// jsk is not  writting html in javascript , it is like html like syntax.(it lookss like html)
//browser will not understand this so the parcel transpile the the jsx code in a way that it can be undestand by the browser.
//JSX => React.createElement => ReacrElement(JS OBJECT) => when rendered => HTML Element
//babel is the one which converts jsx into react.createelement

//React Element
const jsxheading = <h1 className="head">hello this is from jsx</h1>;

//React  Functional Component => just a javascript function.

const HeadingComponent = () => (
  <div id="continer">
    <h1>Hello I am from the React Functional Component</h1>
  </div>
);
//component inside a component is called the component composition.
const HeadingComponent1 = () => (
  <div>
    <HeadingComponent />
    <h1 className="head">hello i am using in functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent1 />);
