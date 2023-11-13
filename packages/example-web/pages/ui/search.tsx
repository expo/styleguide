import { CommandMenuTrigger } from '@expo/styleguide-search-ui';

import { useSearchDialogContext } from '@/common/SearchDialogContext';
import { DemoTile } from '@/components/DemoTile';
import { H1, H3 } from '@/components/headers';

export default function SearchPage() {
  const { setOpen } = useSearchDialogContext();
  return (
    <>
      <H1>UI: Search</H1>
      <H3>@expo/search-ui</H3>
      <DemoTile title="custom trigger">
        <CommandMenuTrigger setOpen={setOpen} className="min-w-[220px] border-info bg-info hocus:bg-palette-blue4" />
      </DemoTile>
    </>
  );
}
