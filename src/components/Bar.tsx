import cx from "classnames";

import styles from "./Bar.module.scss";

type Props = {
  variant?: "dark" | "light";
  width: number;
};

export const Bar = ({ width, variant = "light" }: Props) => (
  <div
    className={cx(styles.bar, styles[variant])}
    // @ts-expect-error `CSSProperties` doesn't support --variables
    style={{ "--width": `${width}%` }}
  />
);
