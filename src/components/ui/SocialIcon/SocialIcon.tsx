import { type Social } from '@/content';

import { Icon, type IconName } from '../Icon';

const ICONS: Record<Social['network'], IconName> = {
  linkedin: 'mdi:linkedin',
  github: 'simple-icons:github',
  telegram: 'simple-icons:telegram',
};

type Props = {
  network: Social['network'];
  size?: number;
};

export function SocialIcon({ network, size = 20 }: Props) {
  return <Icon name={ICONS[network]} size={size} />;
}
