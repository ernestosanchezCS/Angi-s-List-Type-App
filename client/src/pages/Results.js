import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Container } from "./Home";
import WorkerCard from "../components/WorkerCard";
import { useQuery } from "@apollo/client";
import { QUERY_BUSINESS_BY_CATEGORY } from "../utils/queries";
export default function Results() {
  let { tradesType } = useParams();
  console.log(tradesType);

  const { loading, error, data } = useQuery(QUERY_BUSINESS_BY_CATEGORY, {
    variables: {
      category: tradesType,
    },
  });
  console.log("q: ", data?.businessesCategory);
  const gqlResults = data?.businessesCategory || [];
  console.log("da: ", data);
  console.log(error);
  const [results, setResults] = useState(data);

  return (
    <Container>
      <h3 style={{ padding: "1em" }}>
        Searching for: <span style={{ fontWeight: 300 }}>{tradesType}</span>
      </h3>

      <ResultsCardsWrapper>
        {loading ? (
          <h1>...loading</h1>
        ) : gqlResults.length === 0 ? (
          <h3>No results</h3>
        ) : (
          gqlResults?.map((business) => (
            <WorkerCard
              businessName={business.name}
              workCategory={business.category}
              businessId={business._id}
            ></WorkerCard>
          ))
        )}
      </ResultsCardsWrapper>
    </Container>
  );
}

const ResultsCardsWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  row-gap: 2em;
  column-gap: 2em;
  padding: 2.5em;
  justify-content: center;
`;
