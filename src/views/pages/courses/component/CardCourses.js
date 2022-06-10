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
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { courseAction } from "../../../../actions/course.action";
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
    navigate(`/chi-tiet-khoa-hoc/${props.course.courseId}`);
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
          height="176"
          alt="green iguana"
          image={
            props.course.imgUrl
              ? props.course.imgUrl
              : "https://files.fullstack.edu.vn/f8-prod/courses/7.png"
          }
        />
        <CardContent>
          <Typography
            style={{
              fontSize: "17px",
              fontWeight: "600",
              fontFamily: "'Montserrat', san-serif",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {props.course.name.substring(0, 25) +
              (props.course.name.length > 25 ? "..." : "")}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Stack
          style={{ color: "#6E6E6E", marginLeft: "10px" }}
          direction="row"
          spacing={5}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FaUserGraduate
              style={{
                paddingRight: "5px",
                transform: "translateY(-8%)",
                fontSize: "18px",
              }}
            ></FaUserGraduate>
            <div
              style={{
                fontSize: "16px",
                fontFamily: "'Montserrat', san-serif",
              }}
            >
              {props.course.studentIds.length}
            </div>
          </div>

          {
            <div style={{ display: "flex", justifyContent: "center" }}>
              <AiFillDollarCircle
                style={{
                  paddingRight: "5px",
                  transform: "translateY(-15%)",
                  fontSize: "22px",
                }}
              ></AiFillDollarCircle>
              <div
                style={{
                  fontSize: "16px",
                  fontFamily: "'Montserrat', san-serif",
                }}
              >
                {props.course.price}
              </div>
            </div>
          }
        </Stack>
      </CardActions>
    </Card>
  );
}
