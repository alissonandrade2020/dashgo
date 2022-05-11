import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { AiTwotoneAlert } from "react-icons/ai";
import Header from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Head>
        <title>Estatisticas | dashgo.</title>
      </Head>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
            Estatisticas{" "}
            </Heading>
          </Flex>

          <Flex
            justify="space-between"
            padding="250px"
            border="solid #039"
            borderRadius={8}
            align="center"
            fontSize="30"
          >
            <Flex color="red">
              <AiTwotoneAlert />
            </Flex>
            Página em construção....
            <Flex color="red">
              <AiTwotoneAlert />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
