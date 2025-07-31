import { Metadata } from '@/common/metadata';
import { DemoTile } from '@/components/DemoTile';
import { H1, H3 } from '@/components/headers';

export default function SearchPage() {
  return (
    <>
      <Metadata title="UI: Primitives" description="Various classes that differs from the default Tailwind config" />
      <H1>UI: Primitives</H1>
      <p className="mt-2 text-secondary">Various classes that differs from the default Tailwind config</p>
      <H3>Border radius</H3>
      <DemoTile title="rounded-xs" tag="div">
        <div className="rounded-xs border border-default px-6 py-2 text-xs text-quaternary">2px</div>
      </DemoTile>
      <DemoTile title="rounded-sm" tag="div">
        <div className="rounded-sm border border-default px-6 py-2 text-xs text-quaternary">4px</div>
      </DemoTile>
      <DemoTile title="rounded-md" tag="div">
        <div className="rounded-md border border-default px-6 py-2 text-xs text-quaternary">6px</div>
      </DemoTile>
      <DemoTile title="rounded-lg" tag="div">
        <div className="rounded-lg border border-default px-6 py-2 text-xs text-quaternary">10px</div>
      </DemoTile>
      <DemoTile title="rounded-xl" tag="div">
        <div className="rounded-xl border border-default px-6 py-2 text-xs text-quaternary">16px</div>
      </DemoTile>
      <DemoTile title="rounded-2xl" tag="div">
        <div className="rounded-2xl border border-default px-6 py-2 text-xs text-quaternary">20px</div>
      </DemoTile>
      <DemoTile title="rounded-3xl" tag="div">
        <div className="rounded-3xl border border-default px-6 py-2 text-xs text-quaternary">24px</div>
      </DemoTile>
      <H3>Shadows</H3>
      <div className="flex flex-col gap-2">
        <DemoTile title="shadow-xs" tag="div">
          <div className="min-h-12 min-w-32 rounded-sm border border-default shadow-xs" />
        </DemoTile>
        <DemoTile title="shadow-sm" tag="div">
          <div className="min-h-12 min-w-32 rounded-sm border border-default shadow-sm" />
        </DemoTile>
        <DemoTile title="shadow-md" className="mb-1" tag="div">
          <div className="min-h-12 min-w-32 rounded-sm border border-default shadow-md" />
        </DemoTile>
        <DemoTile title="shadow-lg" className="mb-2" tag="div">
          <div className="min-h-12 min-w-32 rounded-sm border border-default shadow-lg" />
        </DemoTile>
        <DemoTile title="shadow-xl" className="mb-3" tag="div">
          <div className="min-h-12 min-w-32 rounded-sm border border-default shadow-xl" />
        </DemoTile>
      </div>
      <H3>Special shadows</H3>
      <div className="flex flex-col gap-3">
        <DemoTile title="shadow-kbd" tag="div">
          <kbd className="min-h-12 min-w-32 rounded-sm border border-default px-1 text-xs shadow-kbd">Cmd</kbd>
        </DemoTile>
        <DemoTile title="asset-sm-shadow" tag="div">
          <div className="asset-sm-shadow min-h-20 min-w-40 rounded-sm border border-default bg-subtle" />
        </DemoTile>
        <DemoTile title="asset-shadow" tag="div">
          <div className="asset-shadow min-h-20 min-w-40 rounded-sm border border-default bg-subtle" />
        </DemoTile>
      </div>
    </>
  );
}
