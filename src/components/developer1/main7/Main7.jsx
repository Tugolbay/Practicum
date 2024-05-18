import React from "react";
import styled from "styled-components";

export const Main7 = ({ bonusRef, tarifRef }) => {
  return (
    <Container ref={bonusRef}>
      <h2>
        Все участники Практикума примут участие в прямом эфире с разбором ваших
        реальных карточек товаров от эксперта IT-платформы "Меркатус"
      </h2>
      <Block>
        <h3>
          КУПИТЕ БИЛЕТ НА ПРАКТИКУМ
          <span> В ТЕЧЕНИЕ 5 МИНУТ И ЗАБЕРИТЕ БОНУСЫ</span>
        </h3>

        <Row1>
          <Column>
            <p>Чек-лист «Расчет суммы для старта бизнеса на маркетплейсах»</p>
            <p>
              Гайд «10 фишек по продвижению товара, чтобы быть впереди
              конкурентов»
            </p>

            <div>
              <button
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
    width: 50rem;
  }
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 60rem;
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
    width: 28rem;
  }

  @media (max-width: 1145px) {
    h3 {
      font-size: 45px;
    }
  }
`;

const Row1 = styled("div")`
  display: flex;
  align-items: center;
`;

const Column = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;
