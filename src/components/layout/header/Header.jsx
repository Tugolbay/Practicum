import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { IoSchoolSharp } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
  const [showInfocart, setShowInfocart] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    AOS.init();
  }, []);

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
        <GiHamburgerMenu
          onClick={handleClick}
          color="white"
          size={40}
          className="burger"
          cursor="pointer"
        />
      </Block>

      <HeaderMain>
        <HeaderMainRow>
          <Block1>
            <div data-aos="fade-right" className="bgc-container">
              <IoSchoolSharp size={30} color="black" />
              <p>18 - 19 МАЯ В 11:00 ПО МСК</p>
            </div>

            <div data-aos="fade-right" className="bgc-container2">
              <MdDateRange size={30} color="black" />
              <p>ОФЛАЙН / ОНЛАЙН</p>
            </div>
          </Block1>

          <Block2 data-aos="fade-right">
            <h1>ПРАКТИКУМ</h1>
            <div>
              <h3>ПО ПОСТРОЕНИЮ И МАСШТАБИРОВАНИЮ</h3>
              <h3>БИЗНЕСА НА МАРКЕТПЛЕЙСАХ</h3>
            </div>
          </Block2>

          <Block3 data-aos="fade-right">
            <div>
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

            <Count data-aos="fade-right">
              <p>Осталось</p>
              <p>110</p>
              <p>мест оффлайн</p>
            </Count>
          </Block3>
        </HeaderMainRow>
        <ImageRow data-aos="fade-right">
          <img
            src="https://optim.tildacdn.com/tild3336-6237-4566-b132-373733616533/-/format/webp/IMG_3780_1_1.png"
            alt="img"
          />

          <Block4Container>
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
        </ImageRow>
      </HeaderMain>

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

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            whoRef.current &&
              whoRef.current.scrollIntoView({ behavior: "smooth" });
            handleClose();
          }}
        >
          Для кого
        </MenuItem>
        <MenuItem
          onClick={() => {
            resultRef.current &&
              resultRef.current.scrollIntoView({ behavior: "smooth" });
            handleClose();
          }}
        >
          Результат
        </MenuItem>
        <MenuItem
          onClick={() => {
            tarifRef.current &&
              tarifRef.current.scrollIntoView({ behavior: "smooth" });
            handleClose();
          }}
        >
          Тарифы
        </MenuItem>
        <MenuItem
          onClick={() => {
            spicerRef.current &&
              spicerRef.current.scrollIntoView({ behavior: "smooth" });
            handleClose();
          }}
        >
          Спикер
        </MenuItem>
        <MenuItem
          onClick={() => {
            placeRef.current &&
              placeRef.current.scrollIntoView({ behavior: "smooth" });
            handleClose();
          }}
        >
          Место проведения
        </MenuItem>
        <MenuItem
          onClick={() => {
            bonusRef.current &&
              bonusRef.current.scrollIntoView({ behavior: "smooth" });
            handleClose();
          }}
        >
          Бонусы
        </MenuItem>
      </Menu>
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

  @media (max-width: 1115px) {
    padding: 0 2rem 0 2rem;
  }

  @media (max-width: 970px) {
    display: flex;
    justify-content: space-between;

    p {
      display: none;
    }
  }

  @media (min-width: 971px) {
    .burger {
      display: none;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 13rem;
    }
  }
`;

const Block2 = styled("div")`
  padding-left: 5rem;

  h1 {
    color: white;
    font-weight: 600;
    font-size: 9vw;
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

  @media (max-width: 494px) {
    h1 {
      font-size: 50px;
    }

    h3 {
      font-size: 25px;
    }
  }

  @media (max-width: 403px) {
    h1 {
      font-size: 50px;
    }

    h3 {
      font-size: 20px;
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

  @media (max-width: 390px) {
    width: 6rem;

    p {
      font-size: 8px;
    }
  }
`;

const Block3 = styled("div")`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-top: 3rem;
  padding-left: 6rem;
  @media (max-width: 1000px) {
    padding-left: 0rem;
  }
`;

const Block4 = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 15rem;
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
    font-size: 15px;
  }

  @media (max-width: 1000px) {
    width: 15rem;
    height: 4rem;
  }
`;

const Block4Container = styled("div")`
  margin-top: 5rem;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    position: absolute;
    margin-top: 30rem;
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
    top: 59rem;
    right: 20rem;
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

  @media (max-width: 500px) {
    width: 10rem;

    p {
      font-size: 8px;
    }
  }

  @media (max-width: 495px) {
    right: 5rem;
  }

  @media (max-width: 420px) {
    top: 52rem;
  }
`;

const HeaderMain = styled("div")`
  display: flex;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

const ImageRow = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (max-width: 1000px) {
    img {
      width: 40rem;
    }
  }

  @media (max-width: 590px) {
    img {
      width: 30rem;
    }
  }
`;

const HeaderMainRow = styled("div")`
  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
