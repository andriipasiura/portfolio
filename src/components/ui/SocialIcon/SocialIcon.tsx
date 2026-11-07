import { type IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa6';

import { type Social } from '@/content';

const ICONS: Record<Social['network'], IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  telegram: FaTelegram,
};

type Props = {
  network: Social['network'];
  size?: number;
};

export function SocialIcon({ network, size = 20 }: Props) {
  const Icon = ICONS[network];
  return <Icon size={size} aria-hidden />;
}
