import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { IoCloseSharp } from "react-icons/io5";
import emailjs from "emailjs-com";

export const Modal = ({ setOpen }) => {
  const [inp, setInp] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56tgup8",
        "template_9hvaval",
        e.target,
        "-max2LpLG2rH-A3o7"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    alert("Ваша заяка отправлена");

    setInp("");
    setInp2("");
    setInp3("");
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Block>
        <div
          onClick={() => setOpen(false)}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <IoCloseSharp color="white" size={35} cursor="pointer" />
        </div>
        <Row>
          <h3>Оформление заказа</h3>
          <p>Я на практикуме - тариф Офлайн 2590 руб.</p>

          <InputBlock>
            <TextField
              value={inp}
              onChange={(e) => setInp(e.target.value)}
              name="email"
              id="standard-basic"
              label="Введите ваш эл.адрес"
              variant="standard"
            />
            <TextField
              value={inp2}
              name="name"
              onChange={(e) => setInp2(e.target.value)}
              id="standard-basic"
              label="Введите ваше имя"
              variant="standard"
            />
            <TextField
              name="number"
              value={inp3}
              onChange={(e) => setInp3(e.target.value)}
              id="standard-basic"
              label="Введите ваш телефон"
              variant="standard"
            />
          </InputBlock>

          <button type="submit" className="btn">
            Записаться
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginTop: "2rem",
            }}
          >
            <input type="checkbox" />
            <p style={{ width: "20vw" }}>
              Я согласен(а) с условиями{" "}
              <a href="https://merkatys.ru/policy">
                Политики конфиденциальности, хранения и обработки персональных
                данных
              </a>
            </p>
          </div>
        </Row>
      </Block>
    </Container>
  );
};

const Container = styled("form")`
  display: block;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Block = styled("div")`
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 1.5rem;
  background: #1578ba;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60%;
  transform: translate(-50%, -50%);

  h3 {
    font-size: 30px;
    color: white;
  }

  p {
    color: white;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 13rem;
    height: 4rem;
    border-radius: 15px;
    border: 2px solid white;
    margin-top: 3rem;
    color: white;

    &:hover {
      background: linear-gradient(45deg, #d2001a, #7462ff, #f48e21, #23d5ad);
    }

    @media (max-width: 543px) {
      font-size: 10px;
      width: 10rem;
      height: 2.5rem;
    }
  }

  @media (max-width: 543px) {
    h3 {
      text-align: center;
    }
  }
`;

const Row = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: black;
  }

  @media (max-width: 950px) {
    p {
      font-size: 10px;
    }
    a {
      font-size: 10px;
    }
  }
`;

const InputBlock = styled("div")`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 2.5rem;
  margin-top: 2rem;

  @media (max-width: 950px) {
    width: 55%;
  }

  @media (max-width: 543px) {
    gap: 1rem;
  }
`;
