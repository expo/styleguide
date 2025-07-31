import { mergeClasses } from '@expo/styleguide';

import { Metadata } from '@/common/metadata';
import { H1, H3 } from '@/components/headers';

const VIEWPORT_CLASS = mergeClasses('mx-auto mt-4 rounded-lg border border-default bg-screen px-6 pb-5 pt-4 shadow-xs');
const SCREEN_CLASS = mergeClasses('mx-auto mt-4 min-h-28 rounded-md border border-secondary bg-default px-4 pt-3');

export default function LayoutsPage() {
  return (
    <>
      <Metadata title="Layouts" description="Layout variants and breakpoint scopes in Tailwind config" />
      <H1>Layouts</H1>
      <p className="mt-2 text-secondary">Available layout variants and breakpoint scopes in Tailwind config</p>
      <H3>screen-2xl</H3>
      <div className={mergeClasses(VIEWPORT_CLASS, 'mx-0 border-b', 'max-w-screen-2xl-gutters')}>
        max-2xl-gutters: <span className="text-quaternary">scope or</span>{' '}
        <WidthExplanation screen="screen-2xl-gutters" />
        <span className="text-2xs text-tertiary">1572px</span>
        <div className={mergeClasses(SCREEN_CLASS, 'max-w-screen-2xl')}>
          <WidthExplanation screen="screen-2xl" />
          <span className="text-2xs text-tertiary">1524px</span>
        </div>
      </div>
      <H3>screen-xl</H3>
      <div className={mergeClasses(VIEWPORT_CLASS, 'mx-0 border-b', 'max-w-screen-xl-gutters')}>
        max-xl-gutters: <span className="text-quaternary">scope or</span>{' '}
        <WidthExplanation screen="screen-xl-gutters" />
        <span className="text-2xs text-tertiary">1248px</span>
        <div className={mergeClasses(SCREEN_CLASS, 'max-w-screen-xl')}>
          <WidthExplanation screen="screen-xl" />
          <span className="text-2xs text-tertiary">1200px</span>
        </div>
      </div>
      <H3>screen-lg</H3>
      <div className={mergeClasses(VIEWPORT_CLASS, 'mx-0 border-b', 'max-w-screen-lg-gutters')}>
        max-lg-gutters: <span className="text-quaternary">scope or</span>{' '}
        <WidthExplanation screen="screen-lg-gutters" />
        <span className="text-2xs text-tertiary">1008px</span>
        <div className={mergeClasses(SCREEN_CLASS, 'max-w-screen-lg')}>
          <WidthExplanation screen="screen-lg" />
          <span className="text-2xs text-tertiary">960px</span>
        </div>
      </div>
      <H3>screen-md</H3>
      <div className={mergeClasses(VIEWPORT_CLASS, 'mx-0 border-b', 'max-w-screen-md-gutters')}>
        max-md-gutters: <span className="text-quaternary">scope or</span>{' '}
        <WidthExplanation screen="screen-md-gutters" />
        <span className="text-2xs text-tertiary">788px</span>
        <div className={mergeClasses(SCREEN_CLASS, 'max-w-screen-md')}>
          <WidthExplanation screen="screen-md" />
          <span className="text-2xs text-tertiary">740px</span>
        </div>
      </div>
      <H3>screen-sm</H3>
      <div className={mergeClasses(VIEWPORT_CLASS, 'mx-0 border-b', 'max-w-screen-sm-gutters')}>
        max-sm-gutters: <span className="text-quaternary">scope or</span>{' '}
        <WidthExplanation screen="screen-sm-gutters" />
        <span className="text-2xs text-tertiary">468px</span>
        <div className={mergeClasses(SCREEN_CLASS, 'max-w-screen-sm')}>
          <WidthExplanation screen="screen-sm" />
          <span className="text-2xs text-tertiary">420px</span>
        </div>
      </div>
    </>
  );
}

function WidthExplanation({ screen }: { screen: string }) {
  return (
    <>
      <span className="text-quaternary">(</span>w<span className="text-quaternary">/</span>min-w
      <span className="text-quaternary">/</span>max-w<span className="text-quaternary">)</span>-{screen}
      <br />
    </>
  );
}
