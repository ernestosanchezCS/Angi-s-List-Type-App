import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../pages/Home";
export default function PreviousWork() {
  const [sliderXValue, setSliderXValue] = useState(-100);
  const imgs = [
    "https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/09/17/12/05/solar-panels-944000_960_720.jpg",
    "https://cdn.pixabay.com/photo/2015/03/12/14/26/bathroom-670257_960_720.jpg",
  ];

  useEffect(() => {
    const slideShowImgs = document.querySelectorAll(".slideshow-imgs");
    const slideDots = document.querySelectorAll("li");

    let slider = setInterval(() => {
      slideShowImgs.forEach((slide, index) => {
        slide.style.transform = `translateX(${sliderXValue}%)`;
        slide.style.transition = `ease-in-out 0.5s `;
        if (sliderXValue / -100 === index) {
          slideDots[index].className = "active";
        } else {
          slideDots[index].className = "inactive";
        }
      });

      let convertedIndex = sliderXValue / -100;
      if (convertedIndex === imgs.length - 1) {
        setSliderXValue(0);
      } else {
        setSliderXValue(sliderXValue - 100);
        console.log(sliderXValue);
      }
    }, 3000);

    return () => {
      clearInterval(slider);
    };
  }, [sliderXValue]);
  return (
    <Container id="previousWork-section">
      <h3 className="subheader">Previous work</h3>

      <PreviousWorkWrapper id="slideshowImgs-wrapper">
        {imgs.map((item, index) => (
          <CarouselImg
            key={index}
            src={item}
            className="slideshow-imgs"
          ></CarouselImg>
        ))}
      </PreviousWorkWrapper>
      <ul className="dots-container">
        {imgs.map((item, index) =>
          index === 0 ? (
            <li
              className="active"
              onClick={() => {
                setSliderXValue(index * -100);
              }}
            ></li>
          ) : (
            <li
              className="inactive"
              onClick={() => {
                setSliderXValue(index * -100);
              }}
            ></li>
          )
        )}
      </ul>
    </Container>
  );
}
const CarouselImg = styled.img`
  width: 50vw;
  height: 50vh;
`;
const PreviousWorkWrapper = styled.article`
  display: flex;
  flex-direction: row;
  /* padding: 3em; */
  box-shadow: 0 3px 3px black;
  overflow: hidden;
  width: 50vw;
  align-self: center;
  margin: 2em;
  h3 {
    width: 80vw;
  }

  @media screen and (max-width: 760px) {
    width: 90vw;

    .dot {
      padding: 3em;
    }
  }
`;
