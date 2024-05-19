import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal2 } from "../Modal/Modal2";
import AOS from "aos";
import "aos/dist/aos.css";

export const Partner = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Block>
        <h2 data-aos="fade-right">ХОТИТЕ СТАТЬ ПАРТНЁРОМ МЕРКАТУС?</h2>
        <p data-aos="fade-right">
          Оставьте заявку, с вами свяжется наша команда и все расскажет
        </p>

        <div>
          <Button data-aos="fade-right" onClick={() => setOpen(true)}>
            ХОЧУ СТАТЬ ПАРТНЕРОМ
          </Button>
        </div>
      </Block>

      <div>
        <img
          src="https://optim.tildacdn.com/tild3662-3835-4261-a566-666264383038/-/format/webp/image_22_1.png"
          alt="img"
        />
      </div>

      {open && <Modal2 setOpen={setOpen} />}
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  margin-top: 10rem;
  padding: 0 5rem 0 5rem;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    gap: 4rem;
    padding: 0 2rem 0 2rem;
  }
`;

const Block = styled("div")`
  h2 {
    color: white;
    font-size: 50px;
    font-weight: 600;
  }

  p {
    margin-top: 1rem;
    font-size: 25px;
    color: white;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 40px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 30px;
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
  margin-top: 3rem;

  @media (max-width: 600px) {
    font-size: 15px;
    padding: 1rem 2rem 1rem 2rem;
  }

  @media (max-width: 413px) {
    font-size: 12px;
  }
`;
