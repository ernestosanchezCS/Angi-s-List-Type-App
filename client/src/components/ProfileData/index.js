import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddBusiness from "./AddBusiness";

export const ProfileData = (props) => {
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (props.business.length === 0) {
      setBtnDisabled(true);
    } else {
      const business = props.business[0];
      console.log(business);
      setCategoryName(business.category);
      setLink(business._id);
    }
  }, []);

  return (
    <ProfileWrapper>
      <Header>
        <h1>{props.name}</h1>
        <Button
          variant="contained"
          style={{ borderRadius: "50px" }}
          id="business-btn"
          disabled={btnDisabled}
          href={`/businesses/${link}`}
        >
          View Business
        </Button>
      </Header>
      <h3>
        Business Type: <span>{categoryName}</span>
      </h3>
      <h4>
        Email: <span>{props.email}</span>
      </h4>

      <ContactWrapper></ContactWrapper>
      <AddBusiness></AddBusiness>
    </ProfileWrapper>
  );
};
const ProfileWrapper = styled.article`
  padding: 2em;
  display: flex;
  flex-direction: column;
  row-gap: 1.5em;
  h3 {
    font-weight: 600;
  }
  h3 span,
  h4 span {
    font-weight: 300;
  }
  p {
    font-size: 1.25rem;
  }

  #includeBusiness-wrapper {
    display: flex;
    column-gap: 2em;
    align-items: center;
  }
`;
const ContactWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  align-items: center;

  & > h1,
  button {
    flex: 1 1 5em;
  }
  button {
    max-width: 20vw;
  }
`;
