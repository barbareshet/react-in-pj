import React, { useState } from 'react';



export default function TimeConvert ( props ) {

    const [start, setSeconds ] = useState(3600);


    function convertTime(num) {
        return Math.floor( num * 1000 ) / 1000;
    }
    function convertTimesHandle(e, x){
        setSeconds(Number(e.target.value) * x );
    }


    return(

        <div>
            <label>Seconds</label>
            <input type="number" value={start} onChange={(e) => convertTimesHandle(e, 1)}/>
            <label>MIN</label>
            <input type="number" value={convertTime( start / 60)} onChange={(e) => convertTimesHandle(e, 60)}/>
            <label>HOURS</label>
            <input type="number" value={convertTime( start / 3600)} onChange={(e) => convertTimesHandle(e, 3600)}/>
        </div>        
    )
}
