import React from "react";
import {FaEdit} from 'react-icons/fa'
import {MdRemoveCircle} from 'react-icons/md'
import {IoSave} from 'react-icons/io5';

export const EditSection = ({removeItem, index, toggleEditable, editable}) => {
    return (
            <div style={{display: 'flex', justifyContent: "end"}}>
                {
                    editable ? 
                    <IoSave style={{width: '20px', height: '20px'}} onClick={() => toggleEditable(index)}></IoSave>:
                    <FaEdit style={{width: '20px', height: '20px'}} onClick={() => toggleEditable(index)}></FaEdit>
                }
                <MdRemoveCircle style={{width: '20px', height: '20px'}} onClick={() => removeItem(index)}></MdRemoveCircle>
            </div>
    )
}