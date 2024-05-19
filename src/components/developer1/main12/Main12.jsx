import React from "react";
import styled from "styled-components";
import { IoLogoInstagram } from "react-icons/io5";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaYoutube } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

export const Main12 = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <h2 data-aos="fade-right">Подписывайтесь на наши соцсети</h2>

      <div>
        <Instagram
          data-aos="zoom-in"
          target="_blank"
          href="https://www.instagram.com/leoshev4enko/?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
        >
          <IoLogoInstagram size={30} color="white" />
        </Instagram>
        <Telegram
          data-aos="zoom-in"
          target="_blank"
          href="https://t.me/namarketplacewithleo?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZ"
        >
          <PiTelegramLogoBold size={30} color="white" />
        </Telegram>
        <VContact
          data-aos="zoom-in"
          target="_blank"
          href="https://vk.com/leoshev4enkoschool?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
        >
          <img
            src="https://miro.medium.com/v2/resize:fit:1400/0*GQ4iLS60mTr7aR_Z"
            alt="img"
          />
        </VContact>
      </div>

      <div>
        <Square
          data-aos="zoom-in"
          target="_blank"
          href="https://dzen.ru/leoshev44enko?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
        >
          <img
            src="https://timeweb.com/ru/community/article/e5/e505c6b384e407982cbd3ca02ee1ab80.jpg"
            alt="img"
          />
        </Square>
        <Youtube
          data-aos="zoom-in"
          target="_blank"
          href="https://www.youtube.com/channel/UCAy8eLRvaazCC5erOqAvIgw?ybp=-gEHYmlvX0xlbw%253D%253D"
        >
          <FaYoutube size={30} color="white" />
        </Youtube>
      </div>

      <p data-aos="fade-right">
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

  @media (max-width: 500px) {
    h2 {
      font-size: 40px;
    }
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

  img {
    width: 7rem;
  }
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

  img {
    width: 7rem;
  }
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
