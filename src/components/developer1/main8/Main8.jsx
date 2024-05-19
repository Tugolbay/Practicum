import React, { useEffect, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

export const Main8 = () => {
  const [inp, setInp] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);

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
        <h2 data-aos="fade-right">НЕ МОЖЕТЕ ВЫБРАТЬ ТАРИФ?</h2>
        <p data-aos="fade-right">
          Оставьте заявку и получите подробную презентацию программы с
          консультацией специалиста
        </p>
      </Block>

      <Block2>
        <input
          data-aos="fade-right"
          value={inp2}
          onChange={(e) => setInp2(e.target.value)}
          name="name"
          className="input"
          type="text"
          placeholder="Ваше имя"
        />
        <input
          data-aos="fade-right"
          value={inp3}
          onChange={(e) => setInp3(e.target.value)}
          name="number"
          className="input"
          type="number"
          placeholder="+7 (999) 999-99-99"
        />
        <input
          data-aos="fade-right"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          name="email"
          className="input"
          type="email"
          placeholder="email"
        />

        <Checkbox data-aos="fade-right">
          <input type="checkbox" />
          <p>
            Даю согласие на <a href="/">обработку персональных данных</a>
          </p>
        </Checkbox>

        <div>
          <Button type="submit" data-aos="fade-up">
            ЗАБРОНИРОВАТЬ МЕСТО
          </Button>
        </div>

        <Desc data-aos="fade-right">Нажимая на кнопку, вы соглашаетесь с договором офферты</Desc>
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

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
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

  @media (max-width: 599px) {
    h2 {
      width: 100%;
      font-size: 40px;
      text-align: center;
    }

    p {
      width: 100%;
      font-size: 20px;
      text-align: center;
    }
  }

  @media (max-width: 490px) {
    h2 {
      font-size: 32px;
      text-align: center;
    }

    p {
      font-size: 12px;
      text-align: center;
    }
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

  @media (max-width: 1100px) {
    width: 35rem;

    .input {
      width: 25rem;
    }
  }

  @media (max-width: 650px) {
    width: 28rem;

    .input {
      width: 20rem;
    }
  }

  @media (max-width: 490px) {
    width: 23rem;

    .input {
      width: 15rem;
    }
  }

  @media (max-width: 430px) {
    width: 18rem;

    .input {
      width: 12rem;
      height: 2rem;
      border-radius: 8px;
    }
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

  @media (max-width: 430px) {
    font-size: 10px;
    padding: 1rem 2rem 1rem 2rem;
  }
`;

const Checkbox = styled("div")`
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: #006aff;
  }

  @media (max-width: 430px) {
    a {
      font-size: 13px;
    }
    p {
      font-size: 13px;
    }
  }
`;

const Desc = styled("p")`
  color: white;
  font-size: 13px;
`;
