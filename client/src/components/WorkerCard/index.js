import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function WorkerCard(props) {
  return (
    <CardContainer>
      <div>
        <p className="header">{props.businessName}</p>
        <p className="subheader">{props.workCategory}</p>
      </div>
      <div className="recentWork-btn"></div>

      <div className="viewBusiness-btn">
        <Link to={`/businesses/${props.businessId}`}>
          <button id="viewBusiness">View Business</button>
        </Link>
      </div>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  flex: 1 1 10em;
  padding: 1.5em 1em;
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  border-radius: 5px;
  max-width: 20vw;
  box-shadow: 3px 3px 3px #1ec1cb;
  height: 35vh;
  background-color: #cddaf4;

  p {
    font-size: 1.5rem;
    &:last-of-type {
      font-size: 1.25rem;
    }
  }
  .recentWork-btn,
  .viewBusiness-btn {
    flex: 1 1 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .recentWork-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    text-decoration: underline;
  }
  .viewBusiness-btn {
    width: 100%;
    flex-basis: 15%;

    color: white;
    background-color: #1ec1cb;
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  #viewBusiness {
    color: white;
  }

  .header {
    font-size: 1.25rem;
  }

  .subheader {
    font-size: 0.7rem;
  }

  @media screen and (max-width: 1000px) {
    max-width: 35vw;
    height: 30vh;
  }

  @media screen and (max-width: 768px) {
    max-width: 90vw;
  }

  @media screen and (max-width: 435px) {
    height: 50vh;
  }
`;
