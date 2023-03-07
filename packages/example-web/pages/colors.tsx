import { mergeClasses } from '@expo/styleguide';

import { H1, H3 } from '@/components/headers';
import useCopy from '@/hooks/useCopy';

function getPaletteClasses(colorName: string) {
  switch (colorName) {
    case 'red':
      return [
        'bg-palette-red1',
        'bg-palette-red2',
        'bg-palette-red3',
        'bg-palette-red4',
        'bg-palette-red5',
        'bg-palette-red6',
        'bg-palette-red7',
        'bg-palette-red8',
        'bg-palette-red9',
        'bg-palette-red10',
        'bg-palette-red11',
        'bg-palette-red12',
      ];
    case 'orange':
      return [
        'bg-palette-orange1',
        'bg-palette-orange2',
        'bg-palette-orange3',
        'bg-palette-orange4',
        'bg-palette-orange5',
        'bg-palette-orange6',
        'bg-palette-orange7',
        'bg-palette-orange8',
        'bg-palette-orange9',
        'bg-palette-orange10',
        'bg-palette-orange11',
        'bg-palette-orange12',
      ];
    case 'yellow':
      return [
        'bg-palette-yellow1',
        'bg-palette-yellow2',
        'bg-palette-yellow3',
        'bg-palette-yellow4',
        'bg-palette-yellow5',
        'bg-palette-yellow6',
        'bg-palette-yellow7',
        'bg-palette-yellow8',
        'bg-palette-yellow9',
        'bg-palette-yellow10',
        'bg-palette-yellow11',
        'bg-palette-yellow12',
      ];
    case 'green':
      return [
        'bg-palette-green1',
        'bg-palette-green2',
        'bg-palette-green3',
        'bg-palette-green4',
        'bg-palette-green5',
        'bg-palette-green6',
        'bg-palette-green7',
        'bg-palette-green8',
        'bg-palette-green9',
        'bg-palette-green10',
        'bg-palette-green11',
        'bg-palette-green12',
      ];
    case 'blue':
      return [
        'bg-palette-blue1',
        'bg-palette-blue2',
        'bg-palette-blue3',
        'bg-palette-blue4',
        'bg-palette-blue5',
        'bg-palette-blue6',
        'bg-palette-blue7',
        'bg-palette-blue8',
        'bg-palette-blue9',
        'bg-palette-blue10',
        'bg-palette-blue11',
        'bg-palette-blue12',
      ];
    case 'purple':
      return [
        'bg-palette-purple1',
        'bg-palette-purple2',
        'bg-palette-purple3',
        'bg-palette-purple4',
        'bg-palette-purple5',
        'bg-palette-purple6',
        'bg-palette-purple7',
        'bg-palette-purple8',
        'bg-palette-purple9',
        'bg-palette-purple10',
        'bg-palette-purple11',
        'bg-palette-purple12',
      ];
    case 'pink':
      return [
        'bg-palette-pink1',
        'bg-palette-pink2',
        'bg-palette-pink3',
        'bg-palette-pink4',
        'bg-palette-pink5',
        'bg-palette-pink6',
        'bg-palette-pink7',
        'bg-palette-pink8',
        'bg-palette-pink9',
        'bg-palette-pink10',
        'bg-palette-pink11',
        'bg-palette-pink12',
      ];
    case 'gray':
      return [
        'bg-palette-blue1',
        'bg-palette-blue2',
        'bg-palette-blue3',
        'bg-palette-blue4',
        'bg-palette-blue5',
        'bg-palette-blue6',
        'bg-palette-blue7',
        'bg-palette-blue8',
        'bg-palette-blue9',
        'bg-palette-blue10',
        'bg-palette-blue11',
        'bg-palette-blue12',
      ];
    default:
      return [];
  }
}

function getProjectGradientClass(color: string) {
  switch (color) {
    case 'red':
      return 'bg-project-red';
    case 'orange':
      return 'bg-project-orange';
    case 'yellow':
      return 'bg-project-yellow';
    case 'green':
      return 'bg-project-green';
    case 'blue':
      return 'bg-project-blue';
    case 'purple':
      return 'bg-project-purple';
    case 'pink':
      return 'bg-project-pink';
  }
}

export default function Colors() {
  const [, copy] = useCopy();
  return (
    <>
      <H1>Colors</H1>
      <H3>Palette</H3>
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
      <H3>Project gradients</H3>
      <div className="flex gap-4 mt-8">
        {['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'].map((color, index) => (
          <div className="flex flex-col gap-1 items-center" key={index}>
            <div
              className={mergeClasses(
                'w-16 h-16 mb-1 transition',
                'hover:scale-110 hover:shadow-md hover:cursor-pointer active:scale-105',
                getProjectGradientClass(color)
              )}
              onClick={() => copy(`bg-project-${color}`)}
            />
            <p className="text-3xs text-secondary text-center">bg-project-{color}</p>
          </div>
        ))}
      </div>
    </>
  );
}
