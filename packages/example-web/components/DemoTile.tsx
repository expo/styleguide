import { createElement } from 'react';
import type { PropsWithChildren } from 'react';

type DemoTileProps = PropsWithChildren<{
  title: string;
  className?: string;
  tag?: string;
}>;

export function DemoTile({ title, className, children = 'Build developer trust.', tag = 'p' }: DemoTileProps) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
      <p className="large:w-60 w-40 text-2xs text-secondary">{title}</p>
      {createElement(tag, { className }, children)}
    </div>
  );
}
