import { DemoTile } from '@/components/DemoTile';
import { H1, H3 } from '@/components/headers';

export default function TypographyPage() {
  return (
    <>
      <H1>Typography</H1>
      <H3 id="headings">Headings</H3>
      <div className="flex flex-col gap-8">
        <DemoTile title="Heading 5xl" className="heading-5xl font-black" />
        <DemoTile title="Heading 4xl" className="heading-4xl font-extrabold" />
        <DemoTile title="Heading 3xl" className="heading-3xl font-bold" />
        <DemoTile title="Heading 2xl" className="heading-2xl font-semibold" />
        <DemoTile title="Heading xl" className="heading-xl font-medium" />
        <DemoTile title="Heading lg" className="heading-lg font-medium" />
        <DemoTile title="Heading base" className="heading-base font-medium" />
        <DemoTile title="Heading sm" className="heading-sm font-medium" />
        <DemoTile title="Heading xs" className="heading-xs font-medium" />
      </div>
      <H3 id="elements">Elements</H3>
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
