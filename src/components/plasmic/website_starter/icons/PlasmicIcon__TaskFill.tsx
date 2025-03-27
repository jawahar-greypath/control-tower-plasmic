// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TaskFillIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TaskFillIcon(props: TaskFillIconProps) {
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
          "M16.75 3.244v13.512a.75.75 0 01-.745.744H3.995a.745.745 0 01-.745-.744V3.244a.75.75 0 01.745-.744h12.01c.411 0 .745.333.745.744zm-7.28 7.598L7.613 8.985l-1.06 1.06 2.917 2.918 4.242-4.243-1.06-1.06-3.182 3.18v.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TaskFillIcon;
/* prettier-ignore-end */
