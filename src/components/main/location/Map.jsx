import React from "react";
import styled from "styled-components";

export const Map = () => {
  return (
    <Container>
      <IFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2247.4680165521168!2d37.67631967682371!3d55.71561829485463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab4d501fa26e5%3A0x2a349e7d073f290f!2skidsteen%20ru!5e0!3m2!1sru!2skg!4v1716040613414!5m2!1sru!2skg"
        allowfullscreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Responcive Google Map"
        style={{ border: "none" }}
      ></IFrame>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  justify-content: center;
`;

const IFrame = styled("iframe")`
  width: 900px;
  height: 450px;
  margin-top: 5rem;

  @media (max-width: 950px) {
    width: 700px;
  }

  @media (max-width: 760px) {
    width: 600px;
  }

  @media (max-width: 650px) {
    width: 500px;
  }

  @media (max-width: 540px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 350px;
    height: 350px;
  }
`;
