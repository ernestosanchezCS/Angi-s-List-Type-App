import React from "react";
import styled from "styled-components";
import { Container } from "./Home";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { QUERY_ME, QUERY_USER_BY_ID } from "../utils/queries";
import { ProfileData } from "../components/ProfileData";

export default function UserProfile() {
  const { userId } = useParams();
  const { loading, error, data } = useQuery(QUERY_USER_BY_ID, {
    variables: {
      userId: userId,
    },
  });
  const userInfo = data?.userById || [];
  return (
    <Container>
      {Auth.loggedIn() && Auth.getProfile().data.email ? (
        loading ? (
          <h2>....loading</h2>
        ) : (
          // length, category, link - determine if business exists or not
          <ProfileData
            name={userInfo.fullName}
            email={userInfo.email}
            business={userInfo.business}
          />
        )
      ) : (
        window.location.replace("/login")
      )}
    </Container>
  );
}
