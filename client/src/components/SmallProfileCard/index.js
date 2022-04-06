import React from "react";
import styled from "styled-components";
export const SmallProfileCard = (props) => {
  return (
    <SmallCardWrapper>
      <p>{props.cardHeader}</p>
      <p>{props.cardContent}</p>
    </SmallCardWrapper>
  );
};

const SmallCardWrapper = styled.div`
  flex: 1 1 5em;
  display: flex;
  flex-direction: column;
  background-color: #7298e1;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 3px 3px 3px slategrey;
  color: white;
  font-size: 1.25rem;
  row-gap: 1em;
  p:last-of-type {
    color: green;
    font-weight: 700;
  }
`;
