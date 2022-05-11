import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Alisson de Andrade Araújo</Text>
          <Text color="gray.300" fontSize="small">
            http://alissondeandradearaujo.000webhostapp.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Alisson Andrade "
        src="https://github.com/alissonandrade2020.png"
      />
    </Flex>
  );
}
