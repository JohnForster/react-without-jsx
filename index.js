import { React, ReactDOM } from "unpkg.com/react/";

const root = document.querySelector("#root");
const e = React.createElement;

const App = () => {
  return e("div", {}, e("h1", {}, "Hello World"));
};

ReactDOM.render(App(), root);
