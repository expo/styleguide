import { HTMLAttributes} from "react";

export function H1({ children, ...rest }: HTMLAttributes<HTMLHeadingElement>){
  return <h1 className="text-heading-5xl font-black" {...rest}>{children}</h1>;
}

export function H3({ children, ...rest }: HTMLAttributes<HTMLHeadingElement>){
  return <h3 className="text-heading-3xl font-bold mt-10 mb-4" {...rest}>{children}</h3>;
}