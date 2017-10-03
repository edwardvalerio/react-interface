
const reactContainer = $("#main-container");

const render = () => {

  ReactDOM.render(
    React.createElement(
      "div",
      { className: "demo" },
      "Hello React ",
        React.createElement("br"),
      React.createElement("input"),
      React.createElement(
        "p",
        null,
        new Date().toString()
      )
    ),
    reactContainer
  );
}

setInterval(render, 1000);
