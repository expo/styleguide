import { Metadata } from '@/common/metadata';
import { DemoTile } from '@/components/DemoTile';
import { H1, H3 } from '@/components/headers';

export default function TypographyPage() {
  return (
    <>
      <Metadata title="Typography" description="Typography classes that differs from the default Tailwind config" />
      <H1>Typography</H1>
      <p className="mt-2 text-secondary">Typography classes that differs from the default Tailwind config</p>
      <H3 id="headings">Headings classes</H3>
      <div className="flex flex-col gap-2">
        <DemoTile title="heading-5xl" className="font-black heading-5xl" />
        <DemoTile title="heading-4xl" className="font-extrabold heading-4xl" />
        <DemoTile title="heading-3xl" className="font-bold heading-3xl" />
        <DemoTile
          title={
            <>
              heading-2xl
              <br />
              <code>(h1)</code>
            </>
          }
          className="font-semibold heading-2xl"
        />
        <DemoTile
          title={
            <>
              heading-xl
              <br />
              <code>(h2)</code>
            </>
          }
          className="font-medium heading-xl"
        />
        <DemoTile
          title={
            <>
              heading-lg
              <br />
              <code>(h3)</code>
            </>
          }
          className="font-medium heading-lg"
        />
        <DemoTile
          title={
            <>
              heading-base
              <br />
              <code>(h4)</code>
            </>
          }
          className="font-medium heading-base"
        />
        <DemoTile
          title={
            <>
              heading-sm
              <br />
              <code>(h5)</code>
            </>
          }
          className="font-medium heading-sm"
        />
        <DemoTile
          title={
            <>
              heading-xs
              <br />
              <code>(h6)</code>
            </>
          }
          className="font-medium heading-xs"
        />
      </div>
      <H3 id="elements">Text classes</H3>
      <div className="flex flex-col gap-2">
        <DemoTile title="text-3xl" className="text-3xl" />
        <DemoTile title="text-2xl" className="text-2xl" />
        <DemoTile title="text-xl" className="text-xl" />
        <DemoTile title="text-lg" className="text-lg" />
        <DemoTile
          title={
            <>
              text-base
              <br />
              <code>(p)</code>
            </>
          }
          className="text-base"
        />
        <DemoTile title="text-sm" className="text-sm" />
        <DemoTile title="text-xs" className="text-xs" />
        <DemoTile title="text-2xs" className="text-2xs" />
        <DemoTile title="text-3xs" className="text-3xs" />
      </div>
      <H3 id="elements">Raw Elements</H3>
      <div className="flex flex-col gap-4">
        <DemoTile tag="code" title={<code>code</code>} className="text-base" />
      </div>
    </>
  );
}
