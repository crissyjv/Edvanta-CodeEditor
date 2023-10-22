import React from "react";

function Output({srcDoc}) {

  return (
    <div className="right-page">
      <h3 className="heading">WEBSITE</h3>
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Output;
