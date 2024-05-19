import React, { useEffect, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

export const Rate = () => {
  const [inp, setInp] = useState("");
  const [inp2, setInp2] = useState("");
  const [inp3, setInp3] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_56tgup8",
        "template_9hvaval",
        e.target,
        "-max2LpLG2rH-A3o7"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    alert("Ваша заяка отправлена");

    setInp("");
    setInp2("");
    setInp3("");
  };
  return (
    <Container onSubmit={handleSubmit}>
      <Block>
        <h2 data-aos="fade-right">НЕ МОЖЕТЕ ВЫБРАТЬ ТАРИФ?</h2>
        <p data-aos="fade-right">
          Оставьте заявку и получите подробную презентацию программы с
          консультацией специалиста
        </p>
      </Block>

      <Block2>
        <input
          data-aos="fade-right"
          value={inp2}
          onChange={(e) => setInp2(e.target.value)}
          name="name"
          className="input"
          type="text"
          placeholder="Ваше имя"
          required
        />
        <input
          data-aos="fade-right"
          value={inp3}
          onChange={(e) => setInp3(e.target.value)}
          name="number"
          className="input"
          type="number"
          placeholder="+7 (999) 999-99-99"
          required
        />
        <input
          data-aos="fade-right"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          name="email"
          className="input"
          type="email"
          placeholder="email"
          required
        />

        <Checkbox data-aos="fade-right">
          <input type="checkbox" />
          <p>
            Даю согласие на <a href="/">обработку персональных данных</a>
          </p>
        </Checkbox>

        <div>
          <Button type="submit" data-aos="fade-up">
            ЗАБРОНИРОВАТЬ МЕСТО
          </Button>
        </div>

        <Desc data-aos="fade-right">
          Нажимая на кнопку, вы соглашаетесь с договором офферты
        </Desc>
      </Block2>
    </Container>
  );
};

const Container = styled("form")`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8rem;
  margin-top: 10rem;
  padding: 0 5rem 0 5rem;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 530px) {
    gap: 4rem;
    padding: 0 2rem 0 2rem;
  }
`;

const Block = styled("div")`
  h2 {
    color: white;
    font-size: 50px;
    font-weight: 600;
    width: 35rem;
  }

  p {
    margin-top: 1rem;
    width: 30rem;
    font-size: 25px;
    color: white;
  }

  @media (max-width: 599px) {
    h2 {
      width: 100%;
      font-size: 40px;
    }

    p {
      width: 100%;
      font-size: 20px;
    }
  }

  @media (max-width: 490px) {
    h2 {
      font-size: 32px;
    }
  }
`;

const Block2 = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem;
  gap: 2rem;
  width: 35vw;
  border-radius: 20px;
  background-color: #3d3c3c;
  .input {
    width: 29vw;
    height: 3rem;
    border-radius: 15px;
    padding-left: 1rem;
  }

  @media (max-width: 1100px) {
    width: 35rem;

    .input {
      width: 25rem;
    }
  }

  @media (max-width: 650px) {
    width: 28rem;

    .input {
      width: 20rem;
    }
  }

  @media (max-width: 490px) {
    width: 23rem;

    .input {
      border-radius: 7px;
      width: 15rem;
      height: 2rem;
    }
  }

  @media (max-width: 430px) {
    width: 18rem;

    .input {
      width: 12rem;
      height: 2rem;
      border-radius: 8px;
    }
  }
`;

const Button = styled("button")`
  background: linear-gradient(45deg, #d2001a, #7462ff, #f48e21, #23d5ad);
  background-size: 300% 300%;
  animation: color 12s ease-in-out infinite;
  border-radius: 10px;
  padding: 1rem 3rem 1rem 3rem;
  border: none;
  font-size: 20px;
  color: white;
  cursor: pointer;

  @media (max-width: 650px) {
    font-size: 12px;
    width: 100%;
  }

  @media (max-width: 430px) {
    padding: 0;
    width: 12rem;
    height: 2.5rem;
  }
`;

const Checkbox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  a {
    color: #006aff;
  }

  input {
    width: 1.2rem;
    height: 1.2rem;
  }

  @media (max-width: 650px) {
    p {
      font-size: 12px;
    }
  }

  @media (max-width: 490px) {
    p {
      width: 15rem;
    }
  }

  @media (max-width: 430px) {
    margin-left: 4.5rem;
  }
`;

const Desc = styled("p")`
  color: white;
  font-size: 13px;

  @media (max-width: 650px) {
    font-size: 11px;
  }
`;

// import React, { useState } from "react";
// import styled from "styled-components";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";
// import { FaArrowLeft } from "react-icons/fa6";

// export const Rate = () => {
//   const [value, setValue] = useState("");
//   const [value2, setValue2] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (value === "olegova@yandex.ru" && value2 === "olegova365") {
//       window.location.href = "/admin-page-365";
//     } else if (value && value2) {
//       window.location.href = "/";
//     } else {
//       alert("Please fill in all fields");
//     }
//   };

//   return (
//     <div>
//       <Header>
//         <LinkStyle
//           to="/"
//           style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
//         >
//           <FaArrowLeft />
//           <div>Назад</div>
//         </LinkStyle>
//       </Header>
//       <Nav>
//         <div
//           className="container d-flex justify-content-center w-100"
//           style={{ marginTop: "2rem" }}
//         >
//           <div className="login">
//             <h2 className="mb-3">Login form</h2>
//             <form className="needs-validation" onSubmit={handleSubmit}>
//               <div className="form-group mb-2 was-validated">
//                 <label htmlFor="email" className="form-label">
//                   Email
//                 </label>
//                 <input
//                   value={value}
//                   onChange={(e) => setValue(e.target.value)}
//                   className="form-control"
//                   type="email"
//                   required
//                 />
//                 <div className="invalid-feedback">Please Enter your email</div>
//               </div>

//               <div className="form-group mb-2 was-validated">
//                 <label htmlFor="password" className="form-label">
//                   Password
//                 </label>
//                 <input
//                   value={value2}
//                   onChange={(e) => setValue2(e.target.value)}
//                   type="password"
//                   className="form-control"
//                   required
//                 />
//                 <div className="invalid-feedback">
//                   Please Enter your password
//                 </div>
//               </div>

//               <div className="form-group mb-2 was-validated">
//                 <input type="checkbox" className="form-check-input" />
//                 <label
//                   htmlFor="checkbox"
//                   className="form-check-label"
//                   style={{ marginLeft: "0.5rem" }}
//                 >
//                   Remember me
//                 </label>
//               </div>

//               <button
//                 type="submit"
//                 className="btn btn-success block mt-2 form-check w-100"
//               >
//                 Войти
//               </button>
//             </form>
//           </div>
//         </div>
//       </Nav>
//     </div>
//   );
// };

// const Header = styled("div")`
//   display: flex;
//   align-items: center;
//   padding-left: 5rem;
//   width: 100%;
//   height: 10vh;
//   background-color: #5f5e5e;
// `;

// const Nav = styled("div")`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   height: 20vh;
//   background-color: #383636;
// `;

// const LinkStyle = styled(Link)`
//   color: white;
//   text-decoration: none;
// `;
