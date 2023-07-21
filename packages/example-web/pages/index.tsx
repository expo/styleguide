import { WordMarkLogo } from '@expo/styleguide';

import { ActivityHeartIcon } from '@/../styleguide-icons/dist';
import ActivityHeartDuotoneIcon from '@/components/TestIcon';
import { H1 } from '@/components/headers';

export default function Home() {
  return (
    <>
      <H1 className="prose-strong:text-secondary">
        @expo<strong>/</strong>styleguide
      </H1>
      <p className="text-lg mt-8">
        A collection of packages used to share styles and icons across{' '}
        <WordMarkLogo className="text-default w-auto h-6 inline relative -top-0.5 px-0.5" /> websites and projects.
      </p>
      <ActivityHeartDuotoneIcon />
      <ActivityHeartIcon className="icon-xl" />
    </>
  );
}
