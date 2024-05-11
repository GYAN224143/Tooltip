import "./App.css";
import Tippy from "@tippyjs/react";

import Tooltip1 from "./tooltips/Tooltip1";
import "tippy.js/dist/tippy.css";
import { followCursor } from "tippy.js";
import styled from "styled-components";
import Gyan from "./tooltips/Gyan";
import Monu from "./tooltips/Monu";

const PurpleTippy = styled(Tippy)`
  background-color: purple !important;
  border-radius: 20px;
`;

function App() {
  return (
    <>
      <div className="poppins-bold ">
        <PurpleTippy
          placement="bottom"
          content="This is top header"
          followCursor={true}
          plugins={[followCursor]}
        >
          <h1 className="heading">This is Tooltip</h1>
        </PurpleTippy>
        <Gyan />
        <Monu />

        <Tooltip1 position={"right"} />
      </div>
    </>
  );
}

export default App;
