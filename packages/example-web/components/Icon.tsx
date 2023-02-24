import * as StyleguideIcons from '@expo/styleguide-icons';

export type IconNames = keyof typeof StyleguideIcons;
export type IconSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Props = {
  name: IconNames;
  className?: string;
  size?: IconSizes;
};

export function Icon({ name, ...rest }: Props) {
  if (StyleguideIcons[name]) {
    const _Icon = StyleguideIcons[name];
    return <_Icon {...rest} />;
  }
  return null;
}
