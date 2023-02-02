import type { PropsWithChildren } from "react";
import React from "react";

export default function Header({ children }: PropsWithChildren<object>) {
  return <h1 className="text-heading-5xl font-black mb-6">{children}</h1>;
}