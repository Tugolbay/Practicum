import React from "react";
import styled from "styled-components";
import { MdOutlineDone } from "react-icons/md";

export const Main3 = () => {
  return (
    <Mains>
      <Container>
        <h1>
          <strong>ПРОГРАММА</strong> ПРАКТИКУМА
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Border1>
            <div>
              <h3>1 ДЕНЬ. ТЕОРЕТИЧЕСКИЙ</h3>
              <Text>
                Заложим фундаментальные знания по построению бизнеса на
                маркетплейсах
              </Text>
            </div>
            <div>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>Разбор трендов рынка eCom</p>
              </Border1Childe>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>
                  Пошаговый план построения бизнеса на крупнейших маркетплейсах
                </p>
              </Border1Childe>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>Выбор и закуп высокомаржинального товара</p>
              </Border1Childe>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>Оформление карточки и вывод её в ТОП</p>
              </Border1Childe>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>Анализ частых ошибок селлеров</p>
              </Border1Childe>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>Варианты масштабирования бизнеса на маркетплейсах</p>
              </Border1Childe>
            </div>
          </Border1>

          <Border1>
            <div>
              <h3>2 ДЕНЬ. ПРАКТИЧЕСКИЙ</h3>
              <Text>
                Отработаем полученные знания на реальном бизнес-процессе и
                углубимся в практику
              </Text>
            </div>
            <div>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>Бизнес-игра по выводу товара на маркетплейсы</p>
              </Border1Childe>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>
                  Разбор авторских табличек для построения системного бизнеса
                </p>
              </Border1Childe>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>Выступления спикеров, специализирующихся в узких темах</p>
              </Border1Childe>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>Нейросети как эффективный инструмент селлера</p>
              </Border1Childe>
              <Border1Childe>
                {/* <MdOutlineDone size={40} color="#a238ff" /> */}
                <p>Разбор ваших карточек товаров</p>
              </Border1Childe>
              <Border1Childe>
                <p>Нетворкинг и командная работа</p>
              </Border1Childe>
            </div>
          </Border1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <button className="bgc-button">УЧАСТВОВАТЬ</button>
        </div>
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

  h1 {
    font-weight: 600;
    font-size: 60px;
    strong {
      color: #9400fd;
    }
  }

  @media (max-width: 1145px) {
    h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 590px) {
    padding: 1rem;
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 490px) {
    h1 {
      font-size: 30px;
    }
  }
`;

const Border1 = styled("div")`
  display: flex;
  gap: 5rem;
  width: 100%;
  border: 1px solid black;
  border-radius: 20px;
  padding: 1rem;

  h3 {
    font-size: 30px;
    font-weight: 400;
  }

  @media (max-width: 960px) {
    h3 {
      font-size: 25px;
    }
  }

  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 490px) {
    h3 {
      font-size: 20px;
    }
  }
`;

const Text = styled("p")`
  width: 18rem;
  font-size: 20px;
  color: gray;

  @media (max-width: 960px) {
    font-size: 15px;
  }

  @media (max-width: 590px) {
    font-size: 12px;
    width: 12rem;
  }
`;

const Border1Childe = styled("div")`
  display: flex;
  align-items: center;
  grid-template-columns: 0.5rem;

  @media (max-width: 960px) {
    p {
      font-size: 12px;
    }
  }
`;
