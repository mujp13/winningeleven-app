import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFutbol,
  faFrog,
  faListUl,
  faListOl,
  faPenAlt,
  faGlobeAmericas,
  faBookOpen,
  faComment,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";
import * as serviceWorker from "./serviceWorker";
import { TeamListProvider } from "./contexts/TeamListContext";
import { TeamProvider } from "./contexts/TeamContext";
import App from "./components/App/App";
import "./index.css";

library.add(
  faFutbol,
  faFrog, // logo
  faListUl, // style: listicle
  faListOl, // style: howto
  faGlobeAmericas, // style: news
  faPenAlt, // style: interview
  faBookOpen, // style: story
  faComment,
  faQuoteLeft
);

ReactDOM.render(
  <BrowserRouter>
    <TeamListProvider>
      <TeamProvider>
        <App />
      </TeamProvider>
    </TeamListProvider>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
