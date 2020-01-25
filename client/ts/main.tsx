import App from "./app";
import { BrowserRouter } from "inferno-router";
import { render } from "inferno";
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
