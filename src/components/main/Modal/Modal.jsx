/* eslint-disable no-useless-escape */
/* eslint-disable default-case */
import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { IoCloseSharp } from "react-icons/io5";

export const Modal = ({ setOpen }) => {
  const [inp, setInp] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");

  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [numberlDirty, setNumberDirty] = useState(false);

  const [emailError, setEmailError] = useState(
    "Пожалуйста напишите свой адрес электронной почты"
  );
  const [nameError, setNameError] = useState("Пожалуйста напишите свое имя");
  const [numberlError, setNumberError] = useState(
    "Пожалуйста напишите свой номер телефона"
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const emailHandler = (e) => {
    setInp(e.target.value);
    const re =
      /^(([^&lt;&gt;()\[\]\\.,;:\s@"]+(\.[^&lt;&gt;()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный email");
    } else {
      setEmailError("");
    }
  };

  const nameHandler = (e) => {
    setInp2(e.target.value);
    const nameRegex = /^[A-Za-zА-Яа-яЁё\s]+$/;

    if (!nameRegex.test(String(e.target.value).toLowerCase())) {
      setNameError("Некорректное имя");
    } else {
      setNameError("");
    }
  };

  const numberHandler = (e) => {
    setInp3(e.target.value);

    if (e.target.value) {
      setNumberError("");
    }
  };

  const onBlure = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      case "name":
        setNameDirty(true);
        break;
      case "number":
        setNumberDirty(true);
        break;
    }
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Block>
        <div
          onClick={() => setOpen(false)}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IoCloseSharp color="white" size={35} cursor="pointer" />
        </div>
        <Row>
          <h3>Оформление заказа</h3>
          <p>Я на практикуме - тариф Офлайн 2590 руб.</p>

          <InputBlock>
            <TextField
              onBlur={(e) => onBlure(e)}
              value={inp}
              onChange={emailHandler}
              name="email"
              id="standard-basic"
              label="Введите ваш эл.адрес"
              variant="standard"
            />
            {emailDirty && emailError && (
              <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>
            )}
            <TextField
              value={inp2}
              name="name"
              onBlur={(e) => onBlure(e)}
              onChange={nameHandler}
              id="standard-basic"
              label="Введите ваше имя"
              variant="standard"
            />
            {nameDirty && nameError && (
              <p style={{ color: "red", fontSize: "12px" }}>{nameError}</p>
            )}
            <TextField
              name="number"
              value={inp3}
              onBlur={(e) => onBlure(e)}
              onChange={numberHandler}
              id="standard-basic"
              label="Введите ваш телефон"
              variant="standard"
              className="inputs"
            />
            {numberlDirty && numberlError && (
              <p style={{ color: "red", fontSize: "12px" }}>{numberlError}</p>
            )}
          </InputBlock>

          <button type="submit" className="btn">
            Записаться
          </button>

          <div className="checkBlock">
            <input type="checkbox" className="checkbox" />
            <p>
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

    @media (max-width: 579px) {
      height: 3rem;
    }
  }

  @media (max-width: 690px) {
    width: 30rem;
  }

  @media (max-width: 495px) {
    width: 20rem;

    h3 {
      font-size: 20px;
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

  .checkBlock {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25rem;
    gap: 1rem;
    margin-top: 2rem;
  }
  .checkbox {
    width: 2.5rem;
    height: 2.5rem;
  }

  @media (max-width: 579px) {
    .checkBlock {
      width: 15rem;
    }
    p {
      font-size: 12px;
    }

    a {
      font-size: 12px;
    }

    .checkbox {
      width: 3.5rem;
      height: 3.5rem;
    }
  }
`;

const InputBlock = styled("div")`
  display: flex;
  flex-direction: column;
  width: 45%;
  gap: 1rem;
  margin-top: 2rem;

  .MuiInputBase-root-MuiInput-root {
    color: white;
  }

  .MuiInput-root {
    color: white;
  }
  .MuiInputLabel-root {
    color: white;
  }

  .MuiInput-root::before {
    border-bottom: 2px solid white !important;
  }

  .MuiInput-root::after {
    border-bottom: 2px solid white !important;
  }

  @media (max-width: 740px) {
    margin-top: 0.5rem;
  }

  @media (max-width: 690px) {
    width: 20rem;
  }

  @media (max-width: 579px) {
    width: 15rem;
    gap: 1rem;
  }

  @media (max-width: 450px) {
    width: 12rem;
  }
`;
