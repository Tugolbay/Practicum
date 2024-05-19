import React, { useEffect } from "react";
import styled from "styled-components";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "../../Hell.css";
import AOS from "aos";
import "aos/dist/aos.css";

const data = [
  {
    id: 1,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 3,
    image:
      "data:image/jpeg;base64,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",
  },
];

export const Main = ({ resultRef, tarifRef }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Mains ref={resultRef}>
      <Container>
        <h1 data-aos="fade-right">
          <strong>ГЛАВНАЯ ЦЕЛЬ</strong> ПРАКТИКУМА
        </h1>
        <h3 data-aos="fade-right">
          СОЗДАТЬ ПРОСТРАНСТВО, В КОТОРОМ РОСТ КАЖДОГО УЧАСТНИКА НЕИЗБЕЖЕН
        </h3>

        <Block>
          <Title>
            <p data-aos="fade-right">
              Самая актуальная информация по маркетплейсам
            </p>
            <p data-aos="fade-right">Сильнейшие селлеры в одном месте</p>
            <p data-aos="fade-right">Нетворкинг и новые полезные знакомства</p>
            <p data-aos="fade-right">Возможность участия из любой точки мира</p>
            <p data-aos="fade-right">Подарки и призы от партнеров</p>
          </Title>

          <div className="slide-container  slider">
            <Slide autoplay={true} duration={4000} transitionDuration={500}>
              {data.map((el, index) => (
                <div key={index}>
                  <img
                    src={el.image}
                    alt=""
                    style={{ width: "100%", borderRadius: "30px" }}
                  />
                </div>
              ))}
            </Slide>
          </div>
        </Block>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5rem",
          }}
        >
          <button
            data-aos="fade-down"
            onClick={() =>
              tarifRef.current &&
              tarifRef.current.scrollIntoView({ behavior: "smooth" })
            }
            className="bgc-button"
          >
            УЧАСТВОВАТЬ
          </button>
        </div>
      </Container>
    </Mains>
  );
};

const Mains = styled("div")`
  display: flex;
  justify-content: center;
  margin-top: 10rem;
`;

const Container = styled("div")`
  width: 70rem;
  background-color: white;
  padding: 5rem;
  border-radius: 20px;

  h1 {
    font-weight: 600;
    font-size: 60px;
    strong {
      color: #9400fd;
    }
  }

  h3 {
    font-weight: 600;
    font-size: 25px;
    width: 40rem;
  }

  @media (max-width: 1145px) {
    width: 60rem;

    h1 {
      font-size: 50px;
    }

    h3 {
      font-size: 20px;
    }
  }

  @media (max-width: 1020px) {
    width: 50rem;
  }

  @media (max-width: 860px) {
    width: 40rem;

    h1 {
      font-size: 40px;
    }

    h3 {
      width: 30rem;
      font-size: 15px;
    }
  }

  @media (max-width: 700px) {
    width: 35rem;
  }

  @media (max-width: 630px) {
    width: 30rem;

    h1 {
      font-size: 30px;
    }

    h3 {
      width: 15rem;
      font-size: 15px;
    }
  }

  @media (max-width: 520px) {
    width: 25rem;

    h1 {
      font-size: 30px;
    }

    h3 {
      width: 15rem;
      font-size: 15px;
    }
  }

  @media (max-width: 460px) {
    width: 20rem;

    h1 {
      font-size: 19px;
    }

    h3 {
      font-size: 10px;
    }
  }
`;

const Title = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  p {
    font-size: 20px;
    margin: 0;
  }

  @media (max-width: 460px) {
    p {
      font-size: 15px;
    }
  }
`;

const Block = styled("div")`
  display: flex;
  gap: 2rem;
  margin-top: 5rem;

  .slider {
    width: 30rem;
  }

  @media (max-width: 1145px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 630px) {
    .slider {
      width: 25rem;
    }
  }

  @media (max-width: 520px) {
    .slider {
      width: 20rem;
    }
  }

  @media (max-width: 460px) {
    .slider {
      width: 15rem;
    }
  }
`;
