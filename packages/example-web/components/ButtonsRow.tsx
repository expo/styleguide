import { Button, ButtonProps } from '@expo/styleguide';
import { PaletteIcon } from '@expo/styleguide-icons/outline/PaletteIcon';

import { DemoTile } from '@/components/DemoTile';

type Props = ButtonProps & {
  iconOnly?: boolean;
};

export function ButtonsRow({ theme, disabled = false, iconOnly = false }: Props) {
  return (
    <DemoTile title={`${theme}${disabled ? ' (disabled)' : ''}${iconOnly ? ' (icon only)' : ''}`} tag="div">
      <div className="flex flex-wrap items-center gap-6">
        <Button theme={theme} size="2xs" disabled={disabled} leftSlot={<PaletteIcon />}>
          {iconOnly ? null : 'Button 2XS'}
        </Button>
        <Button theme={theme} size="xs" disabled={disabled} leftSlot={<PaletteIcon />}>
          {iconOnly ? null : 'Button XS'}
        </Button>
        <Button theme={theme} size="sm" disabled={disabled} leftSlot={<PaletteIcon />}>
          {iconOnly ? null : 'Button SM'}
        </Button>
        <Button theme={theme} size="md" disabled={disabled} leftSlot={<PaletteIcon />}>
          {iconOnly ? null : 'Button MD'}
        </Button>
        <Button theme={theme} size="lg" disabled={disabled} leftSlot={<PaletteIcon />}>
          {iconOnly ? null : 'Button LG'}
        </Button>
        <Button theme={theme} size="xl" disabled={disabled} leftSlot={<PaletteIcon />}>
          {iconOnly ? null : 'Button XL'}
        </Button>
        <Button theme={theme} size="2xl" disabled={disabled} leftSlot={<PaletteIcon />}>
          {iconOnly ? null : 'Button 2XL'}
        </Button>
      </div>
    </DemoTile>
  );
}
