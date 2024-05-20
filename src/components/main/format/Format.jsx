import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal } from "../Modal/Modal";
import AOS from "aos";
import "aos/dist/aos.css";

export const Format = ({ tarif }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container ref={tarif}>
      <h1 data-aos="fade-right">Выберите формат участия</h1>

      <Block>
        <Row1 data-aos="fade-right">
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
            <button onClick={() => setOpen(true)} className="button">
              УЧАСТВОВАТЬ
            </button>
          </div>
        </Row1>

        <Row1 data-aos="fade-right">
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
            <button onClick={() => setOpen(true)} className="button">
              УЧАСТВОВАТЬ
            </button>
          </div>
        </Row1>

        <Row1 data-aos="fade-right">
          <h3>ОФЛАЙН</h3>
          <ul>
            <li>Личное присутствие на мероприятии</li>
            <li>Запись мероприятия на 14 дней</li>
            <li>Участие в эфире с разбором карточек от экспертов «Меркатус»</li>
            <li>Онлайн-сертификат участника</li>
            <li>Участие в розыгрыше призов</li>
          </ul>

          <div>
            <p>Стоимость</p>
            <p>2 590 РУБ.</p>
            <button onClick={() => setOpen(true)} className="button">
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
    padding: 0 2rem 0 2rem;
    h1 {
      font-size: 30px;
    }
  }
`;

const Block = styled("div")`
  display: flex;
  gap: 4rem;
  margin-top: 5rem;

  @media (max-width: 970px) {
    display: flex;
    flex-direction: column;
  }
`;

const Row1 = styled("div")`
  width: 25vw;
  height: 100%;
  background-color: #3d3c3c;
  padding: 1.5rem;
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
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    margin-top: 3rem;
    p {
      text-align: center;
      color: white;
      font-size: 30px;
      font-weight: 600;
    }
  }

  .button {
    background: linear-gradient(45deg, #d2001a, #7462ff, #f48e21, #23d5ad);
    background-size: 300% 300%;
    animation: color 12s ease-in-out infinite;
    border-radius: 10px;
    width: 12rem;
    height: 4rem;
    border: none;
    font-size: 20px;
    color: white;
    cursor: pointer;
  }

  @keyframes color {
    0% {
      background-position: 0 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0 50%;
    }
  }

  @media (max-width: 970px) {
    width: 25rem;
  }

  @media (max-width: 460px) {
    width: 22rem;
  }

  @media (max-width: 400px) {
    width: 18rem;

    h3 {
      font-size: 35px;
    }

    ul {
      gap: 0.5rem;
      li {
        font-size: 12px;
      }
    }

    .button {
      width: 12rem;
      height: 3rem;
      font-size: 12px;
    }

    div {
      margin-top: 1rem;
      p {
        font-size: 25px;
      }
    }
  }
`;
