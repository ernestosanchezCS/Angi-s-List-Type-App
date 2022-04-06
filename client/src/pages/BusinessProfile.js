import React from "react";
import styled from "styled-components";
import LargeProfileCard from "../components/LargeProfileCard";
import ReviewCard from "../components/ReviewCard";
import ExperienceCard from "../components/ExperienceCard";
import PreviousWork from "../components/PreviousWork";
import { SmallProfileCard } from "../components/SmallProfileCard";
import { Container } from "./Home";
import { useQuery } from "@apollo/client";
import { QUERY_BUSINESS_BY_ID } from "../utils/queries";
import { useParams } from "react-router-dom";

export const BusinessProfile = () => {
  const { businessId } = useParams();

  const { data, loading, error } = useQuery(QUERY_BUSINESS_BY_ID, {
    variables: {
      businessId: businessId,
    },
  });

  const businessData = data?.businessById || null;
  // console.log(JSON.stringify(error, null, 2));
  const reviewData = businessData?.reviews || [];
  const experienceData = businessData?.experience || [];
  return (
    <Container id="business-page">
      {loading ? (
        <h1>...loading</h1>
      ) : (
        <ProfileInfoWrapper>
          <div className="smallCards-Container">
            <SmallProfileCard
              cardHeader="Average Work Rating"
              cardContent={businessData.avgScore}
            />
            <SmallProfileCard cardHeader="Completed Jobs" cardContent="7" />
          </div>
          <div className="largeCard-Container">
            <LargeProfileCard
              businessName={businessData.name}
              fullName={businessData.owner}
              about={businessData.description}
              previousWork={businessData.experience}
            ></LargeProfileCard>
          </div>
        </ProfileInfoWrapper>
      )}
      <div className="row ">
        <h3 className="subheader ">Check out Reviews</h3>
      </div>
      <div className="card">
        {reviewData.length === 0 ? (
          <h3>No reviews.</h3>
        ) : (
          <ProfileInfoWrapper>
            {reviewData.map((review) => (
              <ReviewCard
                reviewName={review.reviewAuthor}
                reviewText={review.reviewText}
                createdDate={review.createdDate}
              ></ReviewCard>
            ))}
          </ProfileInfoWrapper>
        )}
      </div>
      <div className="previousWork-wrap">
        <PreviousWork></PreviousWork>
        <div className="card">
          {experienceData.length === 0 ? (
            <h3>No experience posted yet.</h3>
          ) : (
            <ProfileInfoWrapper>
              {experienceData.map((experience) => (
                <ExperienceCard
                  workType={experience.workType}
                  workDescription={experience.workDescription}
                ></ExperienceCard>
              ))}
            </ProfileInfoWrapper>
          )}
        </div>
      </div>
    </Container>
  );
};

const ProfileInfoWrapper = styled.article`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  .smallCards-Container,
  .largeCard-Container {
    padding: 3em;
  }
  .smallCards-Container {
    flex: 1 1 30%;
    display: flex;
    order: 1;
    flex-direction: column;
    justify-content: center;
    row-gap: 2em;
  }


  .largeCard-Container {
    flex: 1 1 65%;
    order: 2;
  }

  @media screen and (max-width: 760px) {
    flex-direction: column;

    .largeCard-Container,
    .smallCards-Container {
      padding: 1em;
    }
    .largeCard-Container {
      order: 1;
    }

    .smallCards-Container {
      order: 2;
    }
  }
`;
