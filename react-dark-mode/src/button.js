import React from 'react';

export default function Button(props){
    const { title, type } = props;

    return(
        <button className={type}>{title}</button>
    )
}