import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";



function Child({parentColor, setParentColor, childrenColor, setChildrenColor}) {

  function handleClick(){
    setParentColor(getRandomColor)
    setChildrenColor(getRandomColor)
  }

  return <div onClick={handleClick} className="child" style={{ backgroundColor: childrenColor }} />;
}

export default Child;
