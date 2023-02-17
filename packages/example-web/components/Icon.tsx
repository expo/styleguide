import * as StyleguideIcons from "@expo/styleguide-icons";

type Props = {
  name: keyof typeof StyleguideIcons;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function Icon(props: Props) {
  const { name, ...rest } = props;
  if (StyleguideIcons[props.name]) {
    const _Icon = StyleguideIcons[props.name] as any;
    return <_Icon {...rest} />;
  }

  return null
}