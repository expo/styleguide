import { createElement } from 'react';
import type { PropsWithChildren } from 'react';

type DemoTileProps = PropsWithChildren<{
  title: string;
  className?: string;
  tag?: string;
}>;

export function DemoTile({ title, className, children = 'Build developer trust.', tag = 'p' }: DemoTileProps) {
  return (
    <div className="flex items-center gap-2 mb-4 flex-wrap">
      <p className="w-40 large:w-60 text-2xs text-secondary">{title}</p>
      {createElement(tag, { className }, children)}
    </div>
  );
}
