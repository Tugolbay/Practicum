import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { IoSchoolSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import "../../Hell.css";
import { GiHamburgerMenu } from "react-icons/gi";
import AOS from "aos";
import "aos/dist/aos.css";

export const Header = ({
  whoRef,
  resultRef,
  placeRef,
  tarifRef,
  bonusRef,
  spicerRef,
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [showInfocart, setShowInfocart] = useState(false);

  return (
    <Container>
      <Block>
        <p
          onClick={() =>
            whoRef.current &&
            whoRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Для кого
        </p>
        <p
          onClick={() =>
            resultRef.current &&
            resultRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Результат
        </p>
        <p
          onClick={() =>
            tarifRef.current &&
            tarifRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Тарифы
        </p>

        <img
          style={{ cursor: "pointer" }}
          src="https://optim.tildacdn.com/tild6334-3163-4539-b930-303333613562/-/resize/568x/-/format/webp/_____1.png"
          alt="img"
        />
        <p
          onClick={() =>
            spicerRef.current &&
            spicerRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Спикер
        </p>
        <p
          onClick={() =>
            placeRef.current &&
            placeRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Место проведения
        </p>
        <p
          onClick={() =>
            bonusRef.current &&
            bonusRef.current.scrollIntoView({ behavior: "smooth" })
          }
        >
          Бонусы
        </p>
        <GiHamburgerMenu color="white" size={40} className="burger" />
      </Block>

      <Block1>
        <div data-aos="fade-right" className="bgc-container">
          <IoSchoolSharp size={30} color="black" />
          <p>18 - 19 МАЯ В 11:00 ПО МСК</p>
        </div>

        <div data-aos="fade-left" className="bgc-container2">
          <MdDateRange size={30} color="black" />
          <p>ОФЛАЙН / ОНЛАЙН</p>
        </div>
      </Block1>

      <Block2>
        <h1 data-aos="fade-right">ПРАКТИКУМ</h1>
        <div>
          <h3 data-aos="fade-right">ПО ПОСТРОЕНИЮ И МАСШТАБИРОВАНИЮ</h3>
          <h3 data-aos="fade-right">БИЗНЕСА НА МАРКЕТПЛЕЙСАХ</h3>
        </div>
      </Block2>

      <Block3>
        <div data-aos="fade-right">
          <button
            onClick={() =>
              tarifRef.current &&
              tarifRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="bgc-button"
          >
            УЧАСТВОВАТЬ
          </button>
        </div>

        <Count data-aos="fade-left">
          <p>Осталось</p>
          <p>110</p>
          <p>мест оффлайн</p>
        </Count>
      </Block3>

      <Block4Container data-aos="fade-down">
        <Block4>
          <div
            onMouseEnter={() => setShowInfocart(true)}
            onMouseLeave={() => setShowInfocart(false)}
          >
            i
          </div>
          <p>ЛЕО ЯЩЕНКО</p>
        </Block4>
      </Block4Container>

      {showInfocart && (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Infocart>
            <ul>
              <li>
                Топ-селлер с оборотом <strong>60+ млн рублей</strong>
              </li>
              <li>
                <strong>9 лет опыта</strong> торговли на маркетплейсах
              </li>
              <li>
                Официальный <strong>амбассадор маркетплейса</strong> Ozon
              </li>
              <li>
                <strong>Основатель</strong> обучающей платформы по бизнесу на
                маркетплейсах
              </li>
            </ul>
          </Infocart>
        </div>
      )}
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
  padding-top: 2rem;
  z-index: 999;
`;

const Block = styled("div")`
  display: flex;
  justify-content: space-between;
  padding: 0 5rem 0 5rem;

  p {
    color: white;
    font-size: 20px;
    cursor: pointer;
  }

  @media (max-width: 920px) {
    display: flex;
    justify-content: flex-end;
    padding: 0 2rem 0 2rem;
    p {
      display: none;
    }
  }

  @media (min-width: 921px) {
    .burger {
      display: none;
    }
  }
`;

const Block2 = styled("div")`
  padding-left: 5rem;

  h1 {
    color: white;
    font-weight: 600;
    font-size: 120px;
    margin: 1rem;
  }

  h3 {
    color: white;
    font-weight: 600;
    font-size: 30px;
    margin: 1rem;
  }

  @media (max-width: 840px) {
    h1 {
      font-size: 80px;
    }

    h3 {
      font-size: 25px;
    }
  }

  @media (max-width: 680px) {
    padding-left: 2rem;
  }

  @media (max-width: 545px) {
    h1 {
      font-size: 50px;
    }

    h3 {
      font-size: 15px;
    }
  }
`;

const Block1 = styled("div")`
  display: flex;
  align-items: center;
  gap: 5rem;
  padding-left: 5rem;
  margin-top: 5rem;

  @media (max-width: 680px) {
    padding-left: 2rem;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }


 
`;

const Count = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: #7200a0;
  border-radius: 10px;
  animation: ${pulse} 2s infinite;
  padding: 0.5rem;

  p {
    margin: 0;
    font-size: 12px;
    color: white;
  }
`;

const Block3 = styled("div")`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 3rem;
  padding-left: 5rem;

  @media (max-width: 680px) {
    padding-left: 2rem;
  }
`;

const Block4 = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20vw;
  height: 3rem;
  padding: 0.5rem;
  border-radius: 10px;

  background: linear-gradient(
    0.238turn,
    rgba(72, 198, 244, 1) 0%,
    rgba(105, 121, 254, 1) 49%,
    rgba(168, 101, 255, 1) 100%
  );

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 20px;
    border-radius: 50px;
    background-color: white;
    cursor: pointer;
  }

  p {
    color: white;
    font-size: 2vw;
  }

  @media (max-width: 840px) {
    width: 25vw;
  }

  @media (max-width: 610px) {
    width: 30vw;
  }
`;

const Block4Container = styled("div")`
  display: flex;
  justify-content: flex-end;
  margin-top: 5rem;
  padding-right: 5rem;

  @media (max-width: 610px) {
    display: flex;
    justify-content: center;

    padding-right: 0rem;
  }
`;

const Infocart = styled("div")`
  position: absolute;
  top: 30rem;
  width: 30vw;
  padding: 1.5rem;
  border-radius: 20px;
  background-color: white;
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    strong {
      color: #7200a0;
    }
  }

  @media (max-width: 1000px) {
    ul {
      li {
        font-size: 13px;
      }
    }
  }

  @media (max-width: 650px) {
    ul {
      li {
        font-size: 8px;
      }
    }
  }
`;
