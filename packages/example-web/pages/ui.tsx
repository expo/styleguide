import { ButtonBase } from "@expo/styleguide";

export default function UI() {
  return (
    <div className="p-8">
      <h1 className="text-heading-5xl font-black">UI</h1>
      <h3 className="text-heading-3xl font-bold mt-8">Button Base</h3>
      <ButtonBase onClick={() => alert('ButtonBase clicked')}>Button base</ButtonBase>
    </div>
  );
}
