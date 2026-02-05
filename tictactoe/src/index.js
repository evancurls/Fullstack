// brings react
import { StrictMode } from "react";
// brings react's library to talk to web browsers
import { createRoot } from "react-dom/client";
// brings the styles for our components
import "./styles.css";

// brings the component we made in our app
import App from "./App";

// brings the rest of the pieces together, injects the final project into
// our hmtl file in the public folder
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);