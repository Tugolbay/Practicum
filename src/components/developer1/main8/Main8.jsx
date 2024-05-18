import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

export const Main8 = () => {
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
        <h2>НЕ МОЖЕТЕ ВЫБРАТЬ ТАРИФ?</h2>
        <p>
          Оставьте заявку и получите подробную презентацию программы с
          консультацией специалиста
        </p>
      </Block>
      <Block2>
        <input
          value={inp2}
          onChange={(e) => setInp2(e.target.value)}
          name="name"
          className="input"
          type="text"
          placeholder="Ваше имя"
        />
        <input
          value={inp3}
          onChange={(e) => setInp3(e.target.value)}
          name="number"
          className="input"
          type="number"
          placeholder="+7 (999) 999-99-99"
        />
        <input
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          name="email"
          className="input"
          type="email"
          placeholder="email"
        />

        <Checkbox>
          <input type="checkbox" />
          <p>
            Даю согласие на <a href="/">обработку персональных данных</a>
          </p>
        </Checkbox>

        <div>
          <Button type="submit">ЗАБРОНИРОВАТЬ МЕСТО</Button>
        </div>

        <Desc>Нажимая на кнопку, вы соглашаетесь с договором офферты</Desc>
      </Block2>
    </Container>
  );
};

const Container = styled("form")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  margin-top: 10rem;
  padding: 0 5rem 0 5rem;
`;

const Block = styled("div")`
  h2 {
    color: white;
    font-size: 50px;
    font-weight: 600;
    width: 35rem;
  }

  p {
    margin-top: 1rem;
    width: 30rem;
    font-size: 25px;
    color: white;
  }
`;

const Block2 = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  gap: 2rem;
  width: 35vw;
  border-radius: 20px;
  background-color: #3d3c3c;
  .input {
    width: 28vw;
    height: 3rem;
    border-radius: 15px;
    padding-left: 1rem;
  }
`;

const Button = styled("button")`
  background: linear-gradient(45deg, #d2001a, #7462ff, #f48e21, #23d5ad);
  background-size: 300% 300%;
  animation: color 12s ease-in-out infinite;
  border-radius: 10px;
  padding: 1rem 3rem 1rem 3rem;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;
`;

const Checkbox = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: blue;
  }
`;

const Desc = styled("p")`
  color: white;
  font-size: 13px;
`;
