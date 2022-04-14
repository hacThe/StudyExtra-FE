import React from "react";
import './SaveOrExitButton.scss'
function SaveOrExitButton(props) {
  return (
    <div className="save-or-exit-btn">
      <span onClick={props.CancelOnClick} className="cancel-btn">Hủy thay đổi</span>

      <span onClick={props.SaveOnClick} className="save-btn">Lưu thay đổi</span>
    </div>
  );
}

export default SaveOrExitButton;
