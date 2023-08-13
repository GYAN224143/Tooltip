import "./App.css";
import Tippy from "@tippyjs/react";

import Tooltip1 from "./tooltips/Tooltip1";
import "tippy.js/dist/tippy.css";
import { followCursor } from "tippy.js";
import styled from "styled-components";

const PurpleTippy = styled(Tippy)`
  background-color: purple !important;
  border-radius: 20px;
`;

function App() {
  return (
    <>
      <PurpleTippy
        placement="bottom"
        content="This is top header"
        followCursor={true}
        plugins={[followCursor]}
      >
        <h1 className="heading">This is Tooltip</h1>
      </PurpleTippy>

      <Tooltip1 position={"right"} />
    </>
  );
}

export default App;
