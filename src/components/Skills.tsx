import { useMemo } from "react";

import { Lightbulb } from "@assets/svg";

import { cv } from "../cvData";

import { Bar } from "./Bar";
import { ContentSection } from "./ContentSection";
import styles from "./Skills.module.scss";

type SkillProps = ProgressProps & {
  level: string;
  title: string;
};

type ProgressProps = {
  progress: number;
};

const barsCount = 5;

const thresholds = cv.skillsThresholds.toSorted(
  (t1, t2) => t2.level - t1.level
);
const skills = cv.skills
  .toSorted((s1, s2) => s2.level - s1.level)
  .map((s) => ({
    ...s,
    levelName: thresholds.find((t) => t.level <= s.level)?.name,
  }));

export const Skills = () => (
  <ContentSection Icon={Lightbulb} variant="dark" title="Skills">
    <ul className={styles.content}>
      {skills.map(({ level, levelName, name: skillName }) => (
        <Skill
          key={skillName}
          title={skillName}
          level={levelName || "Novice"}
          progress={level}
        />
      ))}
    </ul>
  </ContentSection>
);

const Skill = ({ level, progress, title }: SkillProps) => (
  <li>
    <span>{title}</span>

    <div className={styles.skillLevel}>
      <span className={styles.levelName}>{level}</span>
      <SkillProgress progress={progress} />
    </div>
  </li>
);

const SkillProgress = ({ progress }: ProgressProps) => {
  const bars = useMemo(
    () =>
      Array(barsCount)
        .fill(null)
        .map((_, i) => {
          const prevProgress = (i * 100) / barsCount;
          const thisProgress = (progress - prevProgress) * barsCount;

          return Math.min(100, Math.max(0, thisProgress));
        }),
    [progress]
  );

  return (
    <div className={styles.progress}>
      {bars.map((b, i) => (
        <Bar key={i} width={b} variant="dark" />
      ))}
    </div>
  );
};
