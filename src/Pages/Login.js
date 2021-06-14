import { Button, Input, Flex, Heading } from "@chakra-ui/react";
import Header from "../components/Header";

function LoginPage() {
  return (
    <>
      <Header />
      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" p={12} rounded={6}>
          <Heading mb={6}>Log in</Heading>
          <Input placeholder="UI@email" variant="filled" mb={3} type="email" />
          <Input placeholder="******" variant="filled" mb={3} type="password" />
          <Button mb={6} colorScheme="teal">
            Log in
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default LoginPage;
