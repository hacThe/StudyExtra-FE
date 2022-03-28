import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { stringUtils } from "../../../../utilities";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function CardCourses(props) {
  const navigate = useNavigate();

  const handleClickCourses = () => {
    console.log("Course id:", props.course);
    console.log("Click coures");
    navigate(
      `/chi-tiet-khoa-hoc/${stringUtils.replaceSpaceWithDash(
        stringUtils.removeVietnameseTones(props.course.name)
      ).toLowerCase()}`
    );
  };

  return (
    <Card
      onClick={() => handleClickCourses()}
      style={{ margin: "10px" }}
      sx={{ maxWidth: 345 }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          // image="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
          image={
            props.course.imgUrl
              ? props.course.imgUrl
              : "https://files.fullstack.edu.vn/f8-prod/courses/7.png"
          }
          alt="green iguana"
        />
        <CardContent>
          <Typography
            style={{ fontSize: "18px", fontWeight: "700" }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.course.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            color: "#6F6F6F",
            fontSize: "14px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FaUserGraduate
              style={{
                paddingRight: "5px",
                transform: "translateY(-8%)",
                fontSize: "18px",
              }}
            ></FaUserGraduate>
            <div>{props.course.studentId.length}</div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <MdOutlineAccessTimeFilled
              style={{
                paddingRight: "5px",
                transform: "translateY(-15%)",
                fontSize: "22px",
              }}
            ></MdOutlineAccessTimeFilled>
            <div>999</div>
          </div>
          {!props.isPayment && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AiFillDollarCircle
                style={{
                  paddingRight: "5px",
                  transform: "translateY(-15%)",
                  fontSize: "22px",
                }}
              ></AiFillDollarCircle>
              <div>{props.course.price}</div>
            </div>
          )}
        </div>
      </CardActions>
    </Card>
  );
}
