import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

function IntroVideoModal({videoId, toogle, courseName}) {
  return (
    <div className="video-intro-modal">
      <div onClick={toogle} className="modal-overlay"></div>
      <div className="modal-content">
        <AiFillCloseCircle onClick={toogle} className="close-btn"/>
        <h2 className="modal-name">Giới thiệu khóa học</h2>

        <h1 className="course-name">{courseName}</h1>

        <div className="aspect-ratio">
          <iframe
            id="video"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
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
