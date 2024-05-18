import React, { useState } from "react";
import styled from "styled-components";
import { Modal2 } from "../Modal/Modal2";

export const Main9 = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <div>
        <img
          src="https://optim.tildacdn.com/tild3662-3835-4261-a566-666264383038/-/format/webp/image_22_1.png"
          alt="img"
        />
      </div>

      <Block>
        <h2>ХОТИТЕ СТАТЬ ПАРТНЁРОМ МЕРКАТУС?</h2>
        <p>Оставьте заявку, с вами свяжется наша команда и все расскажет</p>

        <div>
          <Button onClick={() => setOpen(true)}>ХОЧУ СТАТЬ ПАРТНЕРОМ</Button>
        </div>
      </Block>

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
`;

const Block = styled("div")`
  h2 {
    color: white;
    font-size: 50px;
    font-weight: 600;
    width: 45rem;
  }

  p {
    margin-top: 1rem;
    width: 30rem;
    font-size: 25px;
    color: white;
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
`;
