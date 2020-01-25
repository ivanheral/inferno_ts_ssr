import App from "../../client/ts/app";
import { BrowserRouter } from "inferno-router";
import { hydrate } from "inferno-hydrate";
const wrapper = (<BrowserRouter>
  <App />
</BrowserRouter>);
hydrate(
  wrapper,
  document.getElementById("root")
);