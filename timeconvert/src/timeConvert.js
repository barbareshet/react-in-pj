import React, { useState } from 'react';



export default function TimeConvert ( props ) {

    const [start, setDelta ] = useState(60);
    const { delta, title } = props;


    function handleChangeDelta(e) {
        const newValue = Number(e.target.value);
        setDelta(newValue);
    }
    return(
        <div>
            <label>{title}</label>
            <input type="number" value={start} onChange={handleChangeDelta}/>
        </div>        
    )
}