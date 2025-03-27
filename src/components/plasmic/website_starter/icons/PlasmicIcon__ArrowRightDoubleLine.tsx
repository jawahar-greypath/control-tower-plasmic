// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ArrowRightDoubleLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ArrowRightDoubleLineIcon(props: ArrowRightDoubleLineIconProps) {
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
          "M14.975 10l-4.31-4.31-.982.982 3.328 3.329-3.328 3.328.982.982 4.31-4.31zm-3.923 0l-4.31-4.31-.983.982 3.329 3.329-3.329 3.328.982.982 4.31-4.31z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default ArrowRightDoubleLineIcon;
/* prettier-ignore-end */
