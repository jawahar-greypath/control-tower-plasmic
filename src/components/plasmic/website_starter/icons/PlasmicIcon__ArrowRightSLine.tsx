// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightSLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightSLineIcon(props: ArrowRightSLineIconProps) {
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
          "M10.796 10L7.083 6.286l1.06-1.06 4.774 4.772-4.773 4.773-1.06-1.06 3.712-3.713z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRightSLineIcon;
/* prettier-ignore-end */
