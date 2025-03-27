// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector1Icon(props: Vector1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M18 0H0l7.43 6.8a2 2 0 002.659.037L18 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector1Icon;
/* prettier-ignore-end */
