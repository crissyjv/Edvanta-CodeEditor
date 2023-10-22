import React, { useState } from "react";
import {ImHtmlFive} from 'react-icons/im';
import "../App.css";

function HtmlPage({html, handleChange}) {

  const [value, setValue] = useState("copy");

  return (
    <div className="right-page">
      <h3 className="heading"><ImHtmlFive style={{fontSize:"20px"}}/>HTML</h3>
      <textarea className="textarea" html={html} onChange={(e) => handleChange(e.target.value)}>{html}</textarea>

      <button className="copybtn" onClick={() => setValue("Copied")}>
        {value}
      </button>
    </div>
  );
}
export default HtmlPage;
