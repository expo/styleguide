export default function Typography() {
  return (
    <div className="p-8">
      <h1 className="text-heading-5xl font-black">Typography</h1>
      <div className="mt-16 flex flex-col gap-8">
        <div className="flex items-center gap-2">
          <p className="w-32">Heading 5xl</p>
          <h2 className="text-heading-5xl font-black">
            Build developer trust.
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-32">Heading 4xl</p>
          <h2 className="text-heading-4xl font-extrabold">
            Build developer trust.
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-32">Heading 3xl</p>
          <h2 className="text-heading-3xl font-bold">Build developer trust.</h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-32">Heading 2xl</p>
          <h2 className="text-heading-2xl font-semibold">
            Build developer trust.
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-32">Heading xl</p>
          <h2 className="text-heading-xl font-medium">
            Build developer trust.
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <p className="w-32">Heading lg</p>
          <h2 className="text-heading-lg font-medium">
            Build developer trust.
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <p className="w-32">Heading base</p>
          <h2 className="text-heading-base font-medium">Build developer trust.</h2>
        </div>
        <div className="flex items-center gap-2">
          <p className="w-32">Heading sm</p>
          <h2 className="text-heading-sm font-medium">Build developer trust.</h2>
        </div>

        <div className="flex items-center gap-2">
          <p className="w-32">Heading xs</p>
          <h2 className="text-heading-xs font-medium">Build developer trust.</h2>
        </div>
      </div>

      <div className="my-20">
        <div className="mt-4 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <p className="w-32">Headline</p>
            <p className="text-base font-medium">Build developer trust.</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-32">Paragraph</p>
            <p className="text-base font-normal">Build developer trust.</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-32">Label</p>
            <p className="text-sm font-medium">Build developer trust.</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-32">Callout</p>
            <p className="text-xs">Build developer trust.</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-32">Footnote</p>
            <p className="text-2xs">Build developer trust.</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-32">Caption</p>
            <p className="text-3xs">Build developer trust.</p>
          </div>
          <div className="flex items-center gap-2">
            <p className="w-32">Code</p>
            <p className="text-3xs font-mono">Build developer trust.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
