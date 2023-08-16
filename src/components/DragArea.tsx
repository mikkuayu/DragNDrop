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

    const getWidgets = (datatItem) => {
        if (datatItem === widgets.header) {
            return <Header></Header>
        } else if (datatItem === widgets.footer) {
            return <Footer></Footer>
        }
    }

    const removeItem = (index) => {
        let newList = [...selectedWidgets];
        newList.splice(index, 1);
        setSelectedWidgets(newList);
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
                        {getWidgets(availableWidget)}
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
                            <EditSection removeItem={removeItem} index={selectedWidgetIndex}></EditSection>
                        {getWidgets(selectedWidget)}
                                </div>
                        
                    </div>
                ))}
            </div>
            {// list.map((dataGroup, groupIndex) => (
            //     <div key={dataGroup.group} className="drag-group">
            //         <div>{dataGroup.group}</div>
            //         {
            //             dataGroup.items.map((dataItem, itemIndex) => (
            //                 <div key={itemIndex} 
            //                     className={`${getDraggedItemStyle({groupIndex, itemIndex})} "drag-item"`} 
            //                     draggable 
            //                     onDragStart={(event) => handleDragStart(event, {groupIndex, itemIndex})}
            //                     onDragEnter={(event) => handleDragEnter(event, {groupIndex, itemIndex})}
            //                     onDragEnd={handleDragEnd}>
            //                         {getWidgets(dataItem)}
            //                         {/* {dataItem === widgets.header ? <Header></Header> : dataItem} */}
            //                 </div>
            //             ))
            //         }
            //     </div>
            // ))
        }</div>
    );
}