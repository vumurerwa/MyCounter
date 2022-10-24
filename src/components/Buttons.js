import React from "react";
function Buttons(props){
  return(
    <>
    <div>
    <button onClick={()=>props.sub1()}>-</button>
    <button onClick={()=>props.add1()}>+</button>
    
    
    <button onClick={()=>props.reset()}>Reset</button>
    </div>
    
    </>
  );
}

export default Buttons;





