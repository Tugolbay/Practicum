/* eslint-disable no-useless-escape */
/* eslint-disable default-case */
import React, { useState } from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";

export const Modal4 = ({ setOpen }) => {
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
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <IoCloseSharp color="black" size={35} cursor="pointer" />
        </div>
        <Row>
          <h3>Хотите стать нашим партнером?</h3>
          <p>
            Оставьте ваши данные и команда свяжется с вами в ближайшее время
          </p>
          <InputBlock>
            <input
              onBlur={(e) => onBlure(e)}
              value={inp2}
              onChange={nameHandler}
              name="name"
              type="text"
              placeholder="Ваше имя"
            />
            {nameDirty && nameError && (
              <p style={{ color: "red", fontSize: "12px" }}>{nameError}</p>
            )}
            <input
              onBlur={(e) => onBlure(e)}
              value={inp}
              onChange={emailHandler}
              name="email"
              type="email"
              placeholder="email"
            />
            {emailDirty && emailError && (
              <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>
            )}
            <input
              onBlur={(e) => onBlure(e)}
              value={inp3}
              onChange={numberHandler}
              name="number"
              type="number"
              placeholder="Ваш телефон номер"
            />

            {numberlDirty && numberlError && (
              <p style={{ color: "red", fontSize: "12px" }}>{numberlError}</p>
            )}
            <button type="submit" className="btn">
              Записаться
            </button>
          </InputBlock>
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
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 45%;
  transform: translate(-50%, -50%);

  h3 {
    font-size: 30px;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 4rem;
    border-radius: 15px;
    border: 2px solid white;
    margin-top: 1rem;
    color: white;
    background-color: blue;

    &:hover {
      color: blue;
      background-color: white;
      border: 2px solid blue;
    }
  }

  @media (max-width: 500px) {
    width: 25rem;

    h3 {
      font-size: 20px;
      text-align: center;
    }

    p {
      font-size: 15px;
      text-align: center;
    }
  }

  @media (max-width: 450px) {
    width: 20rem;

    .btn {
      height: 3rem;
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
`;

const InputBlock = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  input {
    width: 25rem;
    height: 3rem;
    padding-left: 1.5rem;
    border-radius: 10px;
    border: 1px solid black;
  }

  @media (max-width: 760px) {
    input {
      width: 20rem;
    }
  }

  @media (max-width: 600px) {
    input {
      width: 15rem;
    }
  }

  @media (max-width: 450px) {
    gap: 1.5rem;
    input {
      width: 15rem;
      height: 2rem;
    }
  }
`;
