import React, { useEffect, useState, useRef } from "react";
import { Card } from "@mui/material";
import "../Announcement.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import URL from "../../../../services/api/config";
import { options } from "../../../../helpers/auth-header";
function DetailAnnouncement(props) {
  const { slug } = useParams();
  const refContent = useRef();
  const [announcement, setAnnouncement] = useState({});
  useEffect(() => {
    const fetApi = async () => {
      await axios
        .get(URL.URL_GET_ANNOUNCEMENT + slug, { ...options() })
        .then((res) => {
          setAnnouncement(res.data.data);
          refContent.current.innerHTML = res.data.data.content;
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetApi();
  }, []);

  const renderTime = (time) => {
    let a = new Date(time);
    let day;
    switch (a.getDay()) {
      case 0:
        day = "CN";
        break;
      case 1:
        day = "T2";
        break;
      case 2:
        day = "T3";
        break;
      case 3:
        day = "T4";
        break;
      case 4:
        day = "T5";
        break;
      case 5:
        day = "T6";
        break;
      case 6:
        day = "T7";
        break;
      default:
        day = "CN";
        break;
    }
    return (
      day +
      ", " +
      a.getDate() +
      "/" +
      (a.getMonth() + 1) +
      "/" +
      a.getFullYear() +
      " - " +
      a.getHours() +
      ":" +
      a.getMinutes()
    );
  };

  return (
    <Card
      style={{
        borderRadius: "8px",
        backgroundColor: "#fdfdfd",
        padding: "20px",
      }}
    >
      <div
        style={{
          fontFamily: "'Montserrat', san-serif",
          fontSize: "22px",
          color: "black",
          fontWeight: "600",
          lineHeight: "23px",
        }}
      >
        {announcement.title ? announcement.title : "Không có"}
      </div>
      <div
        style={{
          fontFamily: "'Montserrat', san-serif",
          fontStyle: "italic",
          color: "#666",
          fontSize: "14px",
          margin: "10px 0",
        }}
      >
        {announcement.updatedAt ? renderTime(announcement.updatedAt) : "Lỗi"}
      </div>
      <div
        ref={refContent}
        style={{ fontSize: "14px" }}
        className="content"
      ></div>
    </Card>
  );
}

export default DetailAnnouncement;
