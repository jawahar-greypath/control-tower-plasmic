// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Filter2FillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Filter2FillIcon(props: Filter2FillIconProps) {
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
        d={"M8.5 11.5L4 4.75v-1.5h12v1.5l-4.5 6.75V16l-3 1.5v-6z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Filter2FillIcon;
/* prettier-ignore-end */
