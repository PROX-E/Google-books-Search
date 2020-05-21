import React from "react";

// Container component to use a bootstrap container without class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}


// Row component to let us use a bootstrap row without class names
export function Row({ fluid, children }) {
    return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
  }

  
// Col component allows for sizing bootstrap columns with less syntax
export function Col({ size, children }) {
    return (
      <div
        className={size
          .split(" ")
          .map(size => "col-" + size)
          .join(" ")}
      >
        {children}
      </div>
    );
  }