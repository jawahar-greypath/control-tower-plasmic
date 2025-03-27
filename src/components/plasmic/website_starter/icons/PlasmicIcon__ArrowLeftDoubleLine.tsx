// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowLeftDoubleLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowLeftDoubleLineIcon(props: ArrowLeftDoubleLineIconProps) {
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
          "M5.025 10l4.31 4.311.982-.982-3.328-3.328 3.329-3.329-.983-.982L5.025 10zm3.923 0l4.31 4.311.983-.982-3.328-3.328 3.328-3.329-.982-.982L8.949 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowLeftDoubleLineIcon;
/* prettier-ignore-end */
