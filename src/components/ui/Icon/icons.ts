import { icons as deviconPlain } from '@iconify-json/devicon-plain';
import { icons as lucide } from '@iconify-json/lucide';
import { icons as mdi } from '@iconify-json/mdi';
import { icons as simpleIcons } from '@iconify-json/simple-icons';
import { getIconData, iconToSVG, replaceIDs } from '@iconify/utils';

const SETS = {
  'simple-icons': simpleIcons,
  'devicon-plain': deviconPlain,
  lucide,
  mdi,
};

export type IconName = `${keyof typeof SETS}:${string}`;

export type ResolvedIcon = {
  viewBox: string;
  body: string;
};

export function resolveIcon(name: IconName): ResolvedIcon {
  const separator = name.indexOf(':');
  const prefix = name.slice(0, separator) as keyof typeof SETS;
  const data = getIconData(SETS[prefix], name.slice(separator + 1));
  if (!data) throw new Error(`Unknown icon "${name}"`);
  const { attributes, body } = iconToSVG(data);
  return {
    viewBox: attributes.viewBox,
    body: replaceIDs(body),
  };
}
