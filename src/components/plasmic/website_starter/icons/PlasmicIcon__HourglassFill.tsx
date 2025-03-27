// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HourglassFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HourglassFillIcon(props: HourglassFillIconProps) {
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
          "M5 4H4V3h8v1h-1v1c0 .808-.408 1.457-.922 1.988-.351.363-.779.698-1.213 1.012.434.314.862.649 1.213 1.012.514.53.922 1.18.922 1.988v1h1v1H4v-1h1v-1c0-.808.408-1.457.922-1.988.351-.364.779-.698 1.213-1.012-.434-.314-.862-.649-1.213-1.012C5.408 6.458 5 5.808 5 5V4zm1 0v1c0 .343.13.668.386 1h3.228c.256-.332.386-.657.386-1V4H6zm2 4.611c-.523.37-.996.72-1.36 1.096a3.42 3.42 0 00-.254.293h3.228a3.426 3.426 0 00-.255-.293C8.996 9.331 8.523 8.98 8 8.611z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HourglassFillIcon;
/* prettier-ignore-end */
