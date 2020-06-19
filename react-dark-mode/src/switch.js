import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Switch(props) {
    const [dark, setDark] = useState(false);
    const {mode, isDark}  = props;

    function handleToggle() {
        setDark(mode => !mode );

        console.log( 'dark is: '+dark);
        console.log( 'mode is: '+mode);
    }


    return(

            <button className="icon dark-mode-switch" onClick={handleToggle}>
                <FontAwesomeIcon icon={dark!=mode ? faMoon : faSun } />
            </button>

    )
}