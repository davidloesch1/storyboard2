import React from "react";
import "../css/App.css";

function PagesTab(props) {
  return (
    <li class="page-item">
      <a class="page-link" href="/#" onClick={props.goTo}>
        {props.num}
      </a>
    </li>
  );
}

export default PagesTab
