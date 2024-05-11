
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import styled from "styled-components";

// const PurpleTippy = styled(Tippy)`
//   background-color: purple !important;
//   borderradius: 44px;
//   /* Styling the arrow for different placements */
//   &[data-placement^="top"] {
//     .tippy-arrow {
//       border-top-color: purple;
//     }
//   }
// `;

const BlackTippy = styled(Tippy)`
  background-color: black !important;
  border-radius: 20px;
`;

const Tooltip1 = ({ position }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "40%",
      }}
    >
      <BlackTippy
        placement={position}
        content={
          <h3
            style={{
              width: "230px",
              textAlign: "center",
              padding: "5px",
              fontSize: "1.1rem",
            }}
          >
            Thanks for you hovering! I'm a tooltip
          </h3>
        }
      >
        <button
          style={{
            border: "none",
            background: "none",
            fontSize: "2rem",
            borderBottom: "3px dotted black",
          }}
        >
          Hover over me!
        </button>
      </BlackTippy>
    </div>
  );
};

export default Tooltip1;
