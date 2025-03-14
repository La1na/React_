import React from "react";
import styles from "./Contacts.module.css";
import snapchatLogo from "../../assets/snapchat.svg";
import facebookLogo from "../../assets/facebook.svg";
import xLogo from "../../assets/x.png";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contactInfo}>
        <h1>Контакты</h1>
        <ul>
          <li>8 800 000 00 00</li>
          <li>email@example@gmail.com</li>
        </ul>
        <form className={styles.contactForm}>
          <input type="email" placeholder="Ваш email" required />
          <input type="text" placeholder="Ваше имя" required />
          <textarea placeholder="Введите сообщение" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
      <div className={styles.socialLinks}>
        <h2>Найдите нас:</h2>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={snapchatLogo} alt="Snapchat" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <img src={xLogo} alt="X" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
