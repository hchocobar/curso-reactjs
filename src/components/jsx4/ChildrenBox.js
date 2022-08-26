import React from "react";

function Box(props) {
 return <div style={{border:'1px solid #000', margin:5, padding: 5}}>
    Contenido: {props.children}
  </div>;
}

export default Box
