"use client";
import { useEffect, useRef } from "react";
import style from "../styles/category.module.css";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

export default function Category() {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };
  return (
      <div className={`${style.category}`}>
          <Slider {...settings}>
            <div className={`p-12 border bg-white rounded-md ${style.card}`}>Card</div>
            <div className={`p-12 border bg-white rounded-md ${style.card}`}>Card</div>
            <div className={`p-12 border bg-white rounded-md ${style.card}`}>Card</div>
            <div className={`p-12 border bg-white rounded-md ${style.card}`}>Card</div>

          </Slider>
      </div>
  );
}