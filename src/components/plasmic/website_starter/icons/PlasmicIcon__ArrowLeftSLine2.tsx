// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowLeftSLine2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowLeftSLine2Icon(props: ArrowLeftSLine2IconProps) {
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
          "M7.363 8l2.97 2.97-.848.848-3.818-3.819 3.818-3.818.849.848L7.364 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowLeftSLine2Icon;
/* prettier-ignore-end */
