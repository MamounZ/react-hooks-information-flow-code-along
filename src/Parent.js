import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("white");


  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child parentColor={color} setParentColor={setColor} childrenColor={childrenColor} setChildrenColor={setChildrenColor} />
      <Child parentColor={color} setParentColor={setColor} childrenColor={childrenColor} setChildrenColor={setChildrenColor} />
    </div>
  );
}

export default Parent;
