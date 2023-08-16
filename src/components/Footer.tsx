import React from "react";

export const Footer = () => {
    return (
        <footer className='footer'>
            <ul style={{textAlign: 'left', listStyleType: 'none'}}>
                <li style={{fontSize: '20px'}}>Heading 1</li>
                <li >Item 1</li>
                <li >Item 2</li>
            </ul>
            <ul style={{textAlign: 'left', listStyleType: 'none'}}>
                <li style={{fontSize: '20px'}}>Heading 2</li>
                <li >Item 1</li>
                <li >Item 2</li>
            </ul>
            <ul style={{textAlign: 'left', listStyleType: 'none'}}>
                <li style={{marginRight: '10px'}}>Copyright 2022</li>
            </ul>
      </footer>
    )
}