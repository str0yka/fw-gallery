import { forwardRef } from 'react';

export const ExpandIcon = forwardRef<React.ComponentRef<'svg'>, React.ComponentProps<'svg'>>(
  ({ color = 'currentColor', ...props }, ref) => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      ref={ref}
    >
      <path
        d="M10 13L4.80385 7.75L15.1962 7.75L10 13Z"
        fill={color}
      />
    </svg>
  ),
);
