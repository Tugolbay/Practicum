// /* eslint-disable no-useless-escape */
/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import { IoCloseSharp } from "react-icons/io5";

export const Modal2 = ({ setOpen2 }) => {
  const [data, setData] = useState({
    email: "",
    name: "",
    number: "",
    tarif: "Vip",
  });

  const [isChecked, setIsChecked] = useState(false);

  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);
  const [numberDirty, setNumberDirty] = useState(false);

  const [emailError, setEmailError] = useState(
    "Пожалуйста напишите свой адрес электронной почты"
  );
  const [nameError, setNameError] = useState("Пожалуйста напишите свое имя");
  const [numberError, setNumberError] = useState(
    "Пожалуйста напишите свой номер телефона"
  );

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/adfd0ae3-e080-44d8-905b-a4a1407e5caf"
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });

    switch (name) {
      case "email":
        setEmailDirty(true);
        const emailRe =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!emailRe.test(String(value).toLowerCase())) {
          setEmailError("Некорректный email");
        } else {
          setEmailError("");
        }
        break;
      case "name":
        setNameDirty(true);
        const nameRe = /^[A-Za-zА-Яа-яЁё\s]+$/;
        if (!nameRe.test(String(value).toLowerCase())) {
          setNameError("Некорректное имя");
        } else {
          setNameError("");
        }
        break;
      case "number":
        setNumberDirty(true);
        const numberRe = /^\+?[0-9]+$/;
        if (!numberRe.test(value)) {
          setNumberError("Некорректный номер телефона");
        } else {
          setNumberError("");
        }
        break;
      default:
        break;
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (emailError || nameError || numberError || !isChecked) {
      alert(
        "Пожалуйста, заполните все поля корректно и согласитесь с условиями."
      );
      return;
    }

    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/374023f5-53db-4147-ad4a-7d11d2136957",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data }),
        }
      );
      if (res.ok) {
        console.log("Data submitted successfully!");
        setData({
          email: "",
          name: "",
          number: "",
          tarif: "Vip",
        });
        setIsChecked(false);
        alert("Ваша заявка успешна отправлена!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Block>
        <div
          onClick={() => setOpen2(false)}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IoCloseSharp color="white" size={35} cursor="pointer" />
        </div>
        <Row>
          <h3>Оформление заказа</h3>
          <p>Я на практикуме - тариф Vip 15 000 руб.</p>

          <InputBlock>
            <TextField
              value={data.email}
              name="email"
              id="standard-basic"
              label="Введите ваш эл.адрес"
              variant="standard"
              onChange={handleChange}
            />
            {emailDirty && emailError && (
              <p style={{ color: "red", fontSize: "12px" }}>{emailError}</p>
            )}
            <TextField
              value={data.name}
              name="name"
              onChange={handleChange}
              id="standard-basic"
              label="Введите ваше имя"
              variant="standard"
            />
            {nameDirty && nameError && (
              <p style={{ color: "red", fontSize: "12px" }}>{nameError}</p>
            )}
            <TextField
              name="number"
              value={data.number}
              onChange={handleChange}
              id="standard-basic"
              label="Введите ваш телефон"
              variant="standard"
              className="inputs"
            />
            {numberDirty && numberError && (
              <p style={{ color: "red", fontSize: "12px" }}>{numberError}</p>
            )}
          </InputBlock>

          <button type="submit" className="btn">
            Записаться
          </button>

          <div className="checkBlock">
            <input
              type="checkbox"
              className="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
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
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
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
    color: #086ba1;
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
