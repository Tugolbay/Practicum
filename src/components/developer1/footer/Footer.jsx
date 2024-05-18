import React from "react";
import styled from "styled-components";
import { PiTelegramLogoBold } from "react-icons/pi";
import { BsTelephoneX } from "react-icons/bs";

export const Footer = () => {
  return (
    <Container>
      <Row1>
        <img
          src="https://static.tildacdn.com/tild6631-6138-4330-b939-346562303661/__1.svg"
          alt="img"
        />

        <Desc>ООО "МЕРКАТУС" ИНН: 9723158300, ОГРН: 1227700373768.</Desc>

        <Link>
          <a href="https://merkatys.ru/tech?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-">
            Техническая инструкция
          </a>
          <a href="https://merkatys.ru/doc?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-">
            Документация
          </a>
        </Link>
      </Row1>

      <Row2>
        <Telegram href="https://t.me/leoshevchenko_bot?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-">
          <PiTelegramLogoBold size={30} color="white" />
          <p>Служба заботы</p>
        </Telegram>

        <Telegram href="https://t.me/merkatus_partners_bot?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-">
          <PiTelegramLogoBold size={30} color="white" />
          <p>Сотрудничество</p>
        </Telegram>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <BsTelephoneX size={25} color="white" />
          <p style={{ color: "#fff" }}>8 800 700-13-52</p>
        </div>
      </Row2>

      <Row3>
        <div>
          <a href="/">Лицензионный договор оферты</a>
          <a href="/">Договор оферты</a>
          <a href="/">Соглашение об участии в партнерской программе</a>
          <a href="/">Политика обработки персональных данных</a>
        </div>

        <p>
          2024. Любое использование либо копирование материалов или подборки
          материалов сайта, элементов дизайна и оформления допускается лишь с
          разрешения правообладателя.
        </p>
      </Row3>
    </Container>
  );
};

const Container = styled("footer")`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 3rem 5rem 0 5rem;
  margin-top: 10rem;
  background-color: #25293c;
`;

const Desc = styled("p")`
  width: 11rem;
  color: white;
`;

const Link = styled("div")`
  display: flex;
  flex-direction: column;
  color: white;

  a {
    text-decoration: underline;
  }
`;

const Row1 = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Row2 = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Row3 = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    a {
      color: white;
      text-decoration: underline;
    }
  }

  p {
    width: 20rem;
    color: orange;
  }
`;

const Telegram = styled("a")`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  width: 18vw;
  height: 3.5rem;
  border-radius: 10px;
  border: 3px solid white;
  cursor: pointer;
  color: white;
`;
