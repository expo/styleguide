import { Button, ButtonProps } from '@expo/styleguide';
import { PaletteIcon } from '@expo/styleguide-icons';

import { DemoTile } from '@/components/DemoTile';

export function ButtonsRow({ theme, disabled = false }: ButtonProps) {
  return (
    <DemoTile title={`${theme}${disabled ? ' (disabled)' : ''}`} tag="div">
      <div className="flex flex-wrap gap-6">
        <Button theme={theme} size="xs" disabled={disabled} leftSlot={<PaletteIcon />}>
          Button XS
        </Button>
        <Button theme={theme} size="sm" disabled={disabled} leftSlot={<PaletteIcon />}>
          Button SM
        </Button>
        <Button theme={theme} size="md" disabled={disabled} leftSlot={<PaletteIcon />}>
          Button MD
        </Button>
        <Button theme={theme} size="lg" disabled={disabled} leftSlot={<PaletteIcon />}>
          Button LG
        </Button>
        <Button theme={theme} size="xl" disabled={disabled} leftSlot={<PaletteIcon />}>
          Button XL
        </Button>
        <Button theme={theme} size="2xl" disabled={disabled} leftSlot={<PaletteIcon />}>
          Button 2XL
        </Button>
      </div>
    </DemoTile>
  );
}
