import { ButtonBase, Button, ButtonTheme } from "@expo/styleguide";
import React from "react";

const THEMES = [
  'primary',
  'secondary',
  'tertiary',
  'quaternary',
  'primary-destructive',
  'secondary-destructive'
] as ButtonTheme[];

function ButtonRow({ theme }: { theme: ButtonTheme }) {
  return (
    <>
      <div className="flex gap-6 mt-6" >
        <Button buttonTheme={theme} size="xs" />
        <Button buttonTheme={theme} size="sm" />
        <Button buttonTheme={theme} size="md" />
        <Button buttonTheme={theme} size="lg" />
        <Button buttonTheme={theme} size="xl" />
        <Button buttonTheme={theme} size="2xl" />
      </div>
      <div className="flex gap-6 mt-6" >
        <Button buttonTheme={theme} size="xs" disabled />
        <Button buttonTheme={theme} size="sm" disabled />
        <Button buttonTheme={theme} size="md" disabled />
        <Button buttonTheme={theme} size="lg" disabled />
        <Button buttonTheme={theme} size="xl" disabled />
        <Button buttonTheme={theme} size="2xl" disabled />
      </div></>
  )
}

export default function UI() {
  return (
    <>
      <h1 className="text-heading-5xl font-black">UI</h1>
      <h3 className="text-heading-3xl font-bold mt-4 mb-4">Button Base</h3>
      <ButtonBase onClick={() => alert('ButtonBase clicked')}>Button base</ButtonBase>
      <h3 className="text-heading-3xl font-bold mt-4 mb-4">Buttons</h3>
      {THEMES.map(buttonTheme => <ButtonRow theme={buttonTheme} key={`buttons-${buttonTheme}`} />)}
    </>
  );
}
