import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function LessonCard({ lesson }) {
  const handleClickCourses = () => {
    console.log("Click coures");
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
          alt="green iguana"
          image="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
        />
        <CardContent>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "700",
              fontFamily: "'Montserrat', san-serif",
            }}
            gutterBottom
            variant="h5"
            component="div"
          >
            {lesson.name}
          </Typography>
          <Typography
            style={{
              fontSize: "12px",
              color: "#939393",
              fontFamily: "'Montserrat', san-serif",
              marginTop: "5px",
            }}
            gutterBottom
            variant="h4"
            component="div"
          >
            This is name khóa học
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
