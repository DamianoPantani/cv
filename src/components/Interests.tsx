import { Heart } from "@assets/svg";

import { cv } from "../cvData";

import { ContentSection } from "./ContentSection";
import styles from "./Interests.module.scss";

export const Interests = () => (
  <ContentSection Icon={Heart} title="Interests" variant="dark">
    <ul className={styles.interests}>
      {cv.interests.map(({ icon: Icon, name: title }) => (
        <li key={title}>
          <Icon />
          <span>{title}</span>
        </li>
      ))}
    </ul>
  </ContentSection>
);
