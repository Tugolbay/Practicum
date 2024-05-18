import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "../Modal/Modal";

export const Main6 = ({ tarif }) => {
  const [open, setOpen] = useState(false);
  return (
    <Container ref={tarif}>
      <h1>Выберите формат участия</h1>

      <Block>
        <Row1>
          <h3>ОНЛАЙН</h3>
          <ul>
            <li>Онлайн посещение мероприятия</li>
            <li>Запись мероприятия на 14 дней</li>
            <li>Участие в эфире с разбором карточек от экспертов «Меркатус»</li>
            <li>Онлайн-сертификат участника</li>
            <li>Участие в розыгрыше призов</li>
          </ul>

          <div>
            <p>Стоимость</p>
            <p>1 490 РУБ.</p>
            <button onClick={() => setOpen(true)} className="bgc-button">
              УЧАСТВОВАТЬ
            </button>
          </div>
        </Row1>

        <Row1>
          <h3>ОФЛАЙН</h3>
          <ul>
            <li>Личное присутствие на мероприятии</li>
            <li>Запись мероприятия на 14 дней</li>
            <li>Участие в эфире с разбором карточек от экспертов «Меркатус»</li>
            <li>Онлайн-сертификат участника</li>
            <li>Участие в розыгрыше призов</li>
          </ul>

          <div>
            <p>Стоимость на одного участника</p>
            <p>2 590 РУБ.</p>
            <button onClick={() => setOpen(true)} className="bgc-button">
              УЧАСТВОВАТЬ
            </button>
          </div>
        </Row1>

        <Row1>
          <h3>VIP</h3>
          <ul>
            <li>Онлайн посещение мероприятия</li>
            <li>Запись мероприятия на 30 дней</li>
            <li>Участие в эфире с разбором карточек от экспертов «Меркатус»</li>
            <li>Печатный сертификат участника</li>
            <li>Часовая сессия «Вопрос-ответ» с Лео</li>
            <li>Завтрак на мероприятии</li>
            <li>VIP-зона в перерыве</li>
            <li>Отдельный гардероб</li>
            <li>Фирменный мерч в подарок</li>
            <li>Участие в розыгрыше призов</li>
          </ul>

          <div>
            <p>Стоимость</p>
            <p>15 000 РУБ.</p>
            <button onClick={() => setOpen(true)} className="bgc-button">
              УЧАСТВОВАТЬ
            </button>
          </div>
        </Row1>
      </Block>

      {open && <Modal setOpen={setOpen} />}
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;

  h1 {
    color: white;
    font-weight: 600;
    font-size: 60px;
  }

  @media (max-width: 1145px) {
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 860px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 630px) {
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 520px) {
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 460px) {
    h1 {
      font-size: 19px;
    }
  }
`;

const Block = styled("div")`
  display: flex;
  gap: 4rem;
  margin-top: 5rem;
`;

const Row1 = styled("div")`
  width: 25vw;
  background-color: #3d3c3c;
  padding: 1rem;
  border-radius: 20px;

  h3 {
    color: white;
    text-align: center;
    font-size: 45px;
  }

  ul {
    list-style-type: disc;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    color: white;
    font-size: 18px;

    height: 70vh;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: 12rem;
    p {
      text-align: center;
      color: white;
      font-size: 30px;
      font-weight: 600;
      height: 10vh;
    }
  }
`;
