// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneFillIcon(props: PhoneFillIconProps) {
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
          "M16.75 13.315v2.652a.75.75 0 01-.698.748c-.327.023-.595.035-.802.035-6.628 0-12-5.372-12-12 0-.207.011-.475.034-.803a.75.75 0 01.749-.697h2.652a.375.375 0 01.374.337c.017.173.032.31.047.414.15 1.04.455 2.052.906 3.001.072.15.025.33-.11.426L6.284 8.584a9.785 9.785 0 005.133 5.133l1.155-1.616a.347.347 0 01.43-.111 10.424 10.424 0 003.412.951.375.375 0 01.337.374h-.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PhoneFillIcon;
/* prettier-ignore-end */
