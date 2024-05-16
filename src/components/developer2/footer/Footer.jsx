import React from "react";
import { Merkatus, Phone, Telegram } from "../../../assets";

export const Footer = ({ footerRef }) => {
  return (
    <div
      ref={footerRef}
      className="flex justify-center gap-[8rem] h-[50vh] flex-wrap"
    >
      <div className="flex flex-col gap-4">
        <Merkatus />
        <div className="text-white">
          <p>ООО "МЕРКАТУС"</p>
          <p>ИНН: 9723158300,</p>
          <p>ОГРН: 1227700373768.</p>
        </div>
        <div className="text-white">
          <a
            href="https://merkatys.ru/tech?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
            className="block underline"
          >
            Техническая инструкция
          </a>
          <a
            className="underline"
            href="https://merkatys.ru/doc?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          >
            Документация
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <a
          href="https://t.me/leoshevchenko_bot?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          className="flex items-center justify-start border-2 border-[white] rounded-[0.5rem] pl-3 py-3 w-[14rem] gap-4"
        >
          <Telegram />
          <p className="text-white font-bold">Служба заботы</p>
        </a>
        <a
          href="https://t.me/merkatus_partners_bot?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          className="flex items-center justify-start border-2 border-[white] rounded-[0.5rem] pl-3 py-3 w-[14rem] gap-4"
        >
          <Telegram />
          <p className="text-white font-bold">Сотрудничество</p>
        </a>
        <div className="flex gap-4 items-center mt-8">
          <Phone fill="white" />
          <p className="text-white">8 800 700-13-52</p>
        </div>
      </div>
      <div className="flex flex-col gap-20">
        <div>
          <a
            className="block  text-white underline"
            href="https://merkatys.ru/ld-oferta?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          >
            Лицензионный договор оферты
          </a>
          <a
            className="block  text-white underline"
            href="https://merkatys.ru/agreement-oferta?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          >
            Договор оферты
          </a>
          <a
            className="block  text-white underline"
            href="https://merkatys.ru/partner?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          >
            Соглашение об участии в партнерской программе
          </a>
          <a
            className="block  text-white underline"
            href="https://merkatys.ru/policy?utm_source=Inst&utm_medium=praktikum&utm_campaign=bio_Leo&utm_content=2304&fbclid=PAZXh0bgNhZW0CMTEAAaZ4vvZaJx2vUtlbjJH-fv2Wam1rmZ5x3YKdD0yX-MzNb-mU7d9DcUynF1c_aem_ARDOApKPQvw67Nk-62oBOaE8OX2ZjU78F9aKD0AeG4XQivlnfWO8Vr5c7jZMZk-afSZ3itLDoQaNFjCujgcaCmQ-"
          >
            Политика обработки персональных данных
          </a>
        </div>
        <div className="w-[24rem] text-[yellow]">
          2024. Любое использование либо копирование материалов или подборки
          материалов сайта, элементов дизайна и оформления допускается лишь с
          разрешения правообладателя.
        </div>
      </div>
    </div>
  );
};
