//============== React & Next ================
import React, { useState } from "react";
import styles from "./ContactMe.module.scss";
import Head from "next/head";
//============== images & icons ==============
//============== in components ===============
import Button from "components/Button/Button";
import Title from "components/Title/Title";
import client from "utils/AxiosInterceptor";
import { THEMES } from "utils/Constants";
//============== ex components ===============
import Swal from "sweetalert2";
//================= redux ====================
import { useSelector } from "react-redux";
//============================================
function ContactMe() {
  const theme = useSelector((state) => state.theme.type);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
    nameIsFill: false,
    emailIsFill: false,
    messageIsFill: false,
    nameErr: "",
    emailErr: "",
    messageErr: "",
  });
  const onChangeHandle = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const sendForm = (e) => {
    e.preventDefault();
    let hasErr = false;
    let errors = document.querySelectorAll(".error");
    errors.forEach((el) => {
      el.classList.add("shake");
    });
    setTimeout(() => {
      errors.forEach((el) => {
        el.classList.remove("shake");
      });
    }, 1200);
    if (inputs.name === "") {
      setInputs((prevState) => ({
        ...prevState,
        nameErr: "This field is required!",
      }));
      hasErr = true;
    } else {
      setInputs((prevState) => ({
        ...prevState,
        nameErr: "",
      }));
    }
    if (inputs.email === "") {
      setInputs((prevState) => ({
        ...prevState,
        emailErr: "This field is required!",
      }));
      hasErr = true;
    } else {
      setInputs((prevState) => ({
        ...prevState,
        emailErr: "",
      }));
    }
    if (inputs.message === "") {
      setInputs((prevState) => ({
        ...prevState,
        messageErr: "This field is required!",
      }));
      hasErr = true;
    } else {
      setInputs((prevState) => ({
        ...prevState,
        messageErr: "",
      }));
    }
    if (!hasErr) {
      e.target.disabled = true;
      e.target.style.cursor = "wait";
      const token = "2142005737:AAE7_yyXDyopPVEZT2d9dPUpyZYOyKdOUx0";
      const chatId = "1262429671"; // myPv chatId with bot
      const text = `👋🏻 Amir 👋🏻\nYou Have Messave from Your Porfolio 💪🏻\n✍🏼 Sender's Name is :${inputs.name}\n✉️ Sender's Email is : ${inputs.email}\n🧧 message : ${inputs.message} `;
      client
        .post(`https://api.telegram.org/bot${token}/sendMessage`, {
          chat_id: chatId,
          text: text,
        })
        .then(({ data }) => {
          //   {
          //     "ok": true,
          //     "result": {
          //         "message_id": 76,
          //         "from": {
          //             "id": 2142005737,
          //             "is_bot": true,
          //             "first_name": "MyPortfolio",
          //             "username": "AmirGoodarziPortfolio_bot"
          //         },
          //         "chat": {
          //             "id": 1262429671,
          //             "first_name": "Sektowr",
          //             "username": "Sektowr",
          //             "type": "private"
          //         },
          //         "date": 1653589934,
          //         "text": "👋🏻 Amir 👋🏻\n      \nYou Have Messave from Your Porfolio 💪🏻 \n      \n✍🏼 Sender's Name is :123 \n      \n✉️ Sender's Email is : 3123  \n      \n🧧 message : 123"
          //     }
          // }
          e.target.disabled = false;
          e.target.style.cursor = "pointer";
          if (data.ok) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Your message was successfully sent to me on Telegram.",
            });
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Error in send Message from Telegram server.",
            });
          }
        });
    }
  };
  const onBlurHandle = (e) => {
    if (e.target.value !== "") {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name + "IsFill"]: true,
        [e.target.name + "Err"]: "",
      }));
    } else {
      setInputs((prevState) => ({
        ...prevState,
        [e.target.name + "IsFill"]: false,
        [e.target.name + "Err"]: "This field is required!",
      }));
    }
  };
  return (
    <>
      <Head>
        <title>ContactMe</title>
      </Head>
      <div
        className={styles.wrapper}
        style={
          theme === THEMES.DARK
            ? { backgroundImage: "url(/assets/images/map.jpg)" }
            : { background: "var(--dark)" }
        }
      >
        <div
          className={styles.cContainer}
          style={
            theme === THEMES.DARK
              ? { background: "rgba(17, 17, 17, 0.5)" }
              : { background: "transparent" }
          }
        >
          <section className={styles.getInTocuh}>
            <Title
              back="Get in touch"
              front={{ normal: "Contact", bold: "Me" }}
            />
            <form className={`${styles.contactForm} ${styles.formRow}`}>
              <div className={`${styles.formField} ${styles.formCol} w-1/2`}>
                <input
                  id="name"
                  name="name"
                  className={`${styles.inputText} ${
                    inputs.nameIsFill ? styles.notEmpty : ""
                  } ${inputs.nameErr ? styles.err : ""}`}
                  value={inputs.name}
                  type="text"
                  onChange={onChangeHandle}
                  onBlur={onBlurHandle}
                  autoComplete="new-password"
                />
                <label className={styles.label} htmlFor="name">
                  Name
                </label>
                <p className="error absolute">{inputs.nameErr}</p>
              </div>
              <div className={`${styles.formField} ${styles.formCol} w-1/2`}>
                <input
                  id="email"
                  name="email"
                  className={`${styles.inputText} ${
                    inputs.emailIsFill ? styles.notEmpty : ""
                  }
                ${inputs.emailErr ? styles.err : ""}`}
                  value={inputs.email}
                  type="email"
                  onChange={onChangeHandle}
                  onBlur={onBlurHandle}
                  autoComplete="new-password"
                />
                <label className={styles.label} htmlFor="email">
                  Email
                </label>
                <p className="error absolute">{inputs.emailErr}</p>
              </div>
              <div className={`${styles.formField} ${styles.formCol} w-full`}>
                <input
                  id="message"
                  name="message"
                  className={`${styles.inputText} ${
                    inputs.messageIsFill ? styles.notEmpty : ""
                  }
                ${inputs.messageErr ? styles.err : ""}`}
                  value={inputs.message}
                  type="text"
                  onChange={onChangeHandle}
                  onBlur={onBlurHandle}
                  autoComplete="new-password"
                />
                <label className={styles.label} htmlFor="message">
                  Message
                </label>
                <p className="error absolute">{inputs.messageErr}</p>
              </div>
              <div
                className={`${styles.formField} ${styles.formCol} w-full text-center`}
              >
                <Button type="OUTLINE" onClick={sendForm} text="SEND MESSAGE" />
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
