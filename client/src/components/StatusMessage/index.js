import React from "react";

function StatusMessage(props) {
  if (!props.status){
    return (
      <div className="mt-3 mb-5"><h4>Lo sentimos, no pudimos encontrar ningún post con esas necesidades</h4></div>
    );
  }
  else{
    return (
      ""
    );
  }
}

export default StatusMessage;