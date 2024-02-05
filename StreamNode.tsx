import { Box, Text, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Handle, NodeProps, Position } from "reactflow";

type Props = {
  name: string;
};

const StreamNode: FC<NodeProps<Props>> = (props) => {
  return (
    <Box border="1px" borderRadius="md" w="200px" bg="white">
      <Handle type="target" position={Position.Left} />

      {/* Actual Component */}
      <Flex flexDirection="column">
        <Box>
          <Text fontWeight="semibold" textAlign="center">
            {props.data.name}
          </Text>
        </Box>
        <Box bg="gray.300" p="4">
          <Text fontWeight="semibold">Number of Events</Text>
          <Text>52</Text>
        </Box>
      </Flex>

      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default StreamNode;
