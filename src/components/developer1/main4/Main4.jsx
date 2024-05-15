import React from "react";
import styled from "styled-components";
import { FaLocationDot } from "react-icons/fa6";
import { FaBus } from "react-icons/fa";
import { PiTramBold } from "react-icons/pi";
import "leaflet/dist/leaflet.css";
import { Map } from "./Map";

export const Main4 = ({ placeRef }) => {
  return (
    <Container ref={placeRef}>
      <h1>МЕСТО ПРОВЕДЕНИЯ ПРАКТИКУМА</h1>

      <div>
        <div>
          <h3>ДВОРЕЦ КУЛЬТУРЫ</h3>
          <Row1>
            <Title>
              <FaLocationDot size={30} color="rgba(148, 41, 232, 1)" />
              <p>ул. Шарикоподшипниковская д15.стр 1, Москва</p>
            </Title>
            <Title>
              <PiTramBold size={30} color="rgba(148, 41, 232, 1)" />
              <p>Дубровка 294 м (пешком)</p>
            </Title>
            <Title>
              <FaBus size={30} color="rgba(148, 41, 232, 1)" />
              <p>МЦК Дубровка 172 м (пешком)</p>
            </Title>
          </Row1>

          <ImageRow>
            <Image
              src="https://optim.tildacdn.com/tild3739-3666-4535-a336-333630623864/-/cover/506x310/center/center/-/format/webp/image.png"
              alt="img"
            />

            <Image
              src="https://optim.tildacdn.com/tild6333-6462-4432-b432-656261626661/-/cover/506x298/center/center/-/format/webp/image.png"
              alt="img"
            />
          </ImageRow>

          <Map />
        </div>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;
  h1 {
    color: white;
    font-weight: 600;
    font-size: 60px;
    text-align: center;
  }

  h3 {
    color: white;
    font-weight: 300;
    font-size: 30px;
    margin-top: 2rem;

    @media (max-width: 540px) {
      margin-left: 4rem;
    }
  }

  @media (max-width: 770px) {
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const Title = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  p {
    color: white;
    font-size: 20px;
  }

  @media (max-width: 540px) {
    margin-left: 4rem;
    p {
      font-size: 15px;
    }
  }
`;

const Image = styled("img")`
  width: 25rem;
  border-radius: 30px;

  @media (max-width: 950px) {
    width: 18rem;
  }

  @media (max-width: 760px) {
    width: 15rem;
  }

  @media (max-width: 650px) {
    width: 12rem;
  }
  @media (max-width: 540px) {
    width: 25rem;
  }

  @media (max-width: 480px) {
    width: 20rem;
  }
`;

const Row1 = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ImageRow = styled("div")`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  margin-top: 2rem;

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
