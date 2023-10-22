import React, {useState} from "react";
import {SiJavascript} from "react-icons/si";
import "../App.css";

function JavascriptPage({js, handleChange}) {
    const [value, setValue] = useState('copy');
    function copied(){
            setValue('copied')
    }

  return (
    <div className="right-page">
      <h3 className="heading"><SiJavascript style={{fontSize:"20px",marginRight:"2px"}}/>JAVASCRIPT</h3>
      <textarea className="textarea" onchange={(e) => handleChange(e.target.value)}>{js}</textarea>
      <button className="copybtn" onClick={copied}>{value}</button>

    </div>
  );
}

export default JavascriptPage;
