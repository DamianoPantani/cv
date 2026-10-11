import { PropsWithChildren } from "react";

import { Phone } from "@assets/svg";

import { cv } from "../cvData";

import styles from "./Contact.module.scss";
import { ContentSection } from "./ContentSection";

type ItemProps = {
  header: string;
};

export const Contact = () => (
  <ContentSection Icon={Phone} variant="dark" title="Contact">
    <ul className={styles.content}>
      <ContactItem header="Email">{cv.contact.email}</ContactItem>
      <ContactItem header="Phone">{cv.contact.phone}</ContactItem>
    </ul>
  </ContentSection>
);

const ContactItem = ({ children, header }: PropsWithChildren<ItemProps>) => (
  <li className={styles.contactItem}>
    <span className={styles.header}>{header}</span>
    <span>{children}</span>
  </li>
);
