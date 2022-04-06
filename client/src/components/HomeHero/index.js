import React from "react";
import styled from "styled-components";
import ShortCut from "./ShortCut";
import ForestIcon from "@mui/icons-material/Forest";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import ShowerIcon from "@mui/icons-material/Shower";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import CarpenterIcon from "@mui/icons-material/Carpenter";
import { About } from "./About";

export const Hero = () => {
  return (
    <HeroWrapper>
      <h1>Fast track your needs.</h1>
      <ShortcutsWrapper>
        <ShortCut
          tradeDisplay={<ForestIcon className="icon" />}
          tradeTitle="Landscaping"
        ></ShortCut>
        <ShortCut
          tradeDisplay={<ElectricBoltIcon className="icon" />}
          tradeTitle="Electrical"
        ></ShortCut>
        <ShortCut
          tradeDisplay={<ShowerIcon className="icon" />}
          tradeTitle="Plumbing"
        ></ShortCut>
        <ShortCut
          tradeDisplay={<FormatPaintIcon className="icon" />}
          tradeTitle="Painting"
        ></ShortCut>
        <ShortCut
          tradeDisplay={<CarpenterIcon className="icon" />}
          tradeTitle="Carpentry"
        ></ShortCut>
      </ShortcutsWrapper>
      <About></About>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  row-gap: 5em;
  padding-top: 5em;

  h1,
  h2 {
    padding: 0 1em;
  }
`;

const ShortcutsWrapper = styled.article`
  background-color: #7298e1;
  display: flex;
  flex-wrap: wrap;
  column-gap: 2em;
  row-gap: 2em;
  color: white;
  align-items: center;
  padding: 2em;

  .icon {
    font-size: 10rem;
  }

  .shortcut-btn {
    flex: 1 1 10em;
    color: white;
    text-decoration: none;
  }

  .shortcut-btn:hover {
    h3 {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
