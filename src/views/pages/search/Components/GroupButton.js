import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import "../Search.scss";

export default function GroupButton(props) {
  const handleClick = (e) => {
    props.handleClickChangeType(e.target.name);
  };

  return (
    <Box
      className="custom-button-group"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
        <Button
          onClick={(e) => handleClick(e)}
          name="de-thi"
          className={props.active == "de-thi" ? "active" : null}
        >
          Đề thi
        </Button>
        <Button
          onClick={(e) => handleClick(e)}
          name="tai-lieu"
          className={props.active == "tai-lieu" ? "active" : null}
        >
          Tài liệu
        </Button>
        {/* <Button
          onClick={(e) => handleClick(e)}
          name="bai-hoc"
          className={props.active == "bai-hoc" ? "active" : null}
        >
          Bài học
        </Button> */}
        <Button
          onClick={(e) => handleClick(e)}
          name="khoa-hoc"
          className={props.active == "khoa-hoc" ? "active" : null}
        >
          Khóa học
        </Button>
      </ButtonGroup>
    </Box>
  );
}
