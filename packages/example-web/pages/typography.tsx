import { DemoTile } from '@/components/DemoTile';
import { H1, H3 } from '@/components/headers';

export default function TypographyPage() {
  return (
    <>
      <H1>Typography</H1>
      <H3 id="headings">Headings classes</H3>
      <div className="flex flex-col gap-4">
        <DemoTile title="heading-5xl" className="font-black heading-5xl" />
        <DemoTile title="heading-4xl" className="font-extrabold heading-4xl" />
        <DemoTile title="heading-3xl" className="font-bold heading-3xl" />
        <DemoTile title="heading-2xl" className="font-semibold heading-2xl" />
        <DemoTile title="heading-xl" className="font-medium heading-xl" />
        <DemoTile title="heading-lg" className="font-medium heading-lg" />
        <DemoTile title="heading-base" className="font-medium heading-base" />
        <DemoTile title="heading-sm" className="font-medium heading-sm" />
        <DemoTile title="heading-xs" className="font-medium heading-xs" />
      </div>
      <H3 id="elements">Text classes</H3>
      <div className="flex flex-col gap-4">
        <DemoTile title="text-3xl" className="text-3xl" />
        <DemoTile title="text-2xl" className="text-2xl" />
        <DemoTile title="text-xl" className="text-xl" />
        <DemoTile title="text-lg" className="text-lg" />
        <DemoTile title="text-base" className="text-base" />
        <DemoTile title="text-sm" className="text-sm" />
        <DemoTile title="text-xs" className="text-xs" />
        <DemoTile title="text-2xs" className="text-2xs" />
        <DemoTile title="text-3xs" className="text-3xs" />
      </div>
      <H3 id="elements">Raw Elements</H3>
      <div className="flex flex-col gap-4">
        <DemoTile tag="code" title="code" className="text-base" />
      </div>
    </>
  );
}
