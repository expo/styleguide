import { DemoTile } from "@/components/DemoTile";
import { H1, H3 } from "@/components/headers";

export default function Typography() {
  return (
    <>
      <H1>Typography</H1>
      <H3>Headings</H3>
      <div className="flex flex-col gap-8">
        <DemoTile title="Heading 5xl" className="text-heading-5xl font-black" />
        <DemoTile title="Heading 4xl" className="text-heading-4xl font-extrabold" />
        <DemoTile title="Heading 3xl" className="text-heading-3xl font-bold" />
        <DemoTile title="Heading 2xl" className="text-heading-2xl font-semibold" />
        <DemoTile title="Heading xl" className="text-heading-xl font-medium" />
        <DemoTile title="Heading lg" className="text-heading-lg font-medium" />
        <DemoTile title="Heading base" className="text-heading-base font-medium" />
        <DemoTile title="Heading sm" className="text-heading-sm font-medium" />
        <DemoTile title="Heading xs" className="text-heading-xs font-medium" />
      </div>
      <H3>Elements</H3>
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
