import React from "react";

function QuotesText(props) {
  return (
    <div style={{ color: props.color }}>
      <span>{props.quote}</span>
    </div>
  );
}

export default QuotesText;
