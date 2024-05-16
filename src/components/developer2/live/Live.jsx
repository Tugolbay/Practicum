import React from "react";
import { LiveIcon } from "../../../assets";
import BookImage from "./Group_12367.png";
import Lest from "./Group_1481.png";
import Svet from "./Group_1514.png";
import "./Live.css";

export const Live = ({ liveRef, formatRef }) => {
  return (
    <div ref={liveRef}>
      <div className="flex flex-col items-center ">
        <LiveIcon />
        <p className="text-white text-center md:text-[2rem] text-[1rem] md:w-[45rem] w-[25rem] ">
          Все участники Практикума примут участие в прямом эфире с разбором
          ваших реальных карточек товаров от эксперта IT-платформы "Меркатус"
        </p>
      </div>
      <div className="flex justify-center">
        <div className="bg-white w-[80rem] mt-16 h-[120vh] rounded-[2rem] ">
          <p className="melg:text-[3rem] text-[2rem] font-bold ml-20 mt-12">
            КУПИТЕ БИЛЕТ НА ПРАКТИКУМ
          </p>
          <p className="melg:text-[3rem] text-[2rem] font-bold md:ml-[15rem] ml-[2rem] text-[#775aba]">
            В ТЕЧЕНИЕ 5 МИНУТ И ЗАБЕРИТЕ БОНУСЫ
          </p>
          <div className="flex justify-center items-center gap-12 flex-wrap reverse">
            <div>
              <div className="flex justify-center gap-4 lg:mr-[-10rem] mr-[0]">
                <img src={Svet} className="w-[3rem] h-[3rem]" alt="Lest" />
                <p className="sm:text-[1.5rem] text-[1rem] sm:w-[30rem] w-[20rem]">
                  Чек-лист «Расчет суммы для старта бизнеса на маркетплейсах»
                </p>
              </div>
              <div className="flex justify-center gap-4 mt-8 lg:mr-[-10rem] mr-[0]">
                <img src={Lest} alt="svet" className="w-[3rem] h-[3rem]" />
                <p className="sm:text-[1.5rem] text-[1rem] sm:w-[30rem] w-[20rem]">
                  Гайд «10 фишек по продвижению товара, чтобы быть впереди
                  конкурентов»
                </p>
              </div>
              <p
                className="text-white sm:ml-[6rem] ml-[2.5rem] mt-12 w-[20rem] rounded-[0.5rem] h-[10vh] flex justify-center items-center text-[1.3rem] font-bold cursor-pointer"
                style={{
                  background: "linear-gradient(to right, #00aaff, #aa00ff)",
                  backgroundSize: "200% auto",
                  transition: "background-position 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundPosition = "0%";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundPosition = "100%";
                }}
                onClick={() =>
                  formatRef.current &&
                  formatRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                КУПИТЬ БИЛЕТ
              </p>
            </div>
            <div>
              <img src={BookImage} alt="book" className="w-[40rem] img  " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
