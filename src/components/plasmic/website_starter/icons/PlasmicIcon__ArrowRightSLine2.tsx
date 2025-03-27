// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightSLine2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightSLine2Icon(props: ArrowRightSLine2IconProps) {
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
          "M8.637 8l-2.97-2.97.848-.849 3.819 3.818-3.819 3.819-.848-.849L8.637 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRightSLine2Icon;
/* prettier-ignore-end */
