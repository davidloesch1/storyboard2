import React from "react";
import "../css/App.css";

function CharRow(props) {
  return (
    <>
      <tr>
        <td>{props.data.name}</td>
        <td>{props.data.bio}</td>
      </tr>
    </>
  );
}

export default CharRow;
