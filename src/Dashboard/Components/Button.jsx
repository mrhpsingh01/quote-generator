import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Button(props) {
  return (
    <div>
      <button
        className="relative inline-block group focus:outline-none focus:ring"
        id={props.id}
        backgroundcolor={props.color}
        style={{ color: props.color }}
        onClick={props.handleClick}
        onSubmit={console.log(props.color)}
      >
        <span
          className={`absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-black group-hover:translate-y-1.5 group-hover:translate-x-1.5`}
        ></span>
        <span className="relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-current">
          New Quote <FaArrowRight className={`text-${props.color}`} />
        </span>
      </button>
    </div>
  );
}

export default Button;
