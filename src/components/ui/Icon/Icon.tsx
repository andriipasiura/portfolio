import { type IconName, resolveIcon } from './icons';

type Props = {
  name: IconName;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 20, className }: Props) {
  const { viewBox, body } = resolveIcon(name);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      width={size}
      height={size}
      className={className}
      aria-hidden
      focusable="false"
      dangerouslySetInnerHTML={{ __html: body }}
    />
  );
}
