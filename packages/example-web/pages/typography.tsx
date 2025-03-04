import { DemoTile } from '@/components/DemoTile';
import { H1, H3 } from '@/components/headers';

export default function TypographyPage() {
  return (
    <>
      <H1>Typography</H1>
      <H3 id="headings">Headings classes</H3>
      <div className="flex flex-col gap-8">
        <DemoTile title="heading-5xl" className="heading-5xl font-black" />
        <DemoTile title="heading-4xl" className="heading-4xl font-extrabold" />
        <DemoTile title="heading-3xl" className="heading-3xl font-bold" />
        <DemoTile title="heading-2xl" className="heading-2xl font-semibold" />
        <DemoTile title="heading-xl" className="heading-xl font-medium" />
        <DemoTile title="heading-lg" className="heading-lg font-medium" />
        <DemoTile title="heading-base" className="heading-base font-medium" />
        <DemoTile title="heading-sm" className="heading-sm font-medium" />
        <DemoTile title="heading-xs" className="heading-xs font-medium" />
      </div>
      <H3 id="elements">Text classes</H3>
      <div className="flex flex-col gap-8">
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
      <H3 id="elements">Font weight classes</H3>
      <div className="flex flex-col gap-8">
        <DemoTile title="font-black" className="font-black" />
        <DemoTile title="font-extrabold" className="font-extrabold" />
        <DemoTile title="font-bold" className="font-bold" />
        <DemoTile title="font-semibold" className="font-semibold" />
        <DemoTile title="font-medium" className="font-medium" />
        <DemoTile title="font-normal" className="font-normal" />
        <DemoTile title="font-light" className="font-light" />
        <DemoTile title="font-extralight" className="font-extralight" />
      </div>
      <H3 id="elements">Elements (legacy)</H3>
      <div className="flex flex-col gap-8">
        <DemoTile title="Headline" className="text-base font-medium" />
        <DemoTile title="Paragraph" className="text-base font-normal" />
        <DemoTile title="Label" className="text-sm font-medium" />
        <DemoTile title="Callout" className="text-xs" />
        <DemoTile title="Footnote" className="text-2xs" />
        <DemoTile title="Caption" className="text-3xs" />
        <DemoTile tag="code" title="Code" className="text-base" />
      </div>
    </>
  );
}
