// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SearchLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SearchLineIcon(props: SearchLineIconProps) {
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
          "M14.523 13.463l3.212 3.211-1.06 1.061-3.212-3.212A6.72 6.72 0 019.25 16 6.752 6.752 0 012.5 9.25 6.752 6.752 0 019.25 2.5 6.752 6.752 0 0116 9.25a6.72 6.72 0 01-1.477 4.213zm-1.504-.557A5.233 5.233 0 0014.5 9.25C14.5 6.349 12.15 4 9.25 4A5.248 5.248 0 004 9.25c0 2.9 2.349 5.25 5.25 5.25a5.233 5.233 0 003.656-1.481l.113-.113z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SearchLineIcon;
/* prettier-ignore-end */
