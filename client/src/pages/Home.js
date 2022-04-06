import React from "react";
import styled from "styled-components";
import { Hero } from "../components/HomeHero/index";

export const Home = () => {
  return (
    <Container>
      <Hero></Hero>
    </Container>
  );
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  &#previousWork-section {
    .dots-container {
      display: flex;
      column-gap: 1em;
      align-self: center;

      font-size: 2rem;
      li {
        cursor: pointer;
      }
      .inactive {
        list-style: circle;
      }

      .active: {
        list-style: inherit;
      }
    }
  }

  &#business-page {
    border: solid black 3px;

    #title {
      padding: 0;
    }

    h3.subheader {
      padding-left: 1.25em;
      text-decoration: underline;
    }
    .previousWork-wrap {
      margin-top: 3em;
      padding: 2em 0;
    }
  }
`;
