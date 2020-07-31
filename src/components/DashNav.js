import React from "react";
import "../css/App.css";

function DashNav(props) {
  return (
    <>
      <ul class="nav flex-column dash-nav">
        <li class="nav-item">
          <a class="nav-link active" href="/#">
            My Plots
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">
            My Submissions
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/#">
            My Comments
          </a>
        </li>
      </ul>
    </>
  );
}

export default DashNav;
