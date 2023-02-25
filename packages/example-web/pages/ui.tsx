import { ButtonBase, Button, LinkBase } from "@expo/styleguide";
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
    <DemoTile title={`${theme}${disabled ? ' (disabled)' : ''}`} tag="div">
      <div className="flex gap-6" >
        <Button theme={theme} size="xs" disabled={disabled} iconRight="PaletteIcon">Button XS</Button>
        <Button theme={theme} size="sm" disabled={disabled} iconRight="PaletteIcon">Button SM</Button>
        <Button theme={theme} size="md" disabled={disabled} iconRight="PaletteIcon">Button MD</Button>
        <Button theme={theme} size="lg" disabled={disabled} iconRight="PaletteIcon">Button LG</Button>
        <Button theme={theme} size="xl" disabled={disabled} iconRight="PaletteIcon">Button XL</Button>
        <Button theme={theme} size="2xl" disabled={disabled} iconRight="PaletteIcon">Button 2XL</Button>
      </div>
    </DemoTile>
  )
}

export default function UI() {
  return (
    <>
      <h1 className="text-heading-5xl font-black" id="title">UI</h1>
      <h3 className="text-heading-3xl font-bold mt-8 mb-4">Link Base</h3>
      <DemoTile title="local anchor">
        <LinkBase href="#buttons">LinkBase</LinkBase>
      </DemoTile>
      <DemoTile title="local URL">
        <LinkBase href="/colors">LinkBase</LinkBase>
      </DemoTile>
      <DemoTile title="remote URL">
        <LinkBase href="https://expo.dev" openInNewTab>LinkBase</LinkBase>
      </DemoTile>
      <h3 className="text-heading-3xl font-bold mt-8 mb-4">Button Base</h3>
      <DemoTile title="onClick">
        <ButtonBase onClick={() => alert('ButtonBase clicked')}>ButtonBase</ButtonBase>
      </DemoTile>
      <h3 className="text-heading-3xl font-bold mt-8 mb-4" id="buttons">Buttons</h3>
      {THEMES.map(buttonTheme => (
        <Fragment key={`buttons-${buttonTheme}`}>
          <ButtonRow theme={buttonTheme} />
          <ButtonRow theme={buttonTheme} disabled />
        </Fragment>
      ))}
      <h3 className="text-heading-xl font-semibold mt-8 mb-4">Link Buttons</h3>
      <DemoTile title="local anchor">
        <Button href="#title" icon="AlignTopArrow01Icon">Scroll top</Button>
      </DemoTile>
      <DemoTile title="external link">
        <Button href="https://snack.expo.dev" openInNewTab theme="secondary">Snack</Button>
      </DemoTile>
      <DemoTile title="external link with icon">
        <Button href="https://docs.expo.dev" icon="BookClosedIcon" openInNewTab theme="tertiary">Docs</Button>
      </DemoTile>
    </>
  );
}
