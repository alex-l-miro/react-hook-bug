import ReactDOM from "react-dom/client";
import React from "react";
import { App } from "./App";

test("App", () => {
  const element = document.createElement("div");
  document.body.appendChild(element);
  const root = ReactDOM.createRoot(element);
  const comp = root.render(<App />);
});
