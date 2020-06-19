import React from 'react';


export default function (props) {

    const {placeHolder, type} = props;
    return(
        <input type={type} placeholder={placeHolder}/>
    )
}