import React from "react";
import { IconProps } from "../types";
export function RedditIcon(props: IconProps) {
  const { title = "Reddit-icon", size, color, width, height, titleId } = props;
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
        d="M14.466 2.634a1.79 1.79 0 00-.022.276c0 .948.747 1.716 1.667 1.716s1.667-.768 1.667-1.716-.746-1.716-1.667-1.716c-.41 0-.786.152-1.076.405L10.707.5 9.143 6.943c-2.081.141-3.953.79-5.365 1.77a2.18 2.18 0 00-1.556-.654C.995 8.059 0 9.083 0 10.347c0 .88.482 1.643 1.189 2.026a4.53 4.53 0 00-.078.834c0 3.476 3.98 6.293 8.889 6.293 4.91 0 8.889-2.817 8.889-6.293 0-.283-.026-.561-.078-.834A2.297 2.297 0 0020 10.347c0-1.264-.995-2.288-2.222-2.288-.606 0-1.155.25-1.556.654-1.538-1.067-3.622-1.742-5.928-1.795l1.221-5.03 2.95.746zM6.11 13.78c.92 0 1.667-.768 1.667-1.716s-.746-1.716-1.667-1.716c-.92 0-1.667.768-1.667 1.716S5.19 13.78 6.11 13.78zm7.778 0c.92 0 1.667-.768 1.667-1.716s-.747-1.716-1.667-1.716-1.667.768-1.667 1.716.746 1.716 1.667 1.716zm-7.47 1.813a.546.546 0 00-.77.158.583.583 0 00.154.794c1.209.83 2.703 1.244 4.197 1.244 1.494 0 2.988-.415 4.197-1.244a.583.583 0 00.154-.794.546.546 0 00-.77-.158c-1.023.701-2.302 1.052-3.581 1.052a6.754 6.754 0 01-2.222-.37 5.764 5.764 0 01-1.359-.682z"
        fill={color || "var(--easy-theme-icon-default)"}
      />
    </svg>
  );
}
