import React, { useEffect } from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

export const Manager = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Main>
      <Container>
        <Block>
          <h1 data-aos="fade-right">ТОП-5 лучших персональных менеджеров</h1>
          <p data-aos="fade-right">
            Если хотите уточнить данные сотрудника и удостовериться в том, что
            он работает в нашей компании – обратитесь в{" "}
            <span>службу заботы.</span>
          </p>
        </Block>

        <Block2>
          <Raiting>
            <p>ТОП-5</p>
            <div>
              <FaStar color="orange" size={25} />
              <FaStar color="orange" size={25} />
              <FaStar color="orange" size={25} />
              <FaStar color="orange" size={25} />
              <FaStar color="orange" size={25} />
            </div>
          </Raiting>

          <RowImg>
            <div>
              <img
                src="https://optim.tildacdn.com/tild3638-3838-4337-a131-353435343436/-/resize/280x/-/format/webp/_.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://optim.tildacdn.com/tild3638-3838-4337-a131-353435343436/-/resize/280x/-/format/webp/_.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://optim.tildacdn.com/tild3638-3838-4337-a131-353435343436/-/resize/280x/-/format/webp/_.png"
                alt=""
              />
            </div>
          </RowImg>

          <RowImg>
            <div>
              <img
                src="https://optim.tildacdn.com/tild3638-3838-4337-a131-353435343436/-/resize/280x/-/format/webp/_.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://optim.tildacdn.com/tild3638-3838-4337-a131-353435343436/-/resize/280x/-/format/webp/_.png"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://optim.tildacdn.com/tild3638-3838-4337-a131-353435343436/-/resize/280x/-/format/webp/_.png"
                alt=""
              />
            </div>
          </RowImg>
        </Block2>
      </Container>
    </Main>
  );
};

const Main = styled("div")`
  margin-top: 10rem;
  padding: 0 5rem 0 5rem;

  @media (max-width: 500px) {
    padding: 0 2rem 0 2rem;
  }
`;

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 870px) {
    display: flex;
    flex-direction: column;
  }
`;

const Block = styled("div")`
  h1 {
    color: white;
    font-size: 50px;
    font-weight: 700;
    width: 30rem;
  }

  p {
    color: white;
    width: 26rem;
    font-size: 20px;
    margin-top: 3rem;
  }

  @media (max-width: 1060px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 980px) {
    h1 {
      font-size: 30px;
      width: 20rem;
    }

    p {
      font-size: 15px;
    }
  }

  @media (max-width: 870px) {
    h1 {
      font-size: 35px;
      width: 100%;
    }

    p {
      width: 100%;
      font-size: 20px;
    }
  }
`;

const Block2 = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #141c24;
  padding: 2rem;
  margin-top: 5rem;

  @media (max-width: 870px) {
    width: 100%;
  }
`;

const Raiting = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    color: orange;
    font-size: 35px;
    font-weight: 600;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }

  @media (max-width: 610px) {
    p {
      font-size: 25px;
    }
  }
`;

const RowImg = styled("div")`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;
