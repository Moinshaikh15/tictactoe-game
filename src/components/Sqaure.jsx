import { useState } from 'react';

function Sqaure(props){
    
    return(
        <button className="square" onClick={(e)=>props.updateBoard()}>{props.value}</button>
    )
}
export default Sqaure;