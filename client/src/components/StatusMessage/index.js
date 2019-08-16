import React from "react";

function StatusMessage(props) {
  const message = props.status ? "" : <h4>Lo sentimos, no pudimos encontrar ningún post con esas necesidades</h4>;    
  return (
    <div className="mt-3 mb-5">{message}</div>
  );
}

export default StatusMessage;