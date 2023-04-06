import { ButtonBase, Button, Link, LinkBase } from '@expo/styleguide';
import type { ButtonTheme, ButtonProps } from '@expo/styleguide';
import {
  AlignTopArrow01Icon,
  ArrowUpRightIcon,
  BookClosedIcon,
  Diamond01Icon,
  DotsHorizontalIcon,
  EasMetadataIcon,
  EyeOffIcon,
  PaletteIcon,
  Trash01Icon,
} from '@expo/styleguide-icons';
import { Fragment } from 'react';

import { DemoTile } from '@/components/DemoTile';
import { H1, H3 } from '@/components/headers';

const THEMES = [
  'primary',
  'secondary',
  'tertiary',
  'quaternary',
  'primary-destructive',
  'secondary-destructive',
] as ButtonTheme[];

function ButtonRow({ theme, disabled = false }: ButtonProps) {
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
        <LinkBase href="https://expo.dev" openInNewTab>
          LinkBase
        </LinkBase>
      </DemoTile>
      <DemoTile title="no href">
        <LinkBase>LinkBase</LinkBase>
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
      {THEMES.map((buttonTheme) => (
        <Fragment key={`buttons-${buttonTheme}`}>
          <ButtonRow theme={buttonTheme} />
          <ButtonRow theme={buttonTheme} disabled />
        </Fragment>
      ))}
      <H3>Link Buttons</H3>
      <DemoTile title="local anchor">
        <Button href="#" leftSlot={<AlignTopArrow01Icon />}>
          Scroll top
        </Button>
      </DemoTile>
      <DemoTile title="external link">
        <Button href="https://snack.expo.dev" openInNewTab size="xs" theme="secondary" rightSlot={<ArrowUpRightIcon />}>
          Snack
        </Button>
      </DemoTile>
      <DemoTile title="external link with icon">
        <Button
          href="https://docs.expo.dev"
          leftSlot={<BookClosedIcon className="icon-lg" />}
          openInNewTab
          theme="tertiary">
          Docs
        </Button>
      </DemoTile>
      <DemoTile title="disabled link">
        <Button
          disabled
          href="https://docs.expo.dev"
          leftSlot={<Trash01Icon />}
          openInNewTab
          theme="secondary-destructive">
          Delete
        </Button>
      </DemoTile>
      <H3>Icon Buttons</H3>
      <DemoTile title="default size">
        <Button href="#" theme="secondary" leftSlot={<AlignTopArrow01Icon />} />
      </DemoTile>
      <DemoTile title="medium">
        <Button theme="primary-destructive" size="md" leftSlot={<Trash01Icon />} />
      </DemoTile>
      <DemoTile title="xs">
        <Button theme="secondary-destructive" size="xs" leftSlot={<EyeOffIcon />} />
      </DemoTile>
      <DemoTile title="2xl">
        <Button theme="quaternary" size="2xl" leftSlot={<DotsHorizontalIcon />} />
      </DemoTile>
      <H3>Customized Buttons</H3>
      <DemoTile title="icon with custom color">
        <Button theme="secondary" size="lg" leftSlot={<Diamond01Icon className="text-palette-pink10" />}>
          Subscribe
        </Button>
        <Button
          className="ml-4"
          href="#"
          theme="secondary"
          size="lg"
          leftSlot={<Diamond01Icon className="text-palette-pink10" />}>
          Subscribe
        </Button>
      </DemoTile>
      <DemoTile title="custom button">
        <Button
          className="bg-palette-green3 border-palette-green7 text-success hocus:bg-palette-green4"
          rightSlot={<EasMetadataIcon className="text-success" />}>
          EAS Metadata
        </Button>
        <Button
          href="#"
          className="ml-4 bg-palette-green3 border-palette-green7 text-success hocus:bg-palette-green4"
          rightSlot={<EasMetadataIcon className="text-success" />}>
          EAS Metadata
        </Button>
      </DemoTile>
      <DemoTile title="custom slot content">
        <Button
          theme="quaternary"
          className="hocus:bg-palette-yellow2 hocus:border-palette-yellow6"
          leftSlot={<span className="icon-2xs bg-palette-yellow10 rounded-md" />}
          testID="test-button"
          skipCapitalization>
          Check status
        </Button>
        <Button
          href="#"
          theme="quaternary"
          className="ml-4 hocus:bg-palette-yellow2 hocus:border-palette-yellow6"
          leftSlot={<span className="icon-2xs bg-palette-yellow10 rounded-md" />}
          testID="test-link"
          skipCapitalization>
          Check status
        </Button>
      </DemoTile>
      <DemoTile title="forced dark theme">
        <span className="dark-theme flex bg-screen p-4 rounded-lg gap-4">
          <Button theme="secondary" className="dark-theme">
            Dark button
          </Button>
          <Button href="#" theme="secondary-destructive" className="dark-theme">
            Dark button #2
          </Button>
        </span>
      </DemoTile>
    </>
  );
}
