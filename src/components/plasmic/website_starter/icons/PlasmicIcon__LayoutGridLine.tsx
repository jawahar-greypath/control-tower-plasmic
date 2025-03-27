// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LayoutGridLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LayoutGridLineIcon(props: LayoutGridLineIconProps) {
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
          "M16.75 3.25a.75.75 0 01.75.75v12a.75.75 0 01-.75.75H3.25A.75.75 0 012.5 16V4a.75.75 0 01.75-.75h13.5zm-7.5 7.5H4v4.5h5.25v-4.5zm6.75 0h-5.25v4.5H16v-4.5zm-6.75-6H4v4.5h5.25v-4.5zm6.75 0h-5.25v4.5H16v-4.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LayoutGridLineIcon;
/* prettier-ignore-end */
