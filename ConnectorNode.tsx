import { Box, Text, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Handle, NodeProps, Position } from "reactflow";

type Props = {
  name: string;
};

const ConnectorNode: FC<NodeProps<Props>> = (props) => {
  return (
    <Box border="1px" borderRadius="md" w="200px" bg="white">
      <Handle type="target" position={Position.Left} />

      {/* Actual Component */}
      <Flex flexDirection="column">
        <Box>
          <Text textAlign="center">Connector</Text>
          <Text fontWeight="semibold" textAlign="center">
            {props.data.name}
          </Text>
        </Box>
        <Box bg="gray.300" p="4">
          <Text fontWeight="semibold">Number of Results</Text>
          <Text>52</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default ConnectorNode;
