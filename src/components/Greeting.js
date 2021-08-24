import React, { useState } from 'react'

function Greeting() {
    const [changedText,setChangedText]=useState(true);

    const changeTextHandler=()=>{ 
        setChangedText(false);
    };

    return (
        <div>
            {changedText && <p>unchaned text</p>}
            {changedText && <p>good to see</p>}
            {!changedText && <p>chaned</p>}
            <button onClick={changeTextHandler}>tttt</button>
        </div>
    )
}

export default Greeting
