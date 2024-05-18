import React, { useState } from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import emailjs from "emailjs-com";

export const Modal2 = ({ setOpen }) => {
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
          <IoCloseSharp color="black" size={35} cursor="pointer" />
        </div>
        <Row>
          <h3>Хотите стать нашим партнером?</h3>
          <p>
            Оставьте ваши данные и команда свяжется с вами в ближайшее время
          </p>
          <InputBlock>
            <input
              value={inp2}
              onChange={(e) => setInp2(e.target.value)}
              name="name"
              type="text"
              placeholder="Ваше имя"
            />
            <input
              value={inp}
              onChange={(e) => setInp(e.target.value)}
              name="email"
              type="email"
              placeholder="email"
            />
            <input
              value={inp3}
              onChange={(e) => setInp3(e.target.value)}
              name="number"
              type="number"
              placeholder="Ваш телефон номер"
            />
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
  width: 60%;
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
    h3 {
      font-size: 20px;
      text-align: center;
    }

    p {
      font-size: 15px;
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
`;

const InputBlock = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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

  @media (max-width: 500px) {
    input {
      width: 12rem;
      height: 2rem;
    }
  }
`;
