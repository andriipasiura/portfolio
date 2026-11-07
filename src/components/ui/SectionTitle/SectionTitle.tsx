import styles from './SectionTitle.module.scss';

type Props = {
  id: string;
  children: string;
};

export function SectionTitle({ id, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.line} aria-hidden />
      <h2 id={id} className={styles.title}>
        <span className={styles.bracket} aria-hidden>
          &lt;
        </span>{' '}
        {children}{' '}
        <span className={styles.bracket} aria-hidden>
          /&gt;
        </span>
      </h2>
      <span className={styles.line} aria-hidden />
    </div>
  );
}
