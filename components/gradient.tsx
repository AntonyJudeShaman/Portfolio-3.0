import styles from "@/app/page.module.css"

export function Gradient({
    conic,
    className,
    small,
  }: {
    small?: boolean;
    conic?: boolean;
    className?: string;
  }): JSX.Element {
    return (
      <span
        className={[
          styles.gradient,
          conic ? styles.glowConic : undefined,
          small ? styles.gradientSmall : styles.gradientLarge,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
    );
  }
  
export function Gradient2({
    conic,
    className,
    small,
  }: {
    small?: boolean;
    conic?: boolean;
    className?: string;
  }): JSX.Element {
    return (
      <span
        className={[
          styles.gradient,
          conic ? styles.glowConic2 : undefined,
          small ? styles.gradientSmall : styles.gradientLarge,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
    );
  }

  export function Gradient3({
    conic,
    className,
    small,
  }: {
    small?: boolean;
    conic?: boolean;
    className?: string;
  }): JSX.Element {
    return (
      <span
        className={[
          styles.gradient,
          conic ? styles.glowConic3 : undefined,
          small ? styles.gradientSmall : styles.gradientLarge,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
    );
  }

  export function Gradient4({
    conic,
    className,
    small,
  }: {
    small?: boolean;
    conic?: boolean;
    className?: string;
  }): JSX.Element {
    return (
      <span
        className={[
          styles.gradient,
          conic ? styles.glowConic4 : undefined,
          small ? styles.gradientSmall : styles.gradientLarge,
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
    );
  }