import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Handle, NodeProps, Position } from "reactflow";

type Props = {
  type: string;
};

const SourceTypeNode: FC<NodeProps<Props>> = (props) => {
  return (
    <Box border="1px" borderRadius="md" w="100px">
      {/* Actual Component */}
      <Box textAlign="center">
        <Text fontWeight="bold">{props.data.type}</Text>
      </Box>

      {/* Start Handler */}
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default SourceTypeNode;
