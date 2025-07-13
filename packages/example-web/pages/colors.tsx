import { mergeClasses } from '@expo/styleguide';

import { getPaletteClasses } from '@/common/utils';
import { ColorTile } from '@/components/ColorTile';
import { H1, H3, H4 } from '@/components/headers';

export default function ColorsPage() {
  return (
    <>
      <H1>Colors</H1>
      <H3 id="semantic">Semantic</H3>
      <H4>Backgrounds</H4>
      <div className="mb-2 flex flex-wrap">
        {[
          'bg-default',
          'bg-screen',
          'bg-subtle',
          'bg-element',
          'bg-hover',
          'bg-selected',
          'bg-overlay',
          'bg-success',
          'bg-warning',
          'bg-danger',
          'bg-info',
          'bg-preview',
        ].map((className, index) => (
          <ColorTile key={index} className={className} />
        ))}
      </div>
      <H4 className="mt-6">Borders</H4>
      <div className="mb-2 flex flex-wrap">
        {[
          'border-default',
          'border-secondary',
          'border-success',
          'border-warning',
          'border-danger',
          'border-info',
          'border-preview',
        ].map((className, index) => (
          <ColorTile key={index} className={mergeClasses('border-[10px]', className)} />
        ))}
      </div>
      <H4 className="mt-6">Text colors</H4>
      <div className="mb-2 flex flex-wrap">
        {[
          'text-default',
          'text-secondary',
          'text-tertiary',
          'text-quaternary',
          'text-success',
          'text-warning',
          'text-danger',
          'text-info',
          'text-preview',
        ].map((className, index) => (
          <ColorTile
            key={index}
            className={mergeClasses('flex items-center justify-center font-black heading-2xl', className)}>
            T
          </ColorTile>
        ))}
      </div>
      <H3 id="palette">Palette</H3>
      <div className="mt-8 grid gap-2">
        {['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'].map((color) => (
          <div className="mb-2 flex flex-wrap" key={color}>
            {getPaletteClasses(color).map((className, index) => (
              <ColorTile key={index} className={className} label={`${color}${index + 1}`} />
            ))}
          </div>
        ))}
      </div>
      <H3 id="project">Project background colors</H3>
      <div className="mb-2 flex flex-wrap">
        {[
          'bg-app-cyan',
          'bg-app-light-blue',
          'bg-app-dark-blue',
          'bg-app-indigo',
          'bg-app-purple',
          'bg-app-pink',
          'bg-app-orange',
          'bg-app-gold',
          'bg-app-yellow',
          'bg-app-lime',
          'bg-app-light-green',
          'bg-app-dark-green',
        ].map((className, index) => (
          <ColorTile key={index} className={className} />
        ))}
      </div>
    </>
  );
}
