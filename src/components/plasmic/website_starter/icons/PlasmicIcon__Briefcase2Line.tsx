// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Briefcase2LineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Briefcase2LineIcon(props: Briefcase2LineIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 20 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M6.25 4.75V2.5A.75.75 0 017 1.75h6a.75.75 0 01.75.75v2.25h3a.75.75 0 01.75.75V16a.75.75 0 01-.75.75H3.25A.75.75 0 012.5 16V5.5a.75.75 0 01.75-.75h3zm9.75 6H4v4.5h12v-4.5zm0-4.5H4v3h2.25v-1.5h1.5v1.5h4.5v-1.5h1.5v1.5H16v-3zm-8.25-3v1.5h4.5v-1.5h-4.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Briefcase2LineIcon;
/* prettier-ignore-end */
