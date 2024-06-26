import React, { useEffect } from "react";
import styled from "styled-components";
import { IoRocket } from "react-icons/io5";
import { FaBriefcase } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { TbMoneybag } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export const Opportunity = ({ whoRef }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container ref={whoRef}>
      <div>
        <div data-aos="fade-right">
          <h1>ПРАКТИКУМ – ЭТО</h1>
          <h1>НОВЫЕ ВОЗМОЖНОСТИ ДЛЯ ТЕБЯ!</h1>
        </div>

        <ContainerBlock>
          <Block1 data-aos="fade-right">
            <img
              src="https://optim.tildacdn.com/tild6265-6261-4433-a439-376562656238/-/resize/888x/-/format/webp/Group_1480_1.png"
              alt=""
            />
          </Block1>

          <Block>
            <div
              data-aos="fade-right"
              style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            >
              <IoRocket size={40} color="#a238ff" />
              <p>
                <strong> Интересуешься выходом на маркетплейсы,</strong> но пока
                сомневаешься и хочешь получить пошаговый алгоритм действий
              </p>
            </div>
            <div
              data-aos="fade-right"
              style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            >
              <FaBriefcase size={40} color="#a238ff" />
              <p>
                <strong>Начинающий продавец на маркетплейсах</strong> и хочешь
                открыть бизнес без рисков и слива бюджета
              </p>
            </div>

            <div
              data-aos="fade-right"
              style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            >
              <IoNewspaperOutline size={40} color="#a238ff" />
              <p>
                <strong> Опытный селлер</strong>, но планируешь масштабировать
                свой бизнес и хочешь быть в курсе всех новинок рынка
              </p>
            </div>

            <div
              data-aos="fade-right"
              style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            >
              <TbMoneybag size={40} color="#a238ff" />
              <p>
                <strong> Менеджер маркетплейсов</strong> и ищешь способы
                повысить свой чек и улучшить результаты клиентов
              </p>
            </div>

            <div
              data-aos="fade-right"
              style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            >
              <FaSearch size={40} color="#a238ff" />
              <p>
                <strong>Предприниматель</strong> в поисках дополнительных
                каналов сбыта, которые выведут твой бизнес на новый уровень
                прибыли
              </p>
            </div>
          </Block>
        </ContainerBlock>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
  padding: 0 3rem 0 3rem;

  h1 {
    color: white;
    font-weight: 600;
    font-size: 60px;
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
  flex-direction: column;
  gap: 0.5rem;
  p {
    color: white;
    width: 33vw;
    font-size: 18px;

    strong {
      color: #a238ff;
    }
  }

  @media (max-width: 860px) {
    p {
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    p {
      font-size: 15px;
    }
  }
`;

const Block1 = styled("div")`
  img {
    width: 25rem;
  }
`;

const ContainerBlock = styled("div")`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 4rem;

  @media (max-width: 860px) {
    display: flex;
    flex-direction: column;
  }
`;
