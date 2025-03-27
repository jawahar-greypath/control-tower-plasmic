// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupLineIcon(props: GroupLineIconProps) {
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
          "M2.5 17.5a6 6 0 1112 0H13a4.5 4.5 0 10-9 0H2.5zm6-6.75A4.499 4.499 0 014 6.25c0-2.486 2.014-4.5 4.5-4.5S13 3.764 13 6.25s-2.014 4.5-4.5 4.5zm0-1.5a3 3 0 100-6 3 3 0 100 6zm6.213 2.777A6.001 6.001 0 0118.25 17.5h-1.5a4.5 4.5 0 00-2.653-4.105l.615-1.368h.001zm-.516-8.467A4.126 4.126 0 0113 11.483v-1.51a2.625 2.625 0 00.78-4.956l.417-1.457z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupLineIcon;
/* prettier-ignore-end */
