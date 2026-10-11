/* eslint-disable import-x/no-default-export */
type SVGIcon = import("react").FC<import("react").SVGProps<SVGSVGElement>>;

declare module "*.svg" {
  const url: string;
  export const ReactComponent: SVGIcon;
  export default url;
}

declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.gif" {
  const url: string;
  export default url;
}

declare module "*.jpg" {
  const url: string;
  export default url;
}

declare module "*.png" {
  const url: string;
  export default url;
}

declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}
