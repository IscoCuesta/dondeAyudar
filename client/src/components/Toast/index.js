import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div aria-live="polite" className="general" aria-atomic="true">
      <div className="toast">
        <div className="toast-header">
          <strong className="mr-auto">Alert!</strong>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">
          {props.alert}
        </div>
      </div>
    </div>
  );
}

export default FriendCard;
