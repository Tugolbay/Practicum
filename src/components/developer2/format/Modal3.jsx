import React from "react";
import { XIcon } from "../../../assets";

export const Modal3 = ({ open3, setOpen3 }) => {
  if (!open3) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center  bg-[#000] bg-opacity-75 bg-opacity-75 z-[999]">
      <XIcon
        fill="white"
        onClick={() => setOpen3(false)}
        className="cursor-pointer flex flex-end fixed top-4 right-4"
      />
      <div className="bg-[#150935] p-6 rounded-lg shadow-lg h-[80vh] w-[60rem] flex flex-col items-center ">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-white mb-4">
            Для покупки 2-х билетов на Практикум заполните форму
          </h2>
        </div>

        <input
          className="hover:text-[1.2rem] mt-4 mb-12  hover:placeholder:text-white duration-200 border-0 bg-transparent outline-none w-[20rem] hover:w-[27rem] text-center text-white border-b-2 hover:border-[yellow]  hover:border-b-3 cursor-pointer"
          type="text"
          placeholder="Введите ваше имя"
        />
        <input
          className="hover:text-[1.2rem] mt-4 mb-12  hover:placeholder:text-white duration-200 border-0 bg-transparent outline-none w-[20rem] hover:w-[27rem] text-center text-white border-b-2 hover:border-[yellow]  hover:border-b-3 cursor-pointer"
          type="text"
          placeholder="Введите ваш email"
        />
        <input
          className="hover:text-[1.2rem] mt-4 mb-12  hover:placeholder:text-white duration-200 border-0 bg-transparent outline-none w-[20rem] hover:w-[27rem] text-center text-white border-b-2 hover:border-[yellow]  hover:border-b-3 cursor-pointer"
          type="text"
          placeholder="Введите ваш телефон"
        />
        <div className="flex justify-center items-center w-[13rem] h-[7vh] rounded-[0.5rem] border-2 border-[white] cursor-pointer hover:bg-gradient-to-r from-[blue] to-pink-500">
          <p className="text-white">Отправить заявку</p>
        </div>
        <p className="text-[grey] w-[22rem] mt-8">
          Заполняя данную форму, вы даете согласие на обработку и хранение
          персональных данных.
        </p>

        <div className="flex mt-[3rem] w-[35rem]  ">
          <input type="checkbox" className="mr-2 " />
          <p className="text-white text-sm">
            Я согласен(а) с условиями{" "}
            <a
              href="https://merkatys.ru/policy"
              className="text-blue hover:text-[blue] hover:underline"
            >
              Политики конфиденциальности, хранения и обработки персональных
              данных
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
