import React, { Component } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import "./DragAndDropList.scss";
// fake data generator
const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `This is content for item ${k}`,
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: "8px 12px",
  margin: `0 0 ${grid}px 0`,
  width: "100%",
  borderRadius: "10px",
  // change background colour if dragging
  background: isDragging ? "#e0e0e0" : "#f4f4f4",
  borderBottom: isDragging ? "3px solid #ccc" : "none",
  font: "'Montserrat', san-serif",
  fontSize: "1.4rem",
  fontWeight: "500",
  boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: !isDraggingOver ? "white" : "white",
  width: "100%",
});

class DragAndDropList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: getItems(8),
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items,
    });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      className="drag-and-drop-item"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <div className="justify-content-between">
                        {` ${index + 1}. ${item.content}`}
                        <div className="align-center">
                          <div className="action-wrapper">
                            <AiOutlineEdit />
                          </div>
                          <div className="action-wrapper">
                            <AiOutlineDelete />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default DragAndDropList;
