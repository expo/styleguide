import { ButtonBase, Button, Link, LinkBase, type ButtonTheme } from '@expo/styleguide';
import { EasMetadataIcon } from '@expo/styleguide-icons/custom/EasMetadataIcon';
import { AlignTopArrow01Icon } from '@expo/styleguide-icons/outline/AlignTopArrow01Icon';
import { ArrowUpRightIcon } from '@expo/styleguide-icons/outline/ArrowUpRightIcon';
import { BookClosedIcon } from '@expo/styleguide-icons/outline/BookClosedIcon';
import { Diamond01Icon } from '@expo/styleguide-icons/outline/Diamond01Icon';
import { DotsHorizontalIcon } from '@expo/styleguide-icons/outline/DotsHorizontalIcon';
import { EyeOffIcon } from '@expo/styleguide-icons/outline/EyeOffIcon';
import { Trash01Icon } from '@expo/styleguide-icons/outline/Trash01Icon';
import { Fragment } from 'react';

import { ButtonsRow } from '@/components/ButtonsRow';
import { DemoTile } from '@/components/DemoTile';
import { H1, H3 } from '@/components/headers';

const THEMES = [
  'primary',
  'secondary',
  'tertiary',
  'quaternary',
  'primary-destructive',
  'secondary-destructive',
  'tertiary-destructive',
] as ButtonTheme[];

export default function ComponentsPage() {
  return (
    <>
      <H1>UI: Components</H1>
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
      <DemoTile title="skip intenral Next Link">
        <LinkBase skipNextLink href="/">
          LinkBase
        </LinkBase>
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
          <ButtonsRow theme={buttonTheme} />
          <ButtonsRow theme={buttonTheme} disabled />
        </Fragment>
      ))}
      <H3 id="buttons">Icon Buttons</H3>
      {THEMES.map((buttonTheme) => (
        <Fragment key={`buttons-${buttonTheme}`}>
          <ButtonsRow theme={buttonTheme} iconOnly />
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
      <DemoTile title="skip Next Link version">
        <Button skipNextLink href="/" theme="quaternary">
          Home
        </Button>
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
