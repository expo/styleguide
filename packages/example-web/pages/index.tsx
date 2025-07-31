import { WordMarkLogo } from '@expo/styleguide';

import { Metadata } from '@/common/metadata';
import { H1 } from '@/components/headers';

export default function HomePage() {
  return (
    <>
      <Metadata title="@expo/styleguide" description="Expo styleguide site listing UI build blocks and examples" />
      <H1 className="prose-strong:text-secondary">
        @expo<strong>/</strong>styleguide
      </H1>
      <p className="mt-8 text-lg">
        A collection of packages used to share styles and icons across{' '}
        <WordMarkLogo className="relative -top-0.5 inline h-6 w-auto px-0.5 text-default" /> websites and projects.
      </p>
    </>
  );
}
