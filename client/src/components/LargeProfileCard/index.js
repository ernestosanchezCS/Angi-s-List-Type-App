import React from "react";
import styled from "styled-components";

export default function LargeProfileCard(props) {
  return (
    <LargeCardWrapper id="info-card">
      <h3 id="businessName">{props.businessName}</h3>
      <h4>{props.businessField}</h4>
      <h5>{props.fullName}</h5>
      <div className="about-section">
        <h4>About</h4>
        <p>{props.about}</p>
      </div>
    </LargeCardWrapper>
  );
}

const LargeCardWrapper = styled.div`
  background-color: snow;
  box-shadow: 0 3px 3px 3px slategrey;
  border-radius: 3px;
  height: 100%;
  padding: 1em;
  display: flex;
  flex-direction: column;
  row-gap: 0.75em;
  background: url("https://pbs.twimg.com/media/FOd-GMGXsAMD-Yu?format=jpg&name=4096x4096");

  h3 {
    padding: 0;
  }
`;
