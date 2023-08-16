import React, { useState } from "react";

export const Header = ({editable}) => {
    const [heading, setHeading] = useState('Heading')
    const [subtitle, setSubtitle] = useState('Subtitle');

    return (
        <div className='header'>
            {
                editable ? 
                <input style={{fontSize: '20px', paddingTop: '10px'}} value={heading} onChange={(event) => setHeading(event.target.value)}>
                </input> : 
                <div style={{fontSize: '20px', paddingTop: '10px'}}>{heading}
                </div>
            }
            {
                editable ? 
                <input style={{fontSize: '20px', paddingTop: '10px'}} value={subtitle} onChange={(event) => setSubtitle(event.target.value)}>
                </input> : 
                <div style={{fontSize: '15px', paddingBottom: '5px'}}>{subtitle}
                </div>
            }
        </div>
    )
}