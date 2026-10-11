import { PropsWithChildren } from "react";

import { Briefcase } from "@assets/svg";

import { cv } from "../cvData";

import { ContentSection } from "./ContentSection";
import styles from "./Experience.module.scss";

type JobProps = {
  company: string;
  date: string;
  title: string;
};

export const Experience = () => (
  <ContentSection Icon={Briefcase} title="Experience">
    <ul className={styles.timeline}>
      {cv.experience.map(({ company, position, projects, timeframe }) => (
        <Job key={company} company={company} date={timeframe} title={position}>
          {projects.map(({ description, link }, i) => (
            <Project key={i}>
              <span>{description}</span>
              {link ? (
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              ) : null}
            </Project>
          ))}
        </Job>
      ))}
    </ul>
  </ContentSection>
);

const Job = ({
  company,
  date,
  title,
  children,
}: PropsWithChildren<JobProps>) => (
  <li className={styles.job}>
    <div className={styles.jobInfo}>
      <h2>{title}</h2>
      <strong>{company}</strong>
      <div className={styles.date}>{date}</div>
    </div>
    <ul className={styles.projects}>{children}</ul>
  </li>
);

const Project = ({ children }: PropsWithChildren) => (
  <li className={styles.project}>{children}</li>
);
