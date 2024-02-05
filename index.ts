import { ComponentProps } from "react";
import { Node } from "reactflow";
import SourceTypeNode from "./SourceTypeNode";
import StreamNode from "./StreamNode";
import ConnectorNode from "./ConnectorNode";

const nodeTypes = {
  SourceTypeNode,
  StreamNode,
  ConnectorNode
} as const;

type NodeTypes = typeof nodeTypes;

type GetPropData<K extends keyof NodeTypes> = ComponentProps<
  NodeTypes[K]
>["data"];

export function makeNode<K extends keyof NodeTypes>(
  type: K,
  nodeOptions: Node<GetPropData<K>>
) {
  const node: Node<GetPropData<K>> = {
    ...nodeOptions,
    type: type
  };

  return node;
}

export default nodeTypes;
