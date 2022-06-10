import React, { useEffect, useState } from "react";
import { Card, Divider, Pagination } from "@mui/material";
import { BsFillCaretRightFill } from "react-icons/bs";
import "../Announcement.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import URL from "../../../../services/api/config";
import { Markup } from "interweave";

function GeneralNotion(props) {
  const [listAnnouncement, setListAnnouncement] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    const fetApi = async () => {
      await axios
        .get(URL.URL_GET_ALL_ANNOUNCEMENT)
        .then((res) => {
          console.log(res.data);
          setListAnnouncement(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetApi();
  }, []);

  const renderTime = (time) => {
    let a = new Date(time);
    return (
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

  const renderNumberOfPage = () => {
    if (listAnnouncement.length % 8 == 0) {
      return listAnnouncement.length / 8;
    } else {
      return Math.floor(listAnnouncement.length / 8) + 1;
    }
  };

  const choosePage = (e, num) => {
    setPage(num);
  };

  return (
    <Card
      style={{
        backgroundColor: "#f4f4f4",
        padding: "20px",
        border: "none",
        boxShadow: "none",
      }}
    >
      <div
        style={{
          color: "black",
          fontFamily: "'Montserrat', san-serif",
          fontSize: "28px",
          fontWeight: "700",
          marginBottom: "10px",
        }}
      >
        THÔNG BÁO CHUNG
      </div>
      <Divider></Divider>
      <div style={{ marginTop: "15px", marginBottom: "15px" }}>
        {listAnnouncement.length !== 0 ? (
          listAnnouncement.map((item, index) => {
            if (index < page * 8 && index >= (page - 1) * 8) {
              return (
                <div
                  key={index}
                  style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                    marginRight: "15px",
                    marginBottom: "15px",
                    backgroundColor: "#E2E2E2",
                    borderRadius: "10px",
                    boxShadow: "2px 2px 4px rgb(0 0 0 / 25%)",
                    padding: "24px",
                  }}
                >
                  <Link
                    to={`${item.slug}`}
                    style={{
                      display: "flex",
                      justifyContent: "start  ",
                      textAlign: "justify",
                      boxShadow: "none",
                      flexDirection: "column",
                    }}
                  >
                    <div style={{ marginBottom: "18px" }} className="title">
                      {item.title}
                    </div>
                    <div
                      style={{ marginBottom: "18px", fontStyle: "italic" }}
                      className="notification-time"
                    >
                      {renderTime(item.updatedAt)}
                    </div>
                    <div
                      style={{ marginBottom: "18px", color: "black" }}
                      className="content"
                    >
                      <Markup content={item.content}></Markup>
                    </div>
                    <div
                      style={{
                        fontWeight: "700",
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "black",
                      }}
                    >
                      Xem thêm
                    </div>
                  </Link>
                </div>
              );
            }
          })
        ) : (
          <h1
            style={{
              margin: "50px",
              fontSize: "16px",
              width: "100%",
              textAlign: "center",
            }}
          >
            Không có kết quả tìm kiếm
          </h1>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          onChange={(event, page) => choosePage(event, page)}
          size="small"
          count={renderNumberOfPage()}
          color="primary"
        />
      </div>
    </Card>
  );
}

export default GeneralNotion;
