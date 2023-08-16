import React from "react";
import {FaEdit} from 'react-icons/fa'
import {MdRemoveCircle} from 'react-icons/md'

export const EditSection = ({removeItem, index}) => {
    return (
            <div style={{display: 'flex', justifyContent: "end"}}>
                <FaEdit style={{width: '20px', height: '20px'}}></FaEdit>
                <MdRemoveCircle style={{width: '20px', height: '20px'}} onClick={() => removeItem(index)}></MdRemoveCircle>
            </div>
    )
}