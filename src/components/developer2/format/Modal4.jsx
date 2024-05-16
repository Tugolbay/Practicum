import React from "react";
import { XIcon } from "../../../assets";

export const Modal4 = ({ open4, setOpen4 }) => {
  if (!open4) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center  bg-[#000] bg-opacity-75 bg-opacity-75 z-[999]">
      <XIcon
        fill="white"
        onClick={() => setOpen4(false)}
        className="cursor-pointer flex flex-end fixed top-4 right-4"
      />
      <div className="bg-[#150935] p-6 rounded-lg shadow-lg h-[80vh] w-[60rem] flex flex-col items-center ">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold text-white mb-4">
            Оформление заказа
          </h2>
        </div>
        <p className="text-white mb-4">
          Я на практикуме - тариф VIP 15 000 руб.
        </p>
        <input
          className="hover:text-[1.2rem] mt-4 mb-12  hover:placeholder:text-white duration-200 border-0 bg-transparent outline-none w-[17rem] hover:w-[25rem] text-center text-white border-b-2 hover:border-[yellow]  hover:border-b-3 cursor-pointer"
          type="text"
          placeholder="Введите ваше имя"
        />
        <input
          className="hover:text-[1.2rem] mt-4 mb-12  hover:placeholder:text-white duration-200 border-0 bg-transparent outline-none w-[17rem] hover:w-[25rem] text-center text-white border-b-2 hover:border-[yellow]  hover:border-b-3 cursor-pointer"
          type="text"
          placeholder="Введите ваш email"
        />
        <input
          className="hover:text-[1.2rem] mt-4 mb-12  hover:placeholder:text-white duration-200 border-0 bg-transparent outline-none w-[17rem] hover:w-[25rem] text-center text-white border-b-2 hover:border-[yellow]  hover:border-b-3 cursor-pointer"
          type="text"
          placeholder="Введите ваш телефон"
        />
        <div className="flex justify-center items-center w-[13rem] h-[7vh] rounded-[0.5rem] border-2 border-[white] cursor-pointer hover:bg-gradient-to-r from-[blue] to-pink-500">
          <p className="text-white">Записаться</p>
        </div>

        <div className="flex mt-[3rem] w-[20rem]  ">
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
