import React, { useCallback, useRef, useState } from "react";
import '../styles/DragArea.css'

const data = [
    {group: "List1", items: ['1', '2', '3', '4', '5']},
    {group: "List2", items: ['6', '7', '8', '9']},
]

export const DragArea = () => {
    const [list, setList] = useState(data);
    const [isDragged, setIsDragged] = useState(false);

    const draggedGroup = useRef();
    const draggedNode = useRef();

    const handleDragStart = useCallback((event, currentDraggedGroup) => {
        draggedGroup.current = currentDraggedGroup;
        draggedNode.current = event.target;
        setTimeout(() => {
            setIsDragged(true);
        })
    }, []);

    const handleDragEnter = (event, draggedOnGroup) => {
        const currentDraggedGroup = draggedGroup.current;
        if (currentDraggedGroup && event.target !== draggedNode.current) {
            setList(previousList => {
                let newList = JSON.parse(JSON.stringify(previousList));
                newList[draggedOnGroup.groupIndex].items.splice(draggedOnGroup.itemIndex, 0, newList[currentDraggedGroup.groupIndex].items.splice(currentDraggedGroup.itemIndex, 1)[0]);
                draggedGroup.current = draggedOnGroup;
                return newList;
            })
        }
    }

    const handleDragEnd = useCallback(() => {
        if (!draggedGroup.current) {
            return;
        }
        draggedGroup.current = undefined;
        draggedNode.current = undefined;
        setIsDragged(false);
    }, []);

    const getDraggedItemStyle = useCallback((currentDraggedGroup) => {
        if (draggedGroup.current?.groupIndex === currentDraggedGroup.groupIndex && draggedGroup.current?.itemIndex === currentDraggedGroup.itemIndex) {
            return "dragged-group drag-item";
        }
        return "drag-item";
    }, []);

    return (
        <div className="drag-area">{
            list.map((dataGroup, groupIndex) => (
                <div key={dataGroup.group} className="drag-group">
                    <div>{dataGroup.group}</div>
                    {
                        dataGroup.items.map((dataItem, itemIndex) => (
                            <div key={itemIndex} 
                                className={isDragged ? getDraggedItemStyle({groupIndex, itemIndex}) : "drag-item"} 
                                draggable 
                                onDragStart={(event) => handleDragStart(event, {groupIndex, itemIndex})}
                                onDragEnter={(event) => handleDragEnter(event, {groupIndex, itemIndex})}
                                onDragEnd={handleDragEnd}>{dataItem}</div>
                        ))
                    }
                </div>
            ))
        }</div>
    );
}