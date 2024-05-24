/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect } from "react";
import styled from "styled-components";
import { PiTelegramLogoBold } from "react-icons/pi";
import { BsTelephoneX } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

export const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <BlockRow>
        <Row1>
          <img
            data-aos="fade-right"
            src="https://static.tildacdn.com/tild6631-6138-4330-b939-346562303661/__1.svg"
            alt="img"
          />

          <Desc data-aos="fade-right">
            ООО "МЕРКАТУС" ИНН: 9723158300, ОГРН: 1227700373768.
          </Desc>

          <Link>
            <a
              data-aos="fade-right"
              target="_blank"
              href="https://merkatys.ru/tech?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
            >
              Техническая инструкция
            </a>
            <a
              data-aos="fade-right"
              target="_blank"
              href="https://merkatys.ru/doc?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
            >
              Документация
            </a>
          </Link>
        </Row1>

        <Row2>
          <Telegram
            data-aos="fade-right"
            href="https://t.me/leoshevchenko_bot?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          >
            <PiTelegramLogoBold size={30} color="white" />
            <p>Служба заботы</p>
          </Telegram>

          <Telegram
            data-aos="fade-right"
            href="https://t.me/merkatus_partners_bot?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          >
            <PiTelegramLogoBold size={30} color="white" />
            <p>Сотрудничество</p>
          </Telegram>

          <div
            data-aos="fade-right"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <BsTelephoneX size={25} color="white" />
            <p style={{ color: "white" }}>8 800 700-13-52</p>
          </div>
        </Row2>
      </BlockRow>

      <Row3>
        <div>
          <a data-aos="fade-right" target="_blank" href="/">
            Лицензионный договор оферты
          </a>
          <a data-aos="fade-right" target="_blank" href="/">
            Договор оферты
          </a>
          <a data-aos="fade-right " target="_blank" href="/">
            Соглашение об участии в партнерской программе
          </a>
          <a data-aos="fade-right" target="_blank" href="/">
            Политика обработки персональных данных
          </a>
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
  padding: 3rem 5rem 1rem 5rem;
  margin-top: 10rem;
  background-color: #25293c;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }
`;

const Desc = styled("p")`
  width: 11rem;
  color: white;

  @media (max-width: 700px) {
    width: 18rem;
    font-size: 25px;
  }
`;

const Link = styled("div")`
  display: flex;
  flex-direction: column;
  color: white;

  a {
    text-decoration: underline;
  }

  @media (max-width: 700px) {
    a {
      width: 18rem;
      font-size: 25px;
    }
  }
`;

const Row1 = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 700px) {
    align-items: center;

    img {
      width: 50vw;
    }
  }
`;

const Row2 = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 700px) {
    align-items: center;
    margin-top: 3rem;
  }
`;

const Row3 = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
  }

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

  @media (max-width: 1100px) {
    width: 12rem;
  }

  @media (max-width: 700px) {
    width: 16rem;
  }
`;

const BlockRow = styled("div")`
  display: flex;
  gap: 8rem;
  justify-content: space-between;

  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;
