import { avatar } from "@assets/img";

import { cv } from "../cvData";

import styles from "./Header.module.scss";

export const Header = () => (
  <>
    <h1>{cv.heading.fullName}</h1>
    <h2>{cv.heading.position}</h2>
    <img src={avatar} alt="avatar" className={styles.avatar} />
  </>
);
