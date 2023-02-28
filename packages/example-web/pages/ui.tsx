import { ButtonBase } from '@expo/styleguide';

export default function UI() {
  return (
    <>
      <h1 className="text-heading-5xl font-black">UI</h1>
      <h3 className="text-heading-3xl font-bold mt-4 mb-4">Button Base</h3>
      <ButtonBase onClick={() => alert('ButtonBase clicked')}>
        Button base
      </ButtonBase>
    </>
  );
}
