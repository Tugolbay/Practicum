import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

export const Main11 = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <Block>
        <h1 data-aos="fade-right">ОТВЕТЫ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ</h1>
        <Accordion>
          <AccordionSummary
            data-aos="fade-right"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Будет ли запись Практикума?
          </AccordionSummary>
          <AccordionDetails data-aos="fade-right">
            Да. Запись будет в вашем личнем кабинете на нашей платформе.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            data-aos="fade-right"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
          >
            Для выхода на маркетплейсы нужен большой стартовый бюджет?
          </AccordionSummary>
          <AccordionDetails data-aos="fade-right">
            Стартовать на маркетплейсах можно с бюджетоми 50 000 руб. Главное
            научиться минимизировать риски, чтобы не потерять деньги на старте.
            На Практикуме за 2 дня вы пройдете путь селлера от выбора товара до
            создания карточки и убедитесь, что для старта не нужны большие
            вложения.
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            data-aos="fade-right"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            Я оплатил(а). Что дальше?
          </AccordionSummary>
          <AccordionDetails data-aos="fade-right">
            В течение суток после оплаты на почту, которую вы указали при
            регистрации, придет письмо с информацией. Если вы не можете найти
            письмо в папке «Входящие», проверьте папки «Спам» или «Промо».
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            data-aos="fade-right"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Чем ваше обучение лучше других?
          </AccordionSummary>
          <AccordionDetails data-aos="fade-right">
            Лео Шевченко — действующий селлер с 15-летним опытом, который
            обучался всему сам. Поэтому обо всех изменениях на маркетплейсах он
            узнает в числе первых и дает только качественную информацию. А
            собственная платформа помогает нашим ученикам быстрее адаптироваться
            к процессу обучения, потому что все нужные материалы собраны в одном
            месте.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            data-aos="fade-right"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Что взять с собой на Практикум?
          </AccordionSummary>
          <AccordionDetails data-aos="fade-right">
            Обязательно возьми с собой заряженный ноутбук, потому что мы будем
            на практике разбирать работу с таблицами. И не забудь про хорошее
            настроение
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            data-aos="fade-right"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Будут ли на Практикуме практические задания?
          </AccordionSummary>
          <AccordionDetails data-aos="fade-right">
            Конечно! 1-й день практикума больше теоретический. Во 2-й день вас
            ждет командная бизнес-игра, в которой вы сможете проявить себя как
            настоящий селлер, проработать свои навыки и применить полученные
            инструменты и первого дня.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            data-aos="fade-right"
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            Если я не торгую на маркетплейсе, мне нужно идти на Практикум?
          </AccordionSummary>
          <AccordionDetails data-aos="fade-right">
            Практикум - это идеальное место, где вы можете начать свой путь
            селлера. А также Практикум однозначно стоит посетить, если вы -
            собственник производства, менеджер маркетплейсов, начинающий или
            действующий селлер и человек, который ищет новое окружение
            единомышленников.
          </AccordionDetails>
        </Accordion>
      </Block>
    </Container>
  );
};

const Container = styled("div")`
  margin-top: 10rem;
  padding: 0 5rem 0 5rem;
`;

const Block = styled("div")`
  display: flex;
  flex-direction: column;

  h1 {
    color: white;
    font-size: 60px;
    padding-bottom: 1rem;
  }

  @media (max-width: 870px) {
    h1 {
      font-size: 40px;
    }
  }

  .MuiAccordion-root {
    box-shadow: none;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    background-color: #0c192c;
  }

  .MuiAccordionSummary-content {
    font-size: 23px;
    color: #fff;
    font-weight: 800;
  }

  .MuiAccordionDetails-root {
    font-size: 20px;
    font-weight: 400;
    color: #fff;
  }

  .MuiSvgIcon-root {
    color: #fff;
    font-size: 30px;
  }

  @media (max-width: 540px) {
    .MuiAccordionSummary-content {
      font-size: 20px;
    }
  }

  @media (max-width: 500px) {
    .MuiAccordionSummary-content {
      font-size: 16px;
    }

    .MuiAccordionDetails-root {
      font-size: 15px;
    }
  }
`;
