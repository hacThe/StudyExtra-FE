import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCourses from "./CardCourses";
import '../Home.scss'

export default class SliderCourses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
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
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
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
            <div style={{margin: '0 10px'}}>
                <Slider {...settings}>
                    <div>
                        <CardCourses></CardCourses>
                    </div>
                    <div>
                        <CardCourses></CardCourses>
                    </div>
                    <div>
                        <CardCourses></CardCourses>
                    </div>
                    <div>
                        <CardCourses></CardCourses>
                    </div>
                    <div>
                        <CardCourses></CardCourses>
                    </div>
                    <div>
                        <CardCourses></CardCourses>
                    </div>
                    <div>
                        <CardCourses></CardCourses>
                    </div>
                    <div>
                        <CardCourses></CardCourses>
                    </div>
                </Slider>
            </div>
        );
    }
}