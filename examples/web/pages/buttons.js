import { ButtonBase } from "@expo/styleguide-ui";

import Header from "../components/Header";

export default function Page() {
  return (
    <>
      <Header>Buttons</Header>
      <div className="flex flex-col gap-4">
      <ButtonBase onClick={() => alert("Hello 👋")}>Base</ButtonBase>
      <ButtonBase disabled>Base Disabled</ButtonBase>
      </div>
    </>
  )
}