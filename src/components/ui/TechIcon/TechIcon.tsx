import { Icon, type IconName } from '../Icon';

import styles from './TechIcon.module.scss';

type Props = {
  icon: IconName;
};

export function TechIcon({ icon }: Props) {
  return (
    <span className={styles.badge} aria-hidden>
      <Icon name={icon} size={13} className={styles.icon} />
    </span>
  );
}
