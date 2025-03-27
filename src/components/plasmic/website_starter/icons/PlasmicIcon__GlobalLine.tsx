// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GlobalLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GlobalLineIcon(props: GlobalLineIconProps) {
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
          "M10 17.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm-1.717-1.75a13.424 13.424 0 01-1.263-5H4.047a6.006 6.006 0 004.236 5zm.24-5c.113 1.83.636 3.547 1.477 5.064a11.93 11.93 0 001.477-5.064H8.523zm7.43 0H12.98a13.424 13.424 0 01-1.263 5 6.006 6.006 0 004.236-5zM4.047 9.25H7.02a13.43 13.43 0 011.263-5 6.006 6.006 0 00-4.236 5zm4.476 0h2.954A11.927 11.927 0 0010 4.186 11.929 11.929 0 008.523 9.25zm3.194-5a13.425 13.425 0 011.263 5h2.973a6.006 6.006 0 00-4.236-5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GlobalLineIcon;
/* prettier-ignore-end */
