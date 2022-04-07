import { IoReturnUpBack } from "react-icons/io5";
import React from "react";

function BackToPageButton(props) {
  return (
    <div className="back-icon-button">
      {props.icon || <IoReturnUpBack/>}
      <div className="content">{props.content}</div>
    </div>
  );
}

export default BackToPageButton;
