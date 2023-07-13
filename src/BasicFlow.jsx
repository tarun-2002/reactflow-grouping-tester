import React, { useCallback, MouseEvent } from 'react';
import ReactFlow, {
  Background,
  Controls,
  ReactFlowProvider,
  Node,
  Edge,
  useReactFlow,
  useNodesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

import './App.css';

const initialNodes: Node[] = [
  {
    id: '1',
    data: { label: 'Group' },
    position: { x: -100, y: 0 },
    style: {
      width: 300,
      height: 300,
    },
  },
  {
    id: '2',
    data: { label: 'Node 1' },
    position: { x: 250, y: 0 },
  },
  {
    id: '3',
    data: { label: 'Node 2' },
    position: { x: 250, y: 50 },
    
  },
  {
    id: '4',
    data: { label: 'Node 3' },
    position: { x: 250, y: 150 },

  },
  {
    id: '5',
    data: { label: 'Node 4' },
    position: { x: 250, y: 200 },

  },
];

const initialEdges: Edge[] = [];

const BasicFlow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const { getIntersectingNodes } = useReactFlow();

  const onNodeDragStop = useCallback(( MouseEvent, node: Node) => {
    const nodeWithIdOne = initialNodes.find((node) => node.id === '1');
    const intersections = getIntersectingNodes(nodeWithIdOne).map((n) => n.id);
  if(node.id!=="1"&&node.parentNode!=="1"){
    setNodes((ns) =>
      ns.map((n) => ({
        ...n,
        parentNode: intersections.includes(n.id) ? "1" : n.parentNode,
        extent:intersections.includes(n.id) ? "parent" : n.extent,
      }))
    );
  }

  }, [getIntersectingNodes, setNodes]);
  

  return (
    <ReactFlow
      nodes={nodes}
      edges={initialEdges}
      onNodesChange={onNodesChange}
      onNodeDragStop={onNodeDragStop}
      className="intersection-flow"
      minZoom={0.2}
      maxZoom={4}
      fitView
      selectNodesOnDrag={false}
    >
      <Background />
      <Controls />
    </ReactFlow>
  );
};
export default BasicFlow;