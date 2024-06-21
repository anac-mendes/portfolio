import * as React from "react";

const Laptop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width ? props.width : "800"}
    height={props.height ? props.height : "100%"}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props.color ? props.color : "#1C274C"}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M19.647 15.536V8c0-1.886 0-2.828-.586-3.414C18.476 4 17.533 4 15.647 4H12m7.647 11.536 1.744 1.8.088.092a2 2 0 0 1 .52 1.284l.001.127c0 .15 0 .224-.004.287a2 2 0 0 1-1.87 1.87 5.006 5.006 0 0 1-.287.004H4.161c-.15 0-.224 0-.287-.004a2 2 0 0 1-1.87-1.87C2 19.063 2 18.988 2 18.84l.001-.127a2 2 0 0 1 .52-1.284l.088-.092 1.744-1.8m15.294 0h-2.611m-12.683 0V8c0-1.886 0-2.828.586-3.414C5.525 4 6.467 4 8.353 4m-4 11.536H13M9.5 18.5h5"
    />
    <path
      fill={props.color ? props.color : "#1C274C"}
      d="M12.75 6.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
    />
  </svg>
)
export default Laptop
