import { mergeClasses } from '@expo/styleguide';

import { getPaletteClasses } from '@/common/utils';
import { H1, H3 } from '@/components/headers';
import useCopy from '@/hooks/useCopy';

export default function ColorsPage() {
  const [, copy] = useCopy();
  return (
    <>
      <H1>Colors</H1>
      <H3 id="palette">Palette</H3>
      <div className="grid gap-2 mt-8">
        {['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'gray'].map((color) => (
          <div className="flex flex-wrap mb-2" key={color}>
            {getPaletteClasses(color).map((className, index) => (
              <div key={index}>
                <div
                  className={mergeClasses(
                    'w-16 h-16 mb-1 transition',
                    'hover:scale-110 hover:shadow-md hover:cursor-pointer active:scale-105',
                    className
                  )}
                  onClick={() => copy(`palette-${color}${index + 1}`)}
                />
                <p className="text-3xs text-secondary text-center">
                  {color}
                  {index + 1}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <H3 id="project">Project background colors</H3>
      <div className="flex flex-wrap mb-2">
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
                'w-16 h-16 mb-1 transition',
                'hover:scale-110 hover:shadow-md hover:cursor-pointer active:scale-105',
                className
              )}
              onClick={() => copy(className)}
            />
            <p className="text-3xs text-secondary text-center">{className.replace('bg-app-', '')}</p>
          </div>
        ))}
      </div>
    </>
  );
}
