// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DoorOpenLineIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DoorOpenLineIcon(props: DoorOpenLineIconProps) {
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
          "M2.5 16.75v-1.5H4V4.626a.75.75 0 01.616-.738l7.104-1.291a.449.449 0 01.53.442V4l3 .001a.75.75 0 01.75.75v10.5h1.5v1.5h-3V5.5h-2.25v11.25H2.5zm8.25-12.453l-5.25.956v9.997h5.25V4.297zM10 9.25v1.5H8.5v-1.5H10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DoorOpenLineIcon;
/* prettier-ignore-end */
