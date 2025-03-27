// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type LogoutBoxRLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function LogoutBoxRLineIcon(props: LogoutBoxRLineIconProps) {
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
          "M4.75 17.5a.75.75 0 01-.75-.75V3.25a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75V5.5h-1.5V4h-9v12h9v-1.5H16v2.25a.75.75 0 01-.75.75H4.75zM14.5 13v-2.25H9.25v-1.5h5.25V7l3.75 3-3.75 3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default LogoutBoxRLineIcon;
/* prettier-ignore-end */
