// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Filter2LineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Filter2LineIcon(props: Filter2LineIconProps) {
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
          "M9.2 9.2v3.6L6.8 14V9.2L3.2 3.8V2.6h9.6v1.2L9.2 9.2zM4.642 3.8L8 8.836 11.358 3.8H4.642z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Filter2LineIcon;
/* prettier-ignore-end */
