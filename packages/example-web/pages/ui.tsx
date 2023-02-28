import { ButtonBase, Button, Link, LinkBase } from "@expo/styleguide";
import type { ButtonTheme, ButtonProps } from "@expo/styleguide";
import { Fragment } from "react";

import { DemoTile } from "@/components/DemoTile";
import { H1, H3 } from "@/components/headers";
import { AlignTopArrow01Icon, BookClosedIcon, PaletteIcon } from "@expo/styleguide-icons";

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
      <div className="flex flex-wrap gap-6" >
        <Button theme={theme} size="xs" disabled={disabled} leftSlot={<PaletteIcon />}>Button XS</Button>
        <Button theme={theme} size="sm" disabled={disabled} leftSlot={<PaletteIcon />}>Button SM</Button>
        <Button theme={theme} size="md" disabled={disabled} leftSlot={<PaletteIcon />}>Button MD</Button>
        <Button theme={theme} size="lg" disabled={disabled} leftSlot={<PaletteIcon />}>Button LG</Button>
        <Button theme={theme} size="xl" disabled={disabled} leftSlot={<PaletteIcon />}>Button XL</Button>
        <Button theme={theme} size="2xl" disabled={disabled} leftSlot={<PaletteIcon />}>Button 2XL</Button>
      </div>
    </DemoTile>
  )
}

export default function UI() {
  return (
    <>
      <H1>UI</H1>
      <H3>Link Base</H3>
      <DemoTile title="local anchor">
        <LinkBase href="#buttons">LinkBase</LinkBase>
      </DemoTile>
      <DemoTile title="local URL">
        <LinkBase href="/colors">LinkBase</LinkBase>
      </DemoTile>
      <DemoTile title="remote URL">
        <LinkBase href="https://expo.dev" openInNewTab>LinkBase</LinkBase>
      </DemoTile>
      <H3>Link</H3>
      <DemoTile title="default link">
        <Link href="#">Link</Link>
      </DemoTile>
      <H3>Button Base</H3>
      <DemoTile title="onClick">
        <ButtonBase onClick={() => alert('ButtonBase clicked')}>ButtonBase</ButtonBase>
      </DemoTile>
      <H3 id="buttons">Buttons</H3>
      {THEMES.map(buttonTheme => (
        <Fragment key={`buttons-${buttonTheme}`}>
          <ButtonRow theme={buttonTheme} />
          <ButtonRow theme={buttonTheme} disabled />
        </Fragment>
      ))}
      <H3>Link Buttons</H3>
      <DemoTile title="local anchor">
        <Button href="#" leftSlot={<AlignTopArrow01Icon />}>Scroll top</Button>
      </DemoTile>
      <DemoTile title="external link">
        <Button href="https://snack.expo.dev" openInNewTab size="xs" theme="secondary">Snack</Button>
      </DemoTile>
      <DemoTile title="external link with icon">
        <Button href="https://docs.expo.dev" leftSlot={<BookClosedIcon />} openInNewTab theme="tertiary">Docs</Button>
      </DemoTile>
      <DemoTile title="custom slot content">
        <Button href="#" theme="quaternary" rightSlot={<span className="icon-xs bg-palette-yellow10 rounded-md" />}>Check status</Button>
      </DemoTile>
    </>
  );
}
