import React, { useEffect, useState } from "react";
import "react-intl-tel-input/dist/main.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Photo from "./image_22_1.png";
import Stars from "./wepik-export-2024020.png";
import Photo1 from "./_.png";
import Photo2 from "./_ (1).png";
import Photo3 from "./_ (2).png";
import Photo4 from "./_ (3).png";
import Photo5 from "./_ (4).png";
import { StrelkaIcon } from "../../../assets";
import "./Tarif.css";
import { useNavigate } from "react-router-dom";

export const Tarif = ({ tarifRef }) => {
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    date: new Date().toString(),
  });

  const getData = async () => {
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/9c66abfd-f749-400d-8376-37a3c93b2711"
      );
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleReservation = () => {
    const errors = {};

    if (!data.name) {
      errors.name = true;
    }
    if (!data.phone) {
      errors.phoneNumber = true;
    }
    if (!data.email) {
      errors.email = true;
    }
    if (!consent) {
      errors.consent = true;
    }

    if (Object.keys(errors).length === 0) {
      const reservationData = {
        consent,
      };
      console.log("Reservation Data:", reservationData);

      setConsent(false);
    } else {
      setErrors(errors);
    }
  };

  const history = useNavigate();
  const handleChange = (phone) => {
    setData({ ...data, phone });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://sheet.best/api/sheets/9c66abfd-f749-400d-8376-37a3c93b2711",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      if (res.ok) {
        console.log("Data submitted successfully!");
        setData({
          name: "",
          email: "",
          phone: "",
          date: new Date().toString(),
        });
        setConsent(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div ref={tarifRef} className="w-full h-[230vh] mt-20 razmer">
      <div className="flex justify-center items-center gap-20 flex-wrap">
        <div className="w-[28rem]">
          <p className="text-white text-[3rem] font-bold">
            НЕ МОЖЕТЕ ВЫБРАТЬ ТАРИФ?
          </p>
          <p className="text-white text-[1.3rem]">
            Оставьте заявку и получите подробную презентацию программы с
            консультацией специалиста
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-[32rem] h-[65vh] bg-[#282727] rounded-[1rem] flex flex-col gap-4 items-center p-12"
        >
          <input
            name="name"
            type="text"
            placeholder="Иван Иванов"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            className={`w-[90%] p-[1rem] rounded-[0.7rem] outline-none ${
              errors.name ? "border-red-500" : ""
            }`}
          />
          <PhoneInput
            country={"in"}
            className="ml-10"
            value={data.phone}
            onChange={handleChange}
            inputStyle={{
              width: "90%",
              height: "7vh",
              borderRadius: "0.7rem",
              border: errors.phoneNumber ? "1px solid red" : "",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            className={`w-[90%] p-[1rem] rounded-[0.7rem] outline-none ${
              errors.email ? "border-red-500" : ""
            }`}
            name="Email"
          />
          <div className="">
            <div className="flex justify-center gap-2">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                className="cursor-pointer w-[1.3rem] bg-[grey]"
              />
              <p className="text-white md:text-[0.9rem] text-[0.7rem]">
                Даю согласие на{" "}
                <span className="underline text-[#58aefe]">
                  обработку персональных данных
                </span>
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                onClick={handleReservation}
                className="text-white mt-8 w-[80%] rounded-[0.5rem] h-[8vh] flex justify-center items-center md:text-[1.3rem] text-[1rem] font-bold cursor-pointer hover:text-[#4fa8cb] "
                style={{
                  background: "linear-gradient(to right, #00aaff, #690e97)",
                  backgroundSize: "200% auto",
                  transition: "background-position 0.3s",
                }}
              >
                ЗАБРОНИРОВАТЬ МЕСТО
              </button>
            </div>

            <p className="text-white md:text-[0.8rem] text-[0.6rem] mt-8">
              Нажимая на кнопку, вы соглашаетесь с договором офферты
            </p>
          </div>
        </form>
      </div>
      <div className="flex justify-center gap-20 items-center mt-20 flex-wrap">
        <img className="w-[35rem] h-[50vh]" src={Photo} alt="" />
        <div>
          <p className="text-white text-[2rem] w-[70%] font-bold ">
            ХОТИТЕ СТАТЬ ПАРТНЁРОМ МЕРКАТУС?
          </p>
          <p className="text-white text-[1.3rem] w-[80%]">
            Оставьте заявку, с вами свяжется наша команда и все расскажет
          </p>
          <p
            className="text-white mt-6 rounded-[0.5rem] h-[10vh] flex w-[60%] justify-center items-center text-[1.3rem] font-bold cursor-pointer"
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
          >
            ХОЧУ СТАТЬ ПАРТНЕРОМ
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-20 mt-20 flex-wrap">
        <div className="flex flex-col gap-4 w-[35rem] ">
          <p className="text-[3rem] font-bold  w-[30vw] text-white ">
            ТОП-5 лучших персональных менеджеров
          </p>
          <p className="text-white text-[1.3rem] w-[28rem]">
            Если хотите уточнить данные сотрудника и удостовериться в том, что
            он работает в нашей компании – обратитесь в
            <span className="text-orange"> службу заботы.</span>
          </p>
        </div>
        <div className="bg-[#0c0c1d] w-[30rem] h-[45vh] rounded-[1.5rem] grid grid-cols-3 p-4">
          <div className="flex flex-col justify-center items-center">
            <p className="text-[yellow] text-[2rem]">ТОП-5</p>
            <img className="w-[7rem] " src={Stars} alt="" />
          </div>
          <img className="w-[8rem] rounded-[1rem]" src={Photo1} alt="" />
          <img className="w-[8rem] rounded-[1rem]" src={Photo2} alt="" />
          <img className="w-[8rem] rounded-[1rem]" src={Photo3} alt="" />
          <img className="w-[8rem] rounded-[1rem]" src={Photo4} alt="" />
          <img className="w-[8rem] rounded-[1rem]" src={Photo5} alt="" />
        </div>
      </div>
      <div className="sm:w-[35rem] w-[20rem] bg-orange rounded-[1.5rem] md:ml-[14.5rem] ml-[2rem] mt-8 p-4">
        <p className="text-white sm:text-[1.2rem] text-[1rem]">
          Важно! Мы принимаем переводы только по выставленным счетам с ООО
          "Меркатус". Если вас просят перевести деньги по номеру телефона или на
          карту физического лица – это мошенники.
        </p>
        <div className="flex p-4 mt-2">
          <p className="text-white sm:text-[1rem] text-[0.7rem] font-bold border-[2px] border-[white] rounded-[2rem] sm:px-4 px-8 py-2 cursor-pointer ">
            Как это выглядит?
          </p>
          <StrelkaIcon className="mt-8" />
          <p className="text-[0.9rem] mt-2">Нажмите чтобы посмотреть</p>
        </div>
      </div>
    </div>
  );
};
