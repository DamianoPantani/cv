import { ComponentProps, PropsWithChildren } from "react";

import { Bar } from "./Bar";
import styles from "./ContentSection.module.scss";

type Props = TitleProps & {
  title: string;
};

type TitleProps = {
  Icon: SVGIcon;
  variant?: ComponentProps<typeof Bar>["variant"];
};

export const ContentSection = ({
  Icon,
  title,
  variant,
  children,
}: PropsWithChildren<Props>) => (
  <section className={styles.contentSection} aria-label={title}>
    <SectionTitle Icon={Icon} variant={variant}>
      {title}
    </SectionTitle>
    <div className={styles.content}>{children}</div>
  </section>
);

export const SectionTitle = ({
  children,
  Icon,
  variant,
}: PropsWithChildren<TitleProps>) => (
  <div className={styles.title}>
    <div className={styles.icon}>
      <Icon />
    </div>
    <div className={styles.text}>
      <h1>{children}</h1>
      <Bar width={20} variant={variant} />
    </div>
  </div>
);
