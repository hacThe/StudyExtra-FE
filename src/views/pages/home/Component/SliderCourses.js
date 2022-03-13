import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCourses from "./CardCourses";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SliderCourses extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,

          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <Slider {...settings}>
          {this.props.courses.map(course => (
            <div>
              <CardCourses isPayment={this.props.isPayment} course={course}></CardCourses>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}