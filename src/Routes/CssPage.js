import React, {useState} from "react";
import {SiCss3} from "react-icons/si";
import "../App.css";


function CssPage({css, handleChange}) {
    const [value, setValue] = useState('copy');
    function copied(){
            setValue('copied')
    }

  return (
    <div className="right-page">
      <h3 className="heading"><SiCss3 style={{fontSize:"20px"}}/>CSS</h3>
      <textarea className="textarea" css={css} onchange={(e) => handleChange(e.target.value)}>{css}</textarea>
      <button className="copybtn" onClick={copied}>{value}</button>

    </div>
  );
}

export default CssPage;
