import * as React from 'react';

export type IconProps = {
  size?: number | string;
  title?: string;
  color?: string;
  /**
   * A suffix added to the end of the unique generated ID for the icon. This is useful if you have multiple of the same icon on the page and need to pass accessibility guidelines.
   */
  titleId?: string;
} & React.SVGProps<SVGSVGElement>;
