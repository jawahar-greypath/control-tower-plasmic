// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type More2LineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function More2LineIcon(props: More2LineIconProps) {
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
          "M10 3.25c-.619 0-1.125.506-1.125 1.125S9.381 5.5 10 5.5s1.125-.506 1.125-1.125S10.619 3.25 10 3.25zm0 11.25c-.619 0-1.125.506-1.125 1.125S9.381 16.75 10 16.75s1.125-.506 1.125-1.125S10.619 14.5 10 14.5zm0-5.625c-.619 0-1.125.506-1.125 1.125s.506 1.125 1.125 1.125 1.125-.506 1.125-1.125S10.619 8.875 10 8.875z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default More2LineIcon;
/* prettier-ignore-end */
