import React from 'react'
import BasicFlow from "./BasicFlow"

import{
  ReactFlowProvider

} from 'reactflow';
export default function App() {
  return (
    <ReactFlowProvider>
      <BasicFlow />
    </ReactFlowProvider>
  );
}
