import { Box, ChakraProvider, Heading } from "@chakra-ui/react";
import * as React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

// React Flow Stuff
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  Node,
  Edge,
  DefaultEdgeOptions
} from "reactflow";
import "reactflow/dist/style.css";

import nodeTypes, { makeNode } from "./nodes";

const nodes: Node[] = [
  makeNode("SourceTypeNode", {
    id: "Etherem",
    data: { type: "Ethereum" },
    position: { x: 50, y: 50 },
    deletable: false
  }),

  makeNode("StreamNode", {
    id: "1",
    data: { name: "my eth stream" },
    position: { x: 250, y: 50 },
    deletable: false
  }),
  makeNode("StreamNode", {
    id: "2",
    data: { name: "paused eth stream" },
    position: { x: 250, y: 200 },
    deletable: false
  }),
  makeNode("StreamNode", {
    id: "3",
    data: { name: "3rd eth stream" },
    position: { x: 250, y: 350 },
    deletable: false
  }),

  makeNode("ConnectorNode", {
    id: "c1",
    data: { name: "my webhook connector" },
    position: { x: 550, y: 50 },
    deletable: false
  })
];

const edges: Edge[] = [
  {
    // can gen a unique id, or merge the source+target to make id
    id: "Etherem-1",
    source: "Etherem",
    target: "1",
    deletable: false
  },
  {
    // can gen a unique id, or merge the source+target to make id
    id: "Etherem-2",
    source: "Etherem",
    target: "2",
    deletable: false
  },
  {
    // can gen a unique id, or merge the source+target to make id
    id: "1-c1",
    source: "1",
    target: "c1",
    deletable: false
  }
];

const defaultEdgeOptions: DefaultEdgeOptions = {
  animated: true
};

function App() {
  return (
    <Box px="5">
      <Heading>Welcome to Chakra + TS</Heading>

      <Box w="full" h="500px" border="1px">
        <ReactFlow
          nodeTypes={nodeTypes}
          defaultNodes={nodes}
          defaultEdges={edges}
          defaultEdgeOptions={defaultEdgeOptions}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </Box>
    </Box>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ReactFlowProvider>
        <App />
      </ReactFlowProvider>
    </ChakraProvider>
  </React.StrictMode>
);
