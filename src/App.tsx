import { BrowserRouter } from "react-router-dom";
import "../node_modules/scss-reset/_reset.scss";
import "@assets/sass/style.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./router";

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
