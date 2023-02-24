type DemoTileProps = {
  title: string;
  className: string;
};

function DemoTile({ title, className }: DemoTileProps) {
  return (
    <div className="flex items-center gap-2">
      <p className="w-32 text-secondary">{title}</p>
      <p className={className}>
        Build developer trust.
      </p>
    </div>
  )
}

export default function Typography() {
  return (
    <>
      <h1 className="text-heading-5xl font-black">Typography</h1>
      <h3 className="text-heading-3xl font-bold mt-8 mb-4">Headings</h3>
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
      <div className="mt-16" />
      <h3 className="text-heading-3xl font-bold mt-8 mb-4">Elements</h3>
      <div className="flex flex-col gap-6">
        <DemoTile title="Headline" className="text-base font-medium" />
        <DemoTile title="Paragraph" className="text-base font-normal" />
        <DemoTile title="Label" className="text-sm font-medium" />
        <DemoTile title="Callout" className="text-xs" />
        <DemoTile title="Footnote" className="text-2xs" />
        <DemoTile title="Caption" className="text-3xs" />
        <DemoTile title="Code" className="text-base font-mono" />
      </div>
    </>
  );
}
