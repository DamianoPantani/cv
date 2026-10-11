import { GraduationCap } from "@assets/svg";
import { Fragment } from "react/jsx-runtime";

import { cv } from "../cvData";

import { ContentSection } from "./ContentSection";

export const Education = () => (
  <ContentSection Icon={GraduationCap} title="Education">
    {cv.education.map(({ degree, faculty, school, specialization }) => (
      <Fragment key={school}>
        <h2>{school}</h2>
        <strong>{faculty}</strong>
        <span>{specialization}</span>
        <span>{degree}</span>
      </Fragment>
    ))}
  </ContentSection>
);
