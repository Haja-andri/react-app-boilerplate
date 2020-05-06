import React from "react";
import { Box, Heading, Flex, Text, Button, Stack } from "@chakra-ui/core";
import ChakraWrapper from "../wrappers/ChakraWrapper";

function LandingPage() {
  return (
    <ChakraWrapper>
      <Flex h="100vh">
        <Box textAlign="center" m="auto">
          <Stack spacing={4}>
            <Box>
              <Heading
                color="primary.500"
                as="h1"
                size="2xl"
                fontWeight="bolder"
              >
                Catchy one liner
              </Heading>
              <Text fontSize="lg" color="primary.400">
                Quick awsome, yet very consize description
              </Text>
            </Box>
            <Box>
              <Button size="lg" variantColor="success">
                Click me for some magic
              </Button>
            </Box>
          </Stack>
        </Box>
      </Flex>
    </ChakraWrapper>
  );
}

export default LandingPage;
