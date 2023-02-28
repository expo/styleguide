import * as StyleguideIcons from '@expo/styleguide-icons';

export type StyleguideIconNames = keyof typeof StyleguideIcons;

type Props = {
  name: StyleguideIconNames;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function Icon({ name, ...rest }: Props) {
  if (StyleguideIcons[name]) {
    const _Icon = StyleguideIcons[name];
    return <_Icon {...rest} />;
  }

  return null;
}
