import React, { useCallback, useRef, useState } from "react";
import { Header } from "./Header.tsx";
import {Footer} from "./Footer.tsx"
import '../styles/DragArea.css'
import { EditSection } from "./EditSection.tsx";

const widgets = {
    header: 'header',
    footer: 'footer'
}

const availableWidgets = [
    widgets.header, widgets.footer
]

export const DragArea = () => {
    const [selectedWidgets, setSelectedWidgets] = useState([]);
    const [isDragged, setIsDragged] = useState(false);
    const [editableIndex, setEditableIndex] = useState(-1);

    const draggedWidget = useRef();
    const draggedNode = useRef();

    const handleDragStart = useCallback((event, widgetType) => {
        draggedWidget.current = widgetType;
        draggedNode.current = event.target;
        setTimeout(() => {
            setIsDragged(true);
        })
    }, []);

    const handleOnDrop = () => {
        // const widget = getWidgets(draggedWidget.current);
        if (draggedWidget.current) {
            setSelectedWidgets([...selectedWidgets, draggedWidget.current]);
            draggedWidget.current = undefined;
        }
    }

    const handleDragEnd = useCallback(() => {
        if (!draggedWidget.current) {
            return;
        }
        draggedWidget.current = undefined;
        draggedNode.current = undefined;
        setIsDragged(false);
    }, []);

    // const getDraggedItemStyle = useCallback((currentDraggedWidget) => {
    //     if (draggedWidget.current?.groupIndex === currentDraggedGroup.groupIndex && draggedGroup.current?.itemIndex === currentDraggedGroup.itemIndex) {
    //         return "dragged-group";
    //     }
    //     return "";
    // }, []);

    const getWidgets = (datatItem, index?) => {
        if (datatItem === widgets.header) {
            return <Header editable={index === editableIndex}></Header>
        } else if (datatItem === widgets.footer) {
            return <Footer></Footer>
        }
    }

    const removeItem = (index) => {
        let newList = [...selectedWidgets];
        newList.splice(index, 1);
        setSelectedWidgets(newList);
    }

    const toggleEditable = (index) => {
        if(editableIndex >=0 ) {
            setEditableIndex(-1);
            return;
        }
        setEditableIndex(index);
    }

    return (
        <div className="drag-area">
            <div className="widgets-area">
                <div style={{marginBottom: '50px'}}>
                    Widgets
                </div>
                {availableWidgets.map((availableWidget, availableWidgetIndex) => (
                    <div key={availableWidgetIndex}
                        style={{marginBottom: '5px'}}
                        draggable
                        onDragStart={(event) => handleDragStart(event, availableWidget)}
                        onDragEnd={handleDragEnd}>
                        {getWidgets(availableWidget, -2)}
                    </div>
                ))}
            </div>
            <div className="selected-widgets-area"
                onDrop={handleOnDrop}
                onDragOver={(e) => e.preventDefault()}>
                <div style={{marginBottom: '50px'}}>
                    Drag Area
                </div>
                {selectedWidgets.map((selectedWidget, selectedWidgetIndex) => (
                    <div key={selectedWidgetIndex}
                        style={{marginBottom: '5px'}}
                        // className={getDraggedItemStyle()}
                        >
                            <div style={{display: 'inline-block'}}>
                            <EditSection removeItem={removeItem} 
                            index={selectedWidgetIndex}
                            toggleEditable={toggleEditable}
                            editable={selectedWidgetIndex === editableIndex}></EditSection>
                        {getWidgets(selectedWidget, selectedWidgetIndex)}
                                </div>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}