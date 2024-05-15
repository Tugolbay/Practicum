import React from "react";
import styled from "styled-components";

export const Main5 = ({ spicerRef }) => {
  return (
    <Mains ref={spicerRef}>
      <Container>
        <h1>ГЛАВНЫЙ СПИКЕР</h1>
        <h1 style={{ color: "#9400fd" }}>И СОЗДАТЕЛЬ ПРАКТИКУМА</h1>

        <Block>
          <div>
            <Row1>
              <img
                src="https://habrastorage.org/getpro/moikrug/uploads/company/100/004/679/1/logo/big_52d6473a9db6fc51ff16b12c9c83e8bb.jpg"
                alt="img"
              />
              <p>Продает на маркетплейсах с 2014 года</p>
            </Row1>

            <Row1>
              <img
                src="https://habrastorage.org/getpro/moikrug/uploads/company/100/004/679/1/logo/big_52d6473a9db6fc51ff16b12c9c83e8bb.jpg"
                alt="img"
              />
              <p>Основатель обучающей платформы «Меркатус»</p>
            </Row1>
          </div>

          <div>
            <Row2>
              <img
                src="https://4play.by/upload/iblock/587/587e1187a83df643904d271fa9095e4b.png"
                alt="img"
              />
              <p>Официальный амбассадор Ozon и Яндекс Маркет</p>
            </Row2>

            <Row2>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
                alt="img"
              />
              <p>
                Автор самого просматриваемого YouTube-канала по маркетплейсам
                (350+ тысяч подписчиков)
              </p>
            </Row2>
          </div>
        </Block>

        <Block2>
          <Row3>
            <p className="number">10 000+</p>
            <p className="text">
              селлеров вывел на маркетплейсы, 97% из которых довольны обучением
            </p>
          </Row3>
          <Row3>
            <p className="number">60+ МЛН РУБ</p>
            <p className="text">
              оборот как действующего селлера на маркетплейсах
            </p>
          </Row3>
        </Block2>
      </Container>
    </Mains>
  );
};

const Mains = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 15rem;
`;

const Container = styled("div")`
  width: 80vw;
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

const Block = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;
`;

const Block2 = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

const Row1 = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 3rem;
    border-radius: 5px;
  }

  p {
    width: 20vw;
    font-size: 20px;
  }
`;

const Row2 = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 5px;
  }

  p {
    width: 20vw;
    font-size: 20px;
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
    width: 15rem;
    font-size: 20px;
    font-weight: 300;
  }
`;
