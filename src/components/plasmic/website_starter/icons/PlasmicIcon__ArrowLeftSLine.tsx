// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowLeftSLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowLeftSLineIcon(props: ArrowLeftSLineIconProps) {
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
          "M9.204 10l3.713 3.712-1.06 1.06L7.082 10l4.773-4.773 1.06 1.06L9.205 10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowLeftSLineIcon;
/* prettier-ignore-end */
