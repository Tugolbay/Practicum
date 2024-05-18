import React from "react";
import styled from "styled-components";
import { IoLogoInstagram } from "react-icons/io5";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";

export const Main12 = () => {
  return (
    <Container>
      <h2>Подписывайтесь на наши соцсети</h2>

      <div>
        <Instagram href="https://www.instagram.com/leoshev4enko/?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-">
          <IoLogoInstagram size={30} color="white" />
        </Instagram>
        <Telegram href="https://t.me/namarketplacewithleo?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZ">
          <PiTelegramLogoBold size={30} color="white" />
        </Telegram>
        <VContact href="https://vk.com/leoshev4enkoschool?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"></VContact>
      </div>

      <div>
        <Square href="https://dzen.ru/leoshev44enko?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"></Square>
        <Youtube href="https://www.youtube.com/channel/UCAy8eLRvaazCC5erOqAvIgw?ybp=-gEHYmlvX0xlbw%253D%253D">
          <FaYoutube size={30} color="white" />
        </Youtube>
      </div>

      <p>
        *«Facebook/Instagram — проект Meta Platforms Inc., деятельность которой
        в России запрещена»
      </p>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 10rem;
  padding: 0 5rem 0 5rem;

  h2 {
    font-size: 50px;
    color: white;
    margin-bottom: 6rem;
  }

  div {
    display: flex;
    gap: 2rem;
  }

  p {
    color: white;
    font-size: 17px;
    margin-top: 2rem;
  }
`;

const Instagram = styled("a")`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20vw;
  height: 4.5rem;
  border-radius: 10px;
  background-color: #f00075;
  cursor: pointer;
`;

const Telegram = styled("a")`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 20vw;
  height: 4.5rem;
  border-radius: 10px;
  background-color: #1d98dc;
  cursor: pointer;
`;

const VContact = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  width: 20vw;
  height: 4.5rem;
  border-radius: 10px;
  background-color: #0077ff;
`;

const Square = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 31vw;
  height: 4.5rem;
  border-radius: 10px;
  background-color: #000;
  cursor: pointer;
`;

const Youtube = styled("a")`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 31vw;
  height: 4.5rem;
  border-radius: 10px;
  background-color: #cc181e;
  cursor: pointer;
`;
