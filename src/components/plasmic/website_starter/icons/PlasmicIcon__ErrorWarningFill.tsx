// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ErrorWarningFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ErrorWarningFillIcon(props: ErrorWarningFillIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8 14A6 6 0 118 2a6 6 0 010 12zm-.6-4.2V11h1.2V9.8H7.4zm0-4.8v3.6h1.2V5H7.4z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ErrorWarningFillIcon;
/* prettier-ignore-end */
