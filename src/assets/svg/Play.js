import * as React from "react"

const Play = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ? props.width : "800"}
    height={props.height ? props.height : "100%"}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.color ? props.color : "#1C274C"}
      d="M2.5 7.25a.75.75 0 0 0 0 1.5v-1.5Zm19.5 0H2.5v1.5H22v-1.5Z"
    />
    <path
      stroke={props.color ? props.color : "#1C274C"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M10.5 2.5 7 8M17 2.5 13.5 8M15 14.5c0-.633-.662-1.06-1.986-1.915-1.342-.866-2.013-1.299-2.514-.98-.5.317-.5 1.176-.5 2.895s0 2.578.5 2.896c.5.318 1.172-.115 2.514-.981C14.338 15.56 15 15.133 15 14.5Z"
    />
    <path
      stroke={props.color ? props.color : "#1C274C"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
    />
  </svg>
)
export default Play
