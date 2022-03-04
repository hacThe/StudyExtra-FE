import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function IntroVideoModal(props) {
  return (
    <div className="video-intro-modal">
      <div onClick={props.toogle} className="modal-overlay"></div>
      <div className="modal-content">
        <AiFillCloseCircle onClick={props.toogle} className="close-btn"/>
        <h2 className="modal-name">Giới thiệu khóa học</h2>

        <h1 className="course-name">This is tên khóa học</h1>

        <div class="aspect-ratio">
          <iframe
            id="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/WN7OOohsXD8?autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default IntroVideoModal;
