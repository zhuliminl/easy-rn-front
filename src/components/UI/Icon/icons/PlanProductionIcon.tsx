import React from "react";
import { IconProps } from "../types";
export function PlanProductionIcon(props: IconProps) {
  const {
    title = "Plan-production-icon",
    size,
    color,
    width,
    height,
    titleId,
  } = props;
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      width={size || width || "20px"}
      height={size || height || "20px"}
      role="img"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.564 16.274L10 5.05 3.436 16.274h13.128zM10.932 1.83a1.08 1.08 0 00-1.864 0L.149 17.078a1.08 1.08 0 00.933 1.626h17.836a1.08 1.08 0 00.933-1.626L10.932 1.831z"
        fill={color || "var(--easy-theme-icon-default)"}
      />
      <path
        d="M10 8.633l3.445 5.889h-6.89L10 8.632z"
        fill={color || "var(--easy-theme-icon-default)"}
      />
    </svg>
  );
}
