import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function ShortCut(props) {
  return (
    <Link to={`/trades/${props.tradeTitle}`} className="shortcut-btn">
      <Shortcut>
        {props.tradeDisplay}
        <h3>{props.tradeTitle}</h3>
      </Shortcut>
    </Link>
  );
}

const Shortcut = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  align-items: center;
  flex: 1 1 10em;
  cursor: pointer;
`;
