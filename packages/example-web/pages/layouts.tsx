import { mergeClasses } from '@expo/styleguide';

import { H1, H3 } from '@/components/headers';

const VIEWPORT_CLASS = mergeClasses('mx-auto mt-4 min-h-40 border border-b-0 border-default bg-screen px-6 pt-4');
const SCREEN_CLASS = mergeClasses('mx-auto mt-4 min-h-40 border border-b-0 border-secondary bg-default px-4 pt-3');

export default function LayoutsPage() {
  return (
    <>
      <H1>Layouts</H1>
      <H3>screen-2xl</H3>
      <div className={mergeClasses(VIEWPORT_CLASS, 'mx-0 border-b', 'max-w-screen-2xl-gutters')}>
        max-2xl-gutters: <span className="text-quaternary">scope or</span> max-w-screen-2xl-gutters
        <div className={mergeClasses(SCREEN_CLASS, 'max-w-screen-2xl')}>max-w-screen-2xl</div>
      </div>
      <H3>screen-xl</H3>
      <div className={mergeClasses(VIEWPORT_CLASS, 'mx-0 border-b', 'max-w-screen-xl-gutters')}>
        max-xl-gutters: <span className="text-quaternary">scope or</span> max-w-screen-xl-gutters
        <div className={mergeClasses(SCREEN_CLASS, 'max-w-screen-xl')}>max-w-screen-xl</div>
      </div>
      <H3>screen-lg</H3>
      <div className={mergeClasses(VIEWPORT_CLASS, 'mx-0 border-b', 'max-w-screen-lg-gutters')}>
        max-lg-gutters: <span className="text-quaternary">scope or</span> max-w-screen-lg-gutters
        <div className={mergeClasses(SCREEN_CLASS, 'max-w-screen-lg')}>max-w-screen-lg</div>
      </div>
      <H3>screen-md</H3>
      <div className={mergeClasses(VIEWPORT_CLASS, 'mx-0 border-b', 'max-w-screen-md-gutters')}>
        max-md-gutters: <span className="text-quaternary">scope or</span> max-w-screen-md-gutters
        <div className={mergeClasses(SCREEN_CLASS, 'max-w-screen-md')}>max-w-screen-md</div>
      </div>
      <H3>screen-sm</H3>
      <div className={mergeClasses(VIEWPORT_CLASS, 'mx-0 border-b', 'max-w-screen-sm-gutters')}>
        max-sm-gutters: <span className="text-quaternary">scope or</span> max-w-screen-sm-gutters
        <div className={mergeClasses(SCREEN_CLASS, 'max-w-screen-sm')}>max-w-screen-sm</div>
      </div>
    </>
  );
}
