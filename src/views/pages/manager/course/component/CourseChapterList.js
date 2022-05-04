import React, { Component, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { GrAddCircle } from "react-icons/gr";
import "./CourseChapterList.scss";

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
  background: isDragging ? "#e0e0e0" : "transparent",
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

function CourseChapterTile({ chapter, index }) {
  const [visible, setvisible] = useState(true);

  function toogleLessonTile() {
    setvisible(!visible);
  }

  function addNewChappterOnClick(e) {
    e.stopPropagation();
    alert("action-button-onclick");
  }

  function editChappterOnClick(e) {
    e.stopPropagation();
    alert("action-button-onclick");
  }

  function deleteChappterOnClick(e) {
    e.stopPropagation();
    alert("action-button-onclick");
  }

  return (
    <div className="course-chappter-tile">
      <div
        onClick={toogleLessonTile}
        dataBefore={!visible ? "+" : "-"}
        className="chapter-toogle display-flex justify-content-between"
      >
        <p className="chapter-name">{`${index + 1}. ${chapter.name}`}</p>
        <div className="chappter-action display-flex">
          <div onClick={addNewChappterOnClick} className="action-wrapper">
            <GrAddCircle size={"2.2rem"} />
          </div>
          <div onClick={editChappterOnClick} className="action-wrapper">
            <AiOutlineEdit size={"2.2rem"} />
          </div>
          <div onClick={deleteChappterOnClick} className="action-wrapper">
            <AiOutlineDelete size={"2.2rem"} />
          </div>
        </div>
      </div>

      {visible &&
        chapter.lessons.map((lesson, index) => (
          <div
            className="lesson-tile-wrapper"
            key={`lesson-${lesson.id}-${index}`}
          >
            <CourseLessonTile lesson={lesson} />
          </div>
        ))}
    </div>
  );
}

function CourseLessonTile({ lesson }) {
  return (
    <div className="course-lesson-tile display-flex justify-content-between">
      <div className="align-center">
        <svg
          style={{ marginRight: "12px" }}
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 3H4.5C2.84315 3 1.5 4.34315 1.5 6V12C1.5 13.6569 2.84315 15 4.5 15H13.5C15.1569 15 16.5 13.6569 16.5 12V6C16.5 4.34315 15.1569 3 13.5 3Z"
            stroke="#7B68EE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.25 9L7.5 6.75V11.25L11.25 9Z"
            stroke="#7B68EE"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span className="lesson-name">{`${lesson.index}. ${lesson.name}`}</span>
      </div>
      <span className="lesson-action display-flex">
        <div className="action-wrapper">
          <AiOutlineEdit size={"2.2rem"} />
        </div>
        <div className="action-wrapper">
          <AiOutlineDelete size={"2.2rem"} />
        </div>
      </span>
    </div>
  );
}

class CourseChapterList extends Component {
  constructor(props) {
    super(props);
    console.log({props})
    this.state = {
      items: props.chapters,
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps === this.props) return
    this.setState(
      {items: this.props.chapters}
    )
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
      items
    })
    this.props.setValues([...items])
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
                <Draggable key={item.name} draggableId={item.name} index={index}>
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
                      <CourseChapterTile chapter={item} index={index}/>
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

export default CourseChapterList;
