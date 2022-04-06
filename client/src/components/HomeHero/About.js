import React from "react";
import styled from "styled-components";

export const About = () => {
  return (
    <AboutWrapper>
      <h2>
        Sign up now, and getTraded into your next job in the blink of an eye!
      </h2>
      <img
        src="https://polytechnicscanada.ca/wp-content/uploads/2020/07/SkilledTrades-BlogPost-Image-1080x540-1.jpg"
        alt="group of construction trades workers"
      ></img>

      <div>
        <h3 id="mission">Our Mission</h3>
        <p>Tired of having people quit half through job at your home?</p>
        <p>
          Need a place to show off renovations you've done for clients, rather
          than relying on word of mouth?
        </p>
        <p>
          <b>getTraded</b> acts as a platform to maintain transparency between
          trades workers and clients. By creating an account, trades workers
          have the ability to post photos of their previous work as well as
          contact information for any clients. Alternatively, clients looking
          for trades workers are able to view worker's average score, number of
          completed jobs, and the ability to leave reviews.
        </p>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 2em;
  /* padding: 2em 0; */
  img {
    align-self: center;

    width: 60vw;
  }

  h3,
  p {
    padding: 0 2em;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    padding: 1em 0;
    flex-direction: column;
    row-gap: 2em;
    background-image: url("https://www.constructionexec.com/assets/site_18/images/article/081219110833.jpg?width=1280");
    color: white;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    p {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.75rem;
    }

    img {
      height: 33vh;
      width: 85%;
    }
  } ;
`;
