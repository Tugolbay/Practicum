import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

export const Main7 = ({ bonusRef, tarifRef }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container ref={bonusRef}>
      <h2 data-aos="fade-right">
        Все участники Практикума примут участие в прямом эфире с разбором ваших
        реальных карточек товаров от эксперта IT-платформы "Меркатус"
      </h2>
      <Block>
        <h3 data-aos="fade-right">
          КУПИТЕ БИЛЕТ НА ПРАКТИКУМ
          <span> В ТЕЧЕНИЕ 5 МИНУТ И ЗАБЕРИТЕ БОНУСЫ</span>
        </h3>

        <Row1>
          <Column>
            <p data-aos="fade-right">
              Чек-лист «Расчет суммы для старта бизнеса на маркетплейсах»
            </p>
            <p data-aos="fade-right">
              Гайд «10 фишек по продвижению товара, чтобы быть впереди
              конкурентов»
            </p>
            <div>
              <button
                data-aos="fade-down"
                onClick={() =>
                  tarifRef.current &&
                  tarifRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="bgc-button"
              >
                Купить билет
              </button>
            </div>
          </Column>

          <div>
            <img
              src="https://optim.tildacdn.com/tild6633-6135-4936-b334-333335333539/-/format/webp/Group_12367.png"
              alt="img"
            />
          </div>
        </Row1>
      </Block>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  padding: 0 5rem 0 5rem;
  h2 {
    font-size: 30px;
    color: #ffffff;
    font-family: "NeueMachina", Arial, sans-serif;
    font-weight: 100;
    text-align: center;
  }

  @media (max-width: 530px) {
    font-size: 20px;
  }
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  border-radius: 20px;
  margin-top: 6rem;
  padding: 5rem;

  h3 {
    font-size: 54px;
    font-family: "NeueMachina", Arial, sans-serif;
    font-weight: 800;
    text-align: center;

    span {
      color: #9400fd;
    }
  }

  p {
    font-size: 25px;
  }

  @media (max-width: 1145px) {
    h3 {
      font-size: 45px;
    }
  }

  @media (max-width: 950px) {
    h3 {
      font-size: 35px;
    }
  }

  @media (max-width: 826px) {
    p {
      font-size: 20px;
      margin-top: 2rem;
    }
  }

  @media (max-width: 700px) {
    h3 {
      font-size: 25px;
    }
  }

  @media (max-width: 590px) {
    padding: 2rem;
    h3 {
      font-size: 15px;
    }

    p {
      font-size: 15px;
    }
  }
`;

const Row1 = styled("div")`
  display: flex;
  align-items: center;

  @media (max-width: 750px) {
    img {
      display: none;
    }
  }
`;

const Column = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media (max-width: 600px) {
    gap: 1rem;
  }
`;
