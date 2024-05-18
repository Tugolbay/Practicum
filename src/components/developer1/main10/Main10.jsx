import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa";

export const Main10 = () => {
  return (
    <Main>
      <Container>
        <Block>
          <h1>ТОП-5 лучших персональных менеджеров</h1>
          <p>
            Если хотите уточнить данные сотрудника и удостовериться в том, что
            он работает в нашей компании – обратитесь в{" "}
            <span>службу заботы.</span>
          </p>
        </Block>

        <Block2>
          <div>
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
            <img
              src="	https://optim.tildacdn.com/tild3638-3838-4337-a131-353435343436/-/resize/280x/-/format/webp/_.png"
              alt="img"
            />
            <img
              src="https://optim.tildacdn.com/tild3635-3464-4832-b264-343266623634/-/resize/280x/-/format/webp/_.png"
              alt="img"
            />
          </div>

          <div>
            <img
              src="https://optim.tildacdn.com/tild6335-6334-4462-a233-383862653835/-/resize/280x/-/format/webp/_.png"
              alt="img"
            />

            <img
              src="https://optim.tildacdn.com/tild3066-3034-4366-b164-623438313337/-/resize/280x/-/format/webp/_.png"
              alt="img"
            />
            <img
              src="https://optim.tildacdn.com/tild3138-3630-4335-b738-316137373664/-/resize/280x/-/format/webp/__1.png"
              alt="img"
            />
          </div>
        </Block2>
      </Container>

      <div style={{ paddingLeft: "3rem", marginTop: "2rem" }}>
        <Modal>
          <p>
            Важно! Мы принимаем переводы только по выставленным счетам с ООО
            "Меркатус". Если вас просят перевести деньги по номеру телефона или
            на карту физического лица – это мошенники.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            <Btn>Как это выглядит?</Btn>
            <p
              style={{ color: "black", display: "flex", alignItems: "center" }}
            >
              <FaArrowLeft /> нажмите, чтобы посмотреть
            </p>
          </div>
        </Modal>
      </div>
    </Main>
  );
};

const Main = styled("div")`
  margin-top: 10rem;
  padding: 0 5rem 0 5rem;
`;

const Container = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
`;

const Block = styled("div")`
  h1 {
    color: white;
    font-size: 50px;
    font-weight: 700;
    line-height: 73px;
    width: 30rem;
  }

  p {
    color: white;
    width: 30vw;
    font-size: 20px;
    margin-top: 3rem;
  }
`;

const Block2 = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40vw;
  height: 25rem;
  border-radius: 20px;
  background-color: #141c24;
  padding: 2rem;

  img {
    width: 8vw;
  }

  div {
    display: flex;
    justify-content: space-between;
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
`;

const Modal = styled("div")`
  width: 35vw;
  padding: 1rem;
  border-radius: 15px;
  background-color: red;

  p {
    color: white;
  }
`;

const Btn = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 3rem;
  border: 1px solid white;
  border-radius: 20px;
  color: white;
  cursor: pointer;
`;
