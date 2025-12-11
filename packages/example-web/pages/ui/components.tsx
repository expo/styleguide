import { ButtonBase, Button, Link, LinkBase, type ButtonTheme } from '@expo/styleguide';
import { EasMetadataIcon } from '@expo/styleguide-icons/custom/EasMetadataIcon';
import { ArrowUpIcon } from '@expo/styleguide-icons/outline/ArrowUpIcon';
import { ArrowUpRightIcon } from '@expo/styleguide-icons/outline/ArrowUpRightIcon';
import { BookClosedIcon } from '@expo/styleguide-icons/outline/BookClosedIcon';
import { Diamond01Icon } from '@expo/styleguide-icons/outline/Diamond01Icon';
import { Trash01Icon } from '@expo/styleguide-icons/outline/Trash01Icon';
import { Fragment } from 'react';

import { Metadata } from '@/common/metadata';
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
      <Metadata title="UI: Components" description="Basic components which are included in @expo/styleguide package" />
      <H1>UI: Components</H1>
      <p className="mt-2 text-secondary">
        Basic components which are included in <code>@expo/styleguide</code> package
      </p>
      <H3>Inline Help</H3>
      <DemoTile title="info" tag="div">
        <div className="flex items-center gap-2 rounded-lg border border-info bg-info px-3 py-1.5 text-sm text-info shadow-xs">
          <EasMetadataIcon className="icon-sm text-icon-info" />
          Info text
        </div>
      </DemoTile>
      <DemoTile title="warning" tag="div">
        <div className="flex items-center gap-2 rounded-lg border border-warning bg-warning px-3 py-1.5 text-sm text-warning shadow-xs">
          <EasMetadataIcon className="icon-sm text-icon-warning" />
          Warning text
        </div>
      </DemoTile>
      <DemoTile title="danger" tag="div">
        <div className="flex items-center gap-2 rounded-lg border border-danger bg-danger px-3 py-1.5 text-sm text-danger shadow-xs">
          <EasMetadataIcon className="icon-sm text-icon-danger" />
          Danger text
        </div>
      </DemoTile>
      <DemoTile title="success" tag="div">
        <div className="flex items-center gap-2 rounded-lg border border-success bg-success px-3 py-1.5 text-sm text-success shadow-xs">
          <EasMetadataIcon className="icon-sm text-icon-success" />
          Success text
        </div>
      </DemoTile>
      <DemoTile title="preview" tag="div">
        <div className="flex items-center gap-2 rounded-lg border border-preview bg-preview px-3 py-1.5 text-sm text-preview shadow-xs">
          <EasMetadataIcon className="icon-sm text-icon-preview" />
          Preview text
        </div>
      </DemoTile>
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
        <Button href="#" leftSlot={<ArrowUpIcon />}>
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
          className="border-palette-green7 bg-palette-green3 text-success hocus:bg-palette-green4"
          rightSlot={<EasMetadataIcon className="text-success" />}>
          EAS Metadata
        </Button>
        <Button
          href="#"
          className="ml-4 border-palette-green7 bg-palette-green3 text-success hocus:bg-palette-green4"
          rightSlot={<EasMetadataIcon className="text-success" />}>
          EAS Metadata
        </Button>
      </DemoTile>
      <DemoTile title="custom slot content">
        <Button
          theme="quaternary"
          className="hocus:border-palette-yellow6 hocus:bg-palette-yellow2"
          leftSlot={<span className="icon-2xs rounded-md bg-palette-yellow10" />}
          testID="test-button"
          skipCapitalization>
          Check status
        </Button>
        <Button
          href="#"
          theme="quaternary"
          className="ml-4 hocus:border-palette-yellow6 hocus:bg-palette-yellow2"
          leftSlot={<span className="icon-2xs rounded-md bg-palette-yellow10" />}
          testID="test-link"
          skipCapitalization>
          Check status
        </Button>
      </DemoTile>
      <DemoTile title="forced dark theme">
        <span className="dark-theme flex gap-4 rounded-lg bg-screen p-4">
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
