// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowDownSLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowDownSLineIcon(props: ArrowDownSLineIconProps) {
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
          "M10 10.879l3.713-3.712 1.06 1.06L10 13 5.227 8.227l1.06-1.06L10 10.879z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowDownSLineIcon;
/* prettier-ignore-end */
