import React, { useState } from "react";
import Korona from "./Group_1504_2.png";
import Eshik from "./Group_1504.png";
import Mouse from "./Group_1504_1.png";
import "./Format.css";
import { Modal2 } from "./Modal2";
import { Modal1 } from "./Modal";
import { Modal3 } from "./Modal3";
import { Modal4 } from "./Modal4";

export const Format = ({ formatRef }) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const openCloseModal1 = () => {
    setOpen1(!open1);
  };
  const openCloseModal2 = () => {
    setOpen2(!open2);
  };
  const openCloseModal3 = () => {
    setOpen3(!open3);
  };
  const openCloseModal4 = () => {
    setOpen4(!open4);
  };
  return (
    <div ref={formatRef} className="mb-20 mt-[18rem]">
      <p
        style={{
          color: "white",

          textAlign: "center",
          fontWeight: "bold",
        }}
        className="md:text-[4rem] text-[2rem] mb-12 "
      >
        ВЫБЕРИТЕ ФОРМАТ УЧАСТИЯ
      </p>
      <div
        className="flex-wrap"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <div
          style={{
            width: "24rem",
            background: "#222121",
            height: "100vh",
            borderRadius: "20px",
            paddingRight: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "white",
                padding: "0.8rem",
                fontSize: "1.2rem",
                marginTop: "-2rem",
                background: "#7e4be6",
                display: "flex",
                justifyContent: "center",
                borderRadius: "0.5rem",
              }}
            >
              Неограниченно мест
            </p>
          </div>
          <h1 className="text-center text-white text-[2rem] mt-4">ОНЛАЙН</h1>
          <ul className="list-disc ml-10 h-[50vh]">
            <li style={{ color: "white", marginTop: "7px" }}>
              Доступ к плагину “Меркатус” для аналитики
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Онлайн посещение мероприятия
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Запись мероприятия на 14 дней
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Участие в эфире с разбором карточек от экспертов «Меркатус»
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Онлайн-сертификат участника
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Участие в розыгрыше призов
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "90%", textAlign: "center" }}
              src={Mouse}
              alt="aa"
            />
          </div>
          <p className="text-center text-white text-[1.3rem] mt-10">
            Стоимость
          </p>
          <p className="text-center text-white text-[2rem] font-bold">
            1 490 РУБ.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              onClick={openCloseModal1}
              style={{
                color: "white",
                borderRadius: "0.5rem",
                height: "10vh",
                width: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.3rem",
                fontWeight: "bold",
                background: "linear-gradient(to right, #00aaff, #aa00ff)",
                backgroundSize: "200% auto",
                transition: "background-position 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundPosition = "0%";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundPosition = "100%";
              }}
            >
              УЧАСТВОВАТЬ
            </p>
          </div>
        </div>
        <div
          style={{
            width: "24rem",
            background: "#222121",
            height: "125vh",
            borderRadius: "20px",
            paddingRight: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "white",
                padding: "0.8rem",
                fontSize: "1.2rem",
                width: "10rem",
                marginTop: "-2rem",
                background: "#7e4be6",
                display: "flex",
                justifyContent: "center",
                borderRadius: "0.5rem",
              }}
            >
              90 МЕСТ
            </p>
            {open1 ? <Modal1 setOpen1={setOpen1} open1={open1} /> : null}
            {open2 ? <Modal2 setOpen2={setOpen2} open2={open2} /> : null}
            {open3 ? <Modal3 setOpen3={setOpen3} open3={open3} /> : null}
            {open4 ? <Modal4 setOpen4={setOpen4} open4={open4} /> : null}
          </div>
          <h1 className="text-center text-white text-[2rem] mt-4">ОФЛАЙН</h1>
          <ul className="list-disc ml-10 h-[50vh]">
            <li style={{ color: "white", marginTop: "7px" }}>
              Доступ к плагину “Меркатус” для аналитики
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Личное присутствие на мероприятии
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Запись мероприятия на 14 дней
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Участие в эфире с разбором карточек от экспертов «Меркатус»
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Онлайн-сертификат участника
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Участие в розыгрыше призов
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "90%", textAlign: "center" }}
              src={Eshik}
              alt="aa"
            />
          </div>
          <p className="text-white text-center text-[1.3rem] mt-10">
            Стоимость на одного участника
          </p>
          <p className="text-white text-center text-[2rem] font-bold">
            2 590 РУБ.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "white",
                borderRadius: "0.5rem",
                height: "10vh",
                width: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.3rem",
                fontWeight: "bold",
                background: "linear-gradient(to right, #00aaff, #aa00ff)",
                backgroundSize: "200% auto",
                transition: "background-position 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundPosition = "0%";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundPosition = "100%";
              }}
              onClick={openCloseModal2}
            >
              УЧАСТВОВАТЬ
            </p>
          </div>
          <p className="text-white text-center text-[1.3rem] mt-8">
            Стоимость на двух участников
          </p>
          <div className="flex justify-center gap-4">
            <p className="text-[2rem] text-[grey] line-through">5 180 РУБ.</p>
            <p className="text-[2rem] text-white">4 500 РУБ.</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              onClick={openCloseModal3}
              style={{
                color: "white",
                borderRadius: "0.5rem",
                height: "10vh",
                width: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.3rem",
                fontWeight: "bold",
                background: "linear-gradient(to right, #00aaff, #aa00ff)",
                backgroundSize: "200% auto",
                transition: "background-position 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundPosition = "0%";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundPosition = "100%";
              }}
            >
              УЧАСТВОВАТЬ
            </p>
          </div>
        </div>
        <div
          style={{
            width: "24rem",
            background: "#222121",
            borderRadius: "20px",
          }}
          className="sm:h-[100vh] h-[110vh]"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "white",
                padding: "0.8rem",
                fontSize: "1.2rem",
                width: "10rem",
                marginTop: "-2rem",
                background: "#7e4be6",
                display: "flex",
                justifyContent: "center",
                borderRadius: "0.5rem",
              }}
            >
              20 МЕСТ
            </p>
          </div>
          <h1 className="text-center text-[white] text-[2rem] mt-4">VIP</h1>
          <ul className="list-disc ml-10 h-[50vh]">
            <li style={{ color: "white", marginTop: "7px" }}>
              Доступ к плагину “Меркатус” для аналитики
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Личное присутствие на мероприятии
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Запись мероприятия на 30 дней
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Участие в эфире с разбором карточек от экспертов «Меркатус»
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Печатный сертификат участника
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Часовая сессия «Вопрос-ответ» с Лео
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Завтрак на мероприятии
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              VIP-зона в перерыве
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Отдельный гардероб
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Фирменный мерч в подарок
            </li>
            <li style={{ color: "white", marginTop: "7px" }}>
              Участие в розыгрыше призов
            </li>
          </ul>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ width: "90%", textAlign: "center" }}
              src={Korona}
              className="sm:mt-0 mt-8"
              alt="aa"
            />
          </div>
          <p className="text-center text-white text-[1.3rem] mt-10">
            Стоимость
          </p>
          <p className="text-center text-white text-[2rem] font-bold">
            15 000 РУБ.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                color: "white",
                borderRadius: "0.5rem",
                height: "10vh",
                width: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.3rem",
                fontWeight: "bold",
                background: "linear-gradient(to right, #00aaff, #aa00ff)",
                backgroundSize: "200% auto",
                transition: "background-position 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundPosition = "0%";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundPosition = "100%";
              }}
              onClick={openCloseModal4}
            >
              УЧАСТВОВАТЬ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
