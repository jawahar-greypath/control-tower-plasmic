// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SortDescIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SortDescIcon(props: SortDescIconProps) {
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
          "M16 4v9h2.25l-3 3.75-3-3.75h2.25V4H16zm-6 10.5V16H3.25v-1.5H10zm1.5-5.25v1.5H3.25v-1.5h8.25zm0-5.25v1.5H3.25V4h8.25z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SortDescIcon;
/* prettier-ignore-end */
