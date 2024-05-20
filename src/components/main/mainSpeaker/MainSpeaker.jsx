import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

export const MainSpeaker = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Mains>
      <Container>
        <h1 data-aos="fade-right">ГЛАВНЫЙ СПИКЕР</h1>
        <h1 data-aos="fade-right" style={{ color: "#9400fd" }}>
          И СОЗДАТЕЛЬ ПРАКТИКУМА
        </h1>

        <Column>
          <div>
            <div className="column">
              <Row1 data-aos="fade-right">
                <img
                  src="https://habrastorage.org/getpro/moikrug/uploads/company/100/004/679/1/logo/big_52d6473a9db6fc51ff16b12c9c83e8bb.jpg"
                  alt="img"
                />
                <p>Продает на маркетплейсах с 2014 года</p>
              </Row1>

              <Row1 data-aos="fade-right">
                <img
                  src="https://habrastorage.org/getpro/moikrug/uploads/company/100/004/679/1/logo/big_52d6473a9db6fc51ff16b12c9c83e8bb.jpg"
                  alt="img"
                />
                <p>Основатель обучающей платформы «Меркатус»</p>
              </Row1>
            </div>

            <Row3 data-aos="fade-right">
              <p className="number">10 000+</p>
              <p className="text">
                селлеров вывел на маркетплейсы, 97% из которых довольны
                обучением
              </p>
            </Row3>
          </div>

          <div>
            <div className="column">
              <Row1 data-aos="fade-right">
                <img
                  src="https://4play.by/upload/iblock/587/587e1187a83df643904d271fa9095e4b.png"
                  alt="img"
                />
                <p>Официальный амбассадор Ozon и Яндекс Маркет</p>
              </Row1>

              <Row2 data-aos="fade-right">
                <img
                  src="https://i.pinimg.com/736x/2c/f2/ff/2cf2ff798b13ef93b5caababc4a401c7.jpg"
                  alt="img"
                />
                <p>
                  Автор самого просматриваемого YouTube-канала по маркетплейсам
                  (350+ тысяч подписчиков)
                </p>
              </Row2>
            </div>

            <Row3 data-aos="fade-right">
              <p className="number">60+ млн</p>
              <p className="text">
                оборот как действующего селлера на маркетплейсах
              </p>
            </Row3>
          </div>
        </Column>

        <div className="image" data-aos="fade-right">
          <img
            src="https://optim.tildacdn.com/tild3434-3761-4562-b639-646438333331/-/format/webp/23231.png"
            alt="img"
          />
        </div>
      </Container>
    </Mains>
  );
};

const Mains = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  padding: 0 3rem 0 3rem;

  @media (max-width: 690px) {
    padding: 0 1rem 0 1rem;
  }
`;

const Container = styled("div")`
  background-color: white;
  padding: 5rem;
  border-radius: 20px;
  margin-top: 10rem;

  h1 {
    text-align: center;
    font-weight: 800;
    font-size: 60px;
    margin: 0;
  }

  .image {
    display: flex;
    justify-content: center;
    img {
      width: 30vw;
    }
  }

  @media (max-width: 980px) {
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 770px) {
    padding: 2rem;
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 690px) {
    width: 30rem;

    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 490px) {
    h1 {
      font-size: 20px;
    }
  }
`;

const Column = styled("div")`
  display: flex;
  justify-content: space-between;

  .column {
    height: 15rem;
  }

  @media (max-width: 690px) {
    .column {
      height: 22rem;
    }
  }
`;

const Row1 = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;

  img {
    width: 3rem;
    border-radius: 5px;
  }

  p {
    width: 20vw;
    font-size: 20px;
  }

  @media (max-width: 980px) {
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
    p {
      font-size: 15px;
    }
  }

  @media (max-width: 690px) {
    display: flex;
    flex-direction: column;

    p {
      font-size: 10px;
    }
  }
`;

const Row2 = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 3rem;

  img {
    width: 3rem;
    border-radius: 5px;
  }

  p {
    width: 20vw;
    font-size: 20px;
  }

  @media (max-width: 980px) {
    img {
      width: 2.5rem;
      height: 2.5rem;
    }
    p {
      font-size: 15px;
    }
  }

  @media (max-width: 690px) {
    display: flex;
    flex-direction: column;

    p {
      font-size: 10px;
    }
  }

  @media (max-width: 490px) {
    margin-top: 2rem;
  }
`;

const Row3 = styled("div")`
  .number {
    font-size: 50px;
    font-weight: 700;
    margin: 0;
    color: #9400fd;
  }

  .text {
    font-size: 20px;
    font-weight: 300;
    width: 30vw;
  }

  @media (max-width: 980px) {
    .number {
      font-size: 30px;
    }

    .text {
      font-size: 15px;
    }
  }

  @media (max-width: 690px) {
    .text {
      font-size: 12px;
    }
  }
`;
