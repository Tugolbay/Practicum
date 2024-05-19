import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

export const Main3 = ({ tarifRef }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Mains>
      <Container>
        <h1 data-aos="fade-right">
          <strong>ПРОГРАММА</strong> ПРАКТИКУМА
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Border1>
            <div>
              <h3 data-aos="fade-right">1 ДЕНЬ. ТЕОРЕТИЧЕСКИЙ</h3>
              <Text data-aos="fade-right">
                Заложим фундаментальные знания по построению бизнеса на
                маркетплейсах
              </Text>
            </div>
            <div>
              <Border1Childe>
                <li data-aos="fade-right">Разбор трендов рынка eCom</li>
                <li data-aos="fade-right">
                  Пошаговый план построения бизнеса на крупнейших маркетплейсах
                </li>
                <li data-aos="fade-right">
                  Выбор и закуп высокомаржинального товара
                </li>
                <li data-aos="fade-right">
                  Оформление карточки и вывод её в ТОП
                </li>
                <li data-aos="fade-right">Анализ частых ошибок селлеров</li>
                <li data-aos="fade-right">
                  Варианты масштабирования бизнеса на маркетплейсах
                </li>
              </Border1Childe>
            </div>
          </Border1>

          <Border1>
            <div>
              <h3 data-aos="fade-right">2 ДЕНЬ. ПРАКТИЧЕСКИЙ</h3>
              <Text data-aos="fade-right">
                Отработаем полученные знания на реальном бизнес-процессе и
                углубимся в практику
              </Text>
            </div>
            <div>
              <Border1Childe>
                <li data-aos="fade-right">
                  Бизнес-игра по выводу товара на маркетплейсы
                </li>
                <li data-aos="fade-right">
                  Разбор авторских табличек для построения системного бизнеса
                </li>
                <li data-aos="fade-right">
                  Выступления спикеров, специализирующихся в узких темах
                </li>
                <li data-aos="fade-right">
                  Нейросети как эффективный инструмент селлера
                </li>
                <li data-aos="fade-right">Разбор ваших карточек товаров</li>
                <li data-aos="fade-right">Нетворкинг и командная работа</li>
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
          <button
            data-aos="fade-down"
            onClick={() =>
              tarifRef.current &&
              tarifRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="bgc-button"
          >
            УЧАСТВОВАТЬ
          </button>
        </div>
      </Container>
    </Mains>
  );
};

const Mains = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
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

const Border1Childe = styled("ul")`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  gap: 1rem;

  @media (max-width: 960px) {
    p {
      font-size: 12px;
    }
  }
`;
