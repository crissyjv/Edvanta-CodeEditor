import React from "react";
import { BiCodeBlock } from "react-icons/bi";

function Logo() {
  return (
    <>
    <h2><BiCodeBlock
        style={{
          fontSize: "40px",
          textAlign: "center",
          verticalAlign:"baseline"
        }}
      />{" "}
      Coding...
</h2>
    </>
  );
}

export default Logo;
