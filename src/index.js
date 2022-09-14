import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import {FavoritesContextProvider} from './store/favorites-context' //wrap around whole project so all components are able to interact with this context


ReactDOM.render(
  <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </FavoritesContextProvider>,
  document.getElementById("root")
);
