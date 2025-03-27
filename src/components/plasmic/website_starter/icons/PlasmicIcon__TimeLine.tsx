// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TimeLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TimeLineIcon(props: TimeLineIconProps) {
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
          "M10 17.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-1.5a6 6 0 100-12 6 6 0 000 12zm.75-6h3v1.5h-4.5V6.25h1.5V10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TimeLineIcon;
/* prettier-ignore-end */
