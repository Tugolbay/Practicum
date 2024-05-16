import React, { useState } from "react";
import {
  Dzen,
  Instagram,
  PlusIcon,
  Telegram,
  Vk,
  XIcon,
  YouTube,
} from "../../../assets";
import './Answer.css'

export const Answers = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="w-[75%] h-[110vh] hei">
          <p className="text-white md:text-[3rem] text-[1.5rem] font-bold mb-8">
            ОТВЕТЫ НА ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </p>
          {faqData.map((faq, index) => (
            <div key={index}>
              <div
                className="flex justify-between items-center border-t-2 border-[white] cursor-pointer h-[10vh]"
                onClick={() => toggleExpand(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <p className="md:text-[1.5rem] text-[1rem] text-[white]">
                  {faq.question}
                </p>
                {expandedIndex === index ? (
                  <XIcon fill="#00BFFF" className="icons" />
                ) : (
                  <PlusIcon
                    fill={hoveredIndex === index ? "#00BFFF" : "#8A2BE2"}
                    className="icons"
                  />
                )}
              </div>
              <div
                className={`transition-all duration-1000 overflow-hidden ${
                  expandedIndex === index ? "max-h-[200px]" : "max-h-0"
                }`}
              >
                <p className="md:text-[1rem] text-[0.8rem] pt-4 pb-10 text-[white]">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t-2 border-[white] "></div>
        </div>
      </div>
      <div className="h-[55vh]">
        <p className="text-white md:text-[4rem] text-[2rem] font-bold text-center">
          Подписывайтесь на наши соцсети
        </p>
        <div className="flex justify-center gap-4 mt-12">
          <a
            href="https://www.instagram.com/leoshev4enko/?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
            className="w-[13rem] h-[8vh] bg-[#c30593] rounded-[0.5rem] flex justify-center items-center"
          >
            <Instagram />
          </a>

          <a
            href="https://t.me/namarketplacewithleo?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
            className="w-[13rem] h-[8vh] bg-[#00BFFF] rounded-[0.5rem] flex justify-center items-center"
          >
            <Telegram />
          </a>
          <a
            href="https://vk.com/leoshev4enkoschool?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
            className="w-[13rem] h-[8vh] bg-[#354ad3] rounded-[0.5rem] flex justify-center items-center"
          >
            <Vk />
          </a>
        </div>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://dzen.ru/leoshev44enko?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
            className="w-[20rem] h-[8vh] bg-[#000000] rounded-[0.5rem] flex justify-center items-center"
          >
            <Dzen />
          </a>
          <a
            href="https://www.youtube.com/channel/UCAy8eLRvaazCC5erOqAvIgw?ybp=-gEHYmlvX0xlbw%253D%253D"
            className="w-[20rem] h-[8vh] bg-[red] rounded-[0.5rem] flex justify-center items-center"
          >
            <YouTube />
          </a>
        </div>
        <div className="flex justify-center mt-12 text-white">
          <p>
            *«Facebook/Instagram — проект Meta Platforms Inc., деятельность
            которой в России запрещена»
          </p>
        </div>
      </div>
    </>
  );
};

const faqData = [
  {
    question: "Будет ли запись Практикума?",
    answer: "Да. Запись будет в вашем личнем кабинете на нашей платформе.",
  },
  {
    question: "Для выхода на маркетплейсы нужен большой стартовый бюджет?",
    answer:
      "Стартовать на маркетплейсах можно с бюджетоми 50 000 руб. Главное научиться минимизировать риски, чтобы не потерять деньги на старте. На Практикуме за 2 дня вы пройдете путь селлера от выбора товара до создания карточки и убедитесь, что для старта не нужны большие вложения",
  },
  {
    question: "Я оплатил(а). Что дальше?",
    answer:
      "В течение суток после оплаты на почту, которую вы указали при регистрации, придет письмо с информацией. Если вы не можете найти письмо в папке «Входящие», проверьте папки «Спам» или «Промо».",
  },
  {
    question: "Чем ваше обучение лучше других?",
    answer:
      "Лео Шевченко — действующий селлер с 15-летним опытом, который обучался всему сам. Поэтому обо всех изменениях на маркетплейсах он узнает в числе первых и дает только качественную информацию. А собственная платформа помогает нашим ученикам быстрее адаптироваться к процессу обучения, потому что все нужные материалы собраны в одном месте.",
  },
  {
    question: "Что взять с собой на Практикум?",
    answer:
      "Обязательно возьми с собой заряженный ноутбук, потому что мы будем на практике разбирать работу с таблицами. И не забудь про хорошее настроение!",
  },
  {
    question: "Будут ли на Практикуме практические задания?",
    answer:
      "Конечно! 1-й день практикума больше теоретический. Во 2-й день вас ждет командная бизнес-игра, в которой вы сможете проявить себя как настоящий селлер, проработать свои навыки и применить полученные инструменты и первого дня.",
  },
  {
    question: "Если я не торгую на маркетплейсе, мне нужно идти на Практикум?",
    answer:
      "Практикум - это идеальное место, где вы можете начать свой путь селлера. А также Практикум однозначно стоит посетить, если вы - собственник производства, менеджер маркетплейсов, начинающий или действующий селлер и человек, который ищет новое окружение единомышленников.",
  },
];
