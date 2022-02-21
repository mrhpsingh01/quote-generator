import React from "react";

function QuoteAuthor(props) {
  return (
    <div style={{ color: props.color }}>
      <span>- {props.author}</span>
    </div>
  );
}

export default QuoteAuthor;
