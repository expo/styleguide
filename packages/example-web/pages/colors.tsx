import { mergeClasses } from '@expo/styleguide';

import { getPaletteClasses } from '@/common/utils';
import { H1, H3, H4 } from '@/components/headers';
import useCopy from '@/hooks/useCopy';

export default function ColorsPage() {
  const [, copy] = useCopy();
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
        ].map((className, index) => (
          <div key={index}>
            <div
              className={mergeClasses(
                'mb-1 h-16 w-16 transition',
                'hover:shadow-xl hocus:scale-110 hocus:cursor-pointer',
                'active:scale-105',
                className
              )}
              onClick={() => copy(className)}
            />
            <p className="text-center text-3xs text-secondary">{className.replace('bg-', '')}</p>
          </div>
        ))}
      </div>
      <H4 className="mt-6">Borders</H4>
      <div className="mb-2 flex flex-wrap">
        {['border-default', 'border-secondary', 'border-success', 'border-warning', 'border-danger', 'border-info'].map(
          (className, index) => (
            <div key={index}>
              <div
                className={mergeClasses(
                  'mb-1 h-16 w-16 border-[10px] transition',
                  'hover:shadow-xl hocus:scale-110 hocus:cursor-pointer',
                  'active:scale-105',
                  className
                )}
                onClick={() => copy(className)}
              />
              <p className="text-center text-3xs text-secondary">{className.replace('border-', '')}</p>
            </div>
          )
        )}
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
        ].map((className, index) => (
          <div key={index}>
            <div
              className={mergeClasses(
                'mb-1 inline-flex h-16 w-16 items-center justify-center font-black transition heading-xl',
                'hover:shadow-xl hocus:scale-110 hocus:cursor-pointer',
                'active:scale-105',
                className
              )}
              onClick={() => copy(className)}>
              T
            </div>
            <p className="text-center text-3xs text-secondary">{className.replace('text-', '')}</p>
          </div>
        ))}
      </div>
      <H3 id="palette">Palette</H3>
      <div className="mt-8 grid gap-2">
        {['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'].map((color) => (
          <div className="mb-2 flex flex-wrap" key={color}>
            {getPaletteClasses(color).map((className, index) => (
              <div key={index}>
                <div
                  className={mergeClasses(
                    'mb-1 h-16 w-16 transition',
                    'hover:shadow-xl hocus:scale-110 hocus:cursor-pointer',
                    'active:scale-105',
                    className
                  )}
                  onClick={() => copy(`palette-${color}${index + 1}`)}
                />
                <p className="text-center text-3xs text-secondary">
                  {color}
                  {index + 1}
                </p>
              </div>
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
          <div key={index}>
            <div
              className={mergeClasses(
                'mb-1 h-16 w-16 transition',
                'hover:shadow-xl hocus:scale-110 hocus:cursor-pointer',
                'active:scale-105',
                className
              )}
              onClick={() => copy(className)}
            />
            <p className="text-center text-3xs text-secondary">{className.replace('bg-app-', '')}</p>
          </div>
        ))}
      </div>
    </>
  );
}
