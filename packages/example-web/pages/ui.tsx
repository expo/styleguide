import { ButtonBase, Button } from "@expo/styleguide";
import type { ButtonTheme, ButtonProps } from "@expo/styleguide";
import { Fragment } from "react";

import { DemoTile } from "@/components/DemoTile";

const THEMES = [
  'primary',
  'secondary',
  'tertiary',
  'quaternary',
  'primary-destructive',
  'secondary-destructive'
] as ButtonTheme[];

function ButtonRow({ theme, disabled = false }: ButtonProps) {
  return (
    <DemoTile title={`${theme}${disabled ? ' (disabled)' : ''}`}>
      <div className="flex gap-6 mt-4" >
        <Button theme={theme} size="xs" disabled={disabled}>Button XS</Button>
        <Button theme={theme} size="sm" disabled={disabled}>Button SM</Button>
        <Button theme={theme} size="md" disabled={disabled}>Button MD</Button>
        <Button theme={theme} size="lg" disabled={disabled}>Button LG</Button>
        <Button theme={theme} size="xl" disabled={disabled}>Button XL</Button>
        <Button theme={theme} size="2xl" disabled={disabled}>Button 2XL</Button>
      </div>
    </DemoTile>
  )
}

export default function UI() {
  return (
    <>
      <h1 className="text-heading-5xl font-black">UI</h1>
      <h3 className="text-heading-3xl font-bold mt-4 mb-4">Button Base</h3>
      <DemoTile title="onClick">
        <ButtonBase onClick={() => alert('ButtonBase clicked')}>ButtonBase</ButtonBase>
      </DemoTile>
      <h3 className="text-heading-3xl font-bold mt-8 mb-4">Buttons</h3>
      {THEMES.map(buttonTheme => (
        <Fragment key={`buttons-${buttonTheme}`}>
          <ButtonRow theme={buttonTheme} />
          <ButtonRow theme={buttonTheme} disabled />
        </Fragment>
      ))}
    </>
  );
}
