import { Button } from '@expo/styleguide';
import { Stars03DuotoneIcon } from '@expo/styleguide-icons/duotone/Stars03DuotoneIcon';
import { CommandMenuTrigger } from '@expo/styleguide-search-ui';

import { useSearchDialogContext } from '@/common/SearchDialogContext';
import { Metadata } from '@/common/metadata';
import { DemoTile } from '@/components/DemoTile';
import { H1, H3 } from '@/components/headers';

export default function SearchPage() {
  const { isOpen, setOpen } = useSearchDialogContext();
  return (
    <>
      <Metadata title="UI: Search" description="Example usages and customization of @expo/search-ui package" />
      <H1>UI: Search</H1>
      <H3>
        <code>@expo/search-ui</code>
      </H3>
      <DemoTile title="default trigger">
        <CommandMenuTrigger setOpen={setOpen} className="min-w-[220px]" />
      </DemoTile>
      <DemoTile title="styled trigger">
        <CommandMenuTrigger setOpen={setOpen} className="min-w-[220px] border-info bg-info hocus:bg-palette-blue4" />
      </DemoTile>
      <DemoTile title="custom trigger">
        <Button
          theme="secondary"
          size="lg"
          className="border-preview bg-default px-4 text-preview hocus:bg-preview"
          leftSlot={<Stars03DuotoneIcon className="text-icon-preview" />}
          onClick={() => {
            setOpen(!isOpen);
          }}>
          Search
        </Button>
      </DemoTile>
    </>
  );
}
